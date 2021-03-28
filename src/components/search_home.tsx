import { useState } from "react"
import { Col, Row, Button, Input } from 'antd'
import { isValidQuery, fetchResults, getQueryStringsFromState } from "../helpers/search"
import { SearchQueryParams } from "../d"

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

    const [searchState, setSearchState] = useState(initSearchState)

    


    const invalidQuery = !isValidQuery(searchState.name)

    const submitSearch = () => {
        if (!invalidQuery) { 
            const queryStr: any = getQueryStringsFromState(searchState)
            const data: any = fetchResults(queryStr)
        }
    }
    

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
        </div>
    )

}

export default SearchHome