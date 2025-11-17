import { fetchDeals } from "~~/server/services/kcDeals"
import { transformRaiseData } from "../utils/transform"

// https://nuxt.com/docs/4.x/directory-structure/server
// EXPLORE - https://nuxt.com/docs/4.x/directory-structure/server#forwarding-context-headers

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Number(query.page) || 1
  
  // kc response is fixed at 25 and we are hardcoding the response to 50 in this example
  // we could adjust for different limits requested by the client with a different approach / math
  try {    
    const kcPage1 = (page - 1) * 2 + 1
    const kcPage2 = kcPage1 + 1

    const [batch1, batch2] = await Promise.all([
      fetchDeals(kcPage1),
      fetchDeals(kcPage2)
    ])
    
    const allItems = [...batch1.items, ...batch2.items]

    return {
      totalPages: Math.ceil(batch1.totalPages / 2),
      totalCount: batch1.totalCount,
      items: allItems,
      status: batch1.status
    }
  } catch (err) {
    console.error('Error fetching deals', err)
    throw createError({ 
      statusCode: 500, 
      statusMessage: 'Error fetching deals'
    })
  }
})
