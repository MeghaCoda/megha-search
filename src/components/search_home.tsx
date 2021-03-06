import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Col, Row, Button, Input } from 'antd'
import { isValidQuery, getQueryStringsFromState, generateSearchUrl } from "../helpers/search"
import { SearchQueryParams, APIError, DataState } from "../d"
import SearchResults from "./search_results"
import SingleResultPage from "./single_result_page"
import FilterBar from "./filter_bar"
import QueryString from "query-string"
import axios from "axios"

const SearchHome: React.FC = () => {

    const initSearchState: SearchQueryParams = {
        name: "",
        page: 1,
        descending: true,
        company: "",
        category: "",
        level: "",
        location: ""
    }

    const initSearchDataState: DataState = {
        isFetching: false,
        hasFetched: false,
        response: null,
        filteredResponse: null,
        filters: null
    }

    const location = useLocation()
    const initialQueries = QueryString.parse(location.search)
    const initialID: string | undefined = initialQueries?.id as string

    const [searchState, setSearchState] = useState(initSearchState)
    const [dataState, setDataState] = useState(initSearchDataState)

    useEffect(() => {
        let results: any = dataState.response?.results
        let filters: any = dataState.filters
        if (!!results && !!filters) {
        Object.keys(filters).forEach((key: any) => {
            switch(key) {
                case "company":
                    results = results?.filter((result: any) => result.company.name === filters[key])
                    break
                case "level":
                    results = results?.filter((result: any) => !!result.levels.find((level: any) => level.name === filters[key]) )
                    break
                case "location":
                    results = results?.filter((result: any) => !!result.locations.find((location: any) => location.name === filters[key]))
                    break
                case "category":
                    results = results?.filter((result: any) => !!result.categories?.find((category: any) => category.name === filters[key]))
                    break
                default:
                    break

                }
            }
        )
        }
        let newFilteredResponse = {...dataState.filteredResponse, results}
        setDataState(
            {...dataState, 
                filteredResponse: {...newFilteredResponse} })
                /* unsure why the linter wants me to add dataState as a dependency.
                1) This function shouldn't trigger when other portions of dataState
                change. 
                2) setting dataState as a dependency triggers an infinite loop. */
                /* eslint-disable */
                
    }, [dataState.filters])
    /* eslint-enable */

    const invalidQuery = !isValidQuery(searchState.name)

    const getSearchResults = (queryString: string): any => { //eslint:disable
        setDataState({...dataState, isFetching: true, filteredResponse: null})
        const url = generateSearchUrl(queryString)
        axios.get(url).then((response: any) => {
            const data = response.data
            setDataState({response: data, isFetching: false, filteredResponse: data, filters: null, hasFetched: true})
        })
        .catch((message: APIError) => {
            return new Error(`${message.code}: ${message.error}`)
        })
    }

    const submitSearch = () => {
        if (!invalidQuery) { 
            const queryStr: any = getQueryStringsFromState(searchState)
            getSearchResults(queryStr)
        }
    }

    const filterResults = (filterObj: any) => {
        setDataState({...dataState, filters: {...dataState.filters, ...filterObj}})

    }
    const clearFilters = () => {
        setDataState({...dataState, filters: null})
    }

    if (initialID) {
        return (
        <>
        <Row>
        <Col span={12} className="full-width-col text-center">
           <h1>Megha Search</h1>
           <a href={window.location.origin}>Go to search</a>
           <SingleResultPage id={initialID} />
           </Col>
           </Row>
           </>


        )
    }


    return (
        <div className="search-bar">
        <Row>
        <Col span={12} className="full-width-col text-center">
           <h1>Megha Search</h1>
           <Row>
            <Col xs={12} lg={3}>
                <label htmlFor="search-input">Search for jobs by title:</label>
                <Input name="search-input" type="text" 
                onChange={(e) => setSearchState({...searchState, name: (e.target.value)})}
                onPressEnter={() => submitSearch()} />
            </Col>
            <Col span={4} offset={1} className="flex-bottom">
            <Button type="primary" name="submit" disabled={invalidQuery} onClick={() => submitSearch()}>Search</Button>
            </Col>
            </Row>
        </Col>
        </Row>
        
        {!!dataState.response?.results?.length && <FilterBar clearFilters={clearFilters} results={dataState?.response.results} onSelect={filterResults} />}
        {!dataState.filteredResponse?.results?.length && dataState.hasFetched && <div>No results</div>}
        {!!dataState.filteredResponse?.results?.length && !!dataState.response?.results?.length && <>
        
            <SearchResults 
            page={dataState.response.page}
            pageCount={dataState.response.page_count}
            results={dataState.filteredResponse.results} />
        
        </>}
        </div>
    )

}

export default SearchHome