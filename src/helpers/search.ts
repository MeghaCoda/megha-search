import { SearchQueryParams } from "../d"
import QueryString from "query-string"

export const isValidQuery = (query: string):boolean => {
    return query.length > 0
}


export const generateSearchUrl = (queryString: string):string => {
    // url name is split so it cannot be searched, per the company's request
    const baseUrl = "https://www.themu" + "se.com/api/public/jobs" //eslint-disable-line
    return `${baseUrl}?${queryString}`
}

export const generateSearchUrlFromID = (id: string):string => {
    // url name is split so it cannot be searched, per the company's request
    return "https://www.themu" + "se.com/api/public/jobs/" +id // eslint-disable-line
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
