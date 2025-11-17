import type { BaseResposne, RaiseItem, TransformedRaiseResponse } from "~~/types/raises"
import { transformRaiseData } from "~~/server/utils/transform"
// “api/v1/deals”
// ex: https://api.kingscrowd.dev/api/v1/deals?page=1

// sort: https://api.kingscrowd.dev/api/v1/deals?order_by=close_date&sort=desc
// filter: https://api.kingscrowd.dev/api/v1/deals?filters=[{"key":"raise_status","symbol":"=","value":["Active"]},{"key":"funding_gather_last_week_investment","symbol":">=","value":"100000"}]

export async function fetchDeals(page: number): Promise<TransformedRaiseResponse> {
  const config = useRuntimeConfig()
  const url = config.public.kcApiUrl

  if (process.dev) {
    console.info("FETCHING FROM KC API - mind token usage")
  }

  const filters = [
    {
      "key":"raise_status",
      "symbol":"=",
      "value":["Active"]
    },
    {
      "key":"crowdfunding_type_1",
      "symbol":"=",
      "value":["RegCF","RegA+"]
    }
  ]

  const res = await $fetch<BaseResposne<RaiseItem>>(`${url}/deals`, {
    headers: { 
      Authorization: `Bearer ${config.kcApiKey}`,
    },
    query: {
      page,
      filters: JSON.stringify(filters),
    }
  })

  return {
    totalPages: res.data.total_pages,
    items: res.data.result.map(transformRaiseData),
    status: res.status
  }
}
