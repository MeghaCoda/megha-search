export interface Level {
    name: string,
    short_name: string,
}
export interface Category {
    name?: string
}
export interface Location {
    name: string
}

export interface LandingPage {
    landing_page: string,
}

export interface Company {
    id: number,
    short_name: string,
    name: string
}
export interface SearchResult {
    contents: string, // unformatted HTML - needs to be sanitized
    name: string,
    type: string,
    publication_date: string,
    short_name: string,
    model_type: string,
    id: number
    locations: Location[]
    categories: Category[],
    tags: any[], //eslint:disable-line - None of the results I queried had tags. Placeholder until the data shape is known. 
    refs: LandingPage,
    company: Company

}

export interface SearchResponse {
    page: number,
    page_count: number,
    items_per_page: number,
    took: number,
    timed_out: boolean,
    total: number,
    results: SearchResult[]
}

export interface SearchQueryParams {
    name: string, // functionally this is the job title
    page?: number,
    descending?: boolean,
    company?: string,
    category?: string,
    level?: string,
    location?: string
}

export const initSearchParams = {
    page: 1,
    descending: true,
    name: ""
}

export interface stringSearchQueryParams {
    name: string, 
    page?: string,
    descending?: string,
    company?: string,
    category?: string,
    level?: string,
    location?: string
}