import { SearchQueryParams } from "../d"
import QueryString from "query-string"

export const isValidQuery = (query: string):boolean => {
    return query.length > 0
}


export const generateSearchUrl = (queryString: string):string => {
    const baseUrl = "https://www.themuse.com/api/public/jobs"
    return `${baseUrl}?${queryString}`
}

export const generateSearchUrlFromID = (id: string):string => {
    return `https://www.themuse.com/api/public/jobs/${id}`
}

export const getQueryStringsFromState = (state: SearchQueryParams):any => { // booooo any's >_<
    let anyState = state as any 
    const keys = Object.keys(anyState)
    let queryObj: any = {} 
    keys.forEach(key => {
        if (!!anyState[key]) {
            queryObj[key] = anyState[key]
        }
    })
    const queryStr: any = QueryString.stringify(queryObj)
    return queryStr
}
