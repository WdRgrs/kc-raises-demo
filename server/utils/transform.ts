import type { RaiseItem, TransformedRaiseItem } from "~~/types/raises"

/**
 * Normalize raw raise item to minimal display obj
 * @param {RaiseItem} raise item 
 * @returns {TransformedRaiseItem} partial raise item
 */
export function transformRaiseData(item: RaiseItem): TransformedRaiseItem {
  return {
    id: item.id,
    name: item.name,
    raise_status: 'Active',
    platform: item.platform_id.name,
    // ! Platform id might be worth saving - would require some minor adjustments to table & csv
    // platform: {
    //   id: item.platform_id.id,
    //   name: item.platform_id.name
    // },
    funding_gather_money_raised_to_date: item.funding_gather_money_raised_to_date?.formatted,
    valuation: item.valuation?.formatted,
    raw: item.raw
  }
}
