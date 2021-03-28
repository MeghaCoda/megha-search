import { initSearchParams, SearchQueryParams } from "../d"
import QueryString from "query-string"

export const isValidQuery = (query: string):boolean => {
    return query.length > 0
}


export const generateSearchUrl = (queryString: string):string => {
    const baseUrl = "https://www.themuse.com/api/public/jobs"
    return `${baseUrl}?${queryString}`
}

export const fetchResults = (queryString: string): any => { //eslint:disable
    const url = generateSearchUrl(queryString)
    console.log(url) 
    fetch(url).then((response: any) => {
        console.log(response)

    })

}

export const getQueryStringsFromState = (state: SearchQueryParams):any => { // booooo any's >_<
    let anyState = state as any 
    const keys = Object.keys(anyState)
    let queryObj: any = {} 
    keys.map(key => {
        if (!!anyState[key]) {
            queryObj[key] = anyState[key]
        }
    })
    const queryStr: any = QueryString.stringify(queryObj)
    return queryStr
}
