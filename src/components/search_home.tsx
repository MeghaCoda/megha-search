import { useState, createContext } from "react"
import { Col, Row, Button, Input } from 'antd'
import { isValidQuery, getQueryStringsFromState, generateSearchUrl } from "../helpers/search"
import { SearchQueryParams, APIError, DataState } from "../d"
import SearchResults from "./search_results"
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
        response: null
    }

    const [searchState, setSearchState] = useState(initSearchState)
    const [dataState, setDataState] = useState(initSearchDataState)

    const invalidQuery = !isValidQuery(searchState.name)

    const getSearchResults = (queryString: string): any => { //eslint:disable
        setDataState({...dataState, isFetching: true})
        const url = generateSearchUrl(queryString)
        console.log(url) 
        axios.get(url).then((response: any) => {
            const data = response.data
            setDataState({response: data, isFetching: false})
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

    const SearchResultContext = createContext(initSearchDataState)
    

    return (
        <div className="search-bar">
        <Row>
        <Col span={12} offset={2} className="full-width-col">
           <h1>Muse Searcher</h1>
           <Row>
            <Col span={3}>
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
        {!!dataState.response?.results?.length && <>
        <SearchResultContext.Provider value={dataState}>
            <SearchResults 
            page={dataState.response.page}
            pageCount={dataState.response.page_count}
            results={dataState.response.results} />
        </SearchResultContext.Provider>
        </>}
        </div>
    )

}

export default SearchHome