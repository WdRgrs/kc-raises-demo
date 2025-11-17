export type RaiseItem = any // TODO - type out when possible

export interface TransformedRaiseItem {
  id: number
  name: string
  raise_status: 'Active' // maybe: | 'Not Funded'
  platform: string
  // ! alternative to platform as a string
  // platform: {
  //   id: number
  //   name: string
  // }
  funding_gather_money_raised_to_date: string
  valuation: string
  raw: RaiseItem
}

export interface BaseResposne<T> {
  data: {
    count: number
    total_count: number
    total_pages: number
    current_page: number
    result: T[]
  }
  status: {
    timestamp: Date
    status_code: number
    error_message: string
    credit_cost: number
    credits_remaining: number
  }
}

export interface TransformedRaiseResponse {
  totalPages: number
  items: TransformedRaiseItem[]
  status: BaseResposne<never>['status']
}