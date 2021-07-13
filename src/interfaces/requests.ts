export default {}

export type FetchIssuesOptionsType = {
  perPage?: number | string,
  page?: number | string,
  state?: 'open' | 'closed' | 'all'
}