import React from "react"
import { SearchResult } from "../d"
import { Col, Row } from 'antd'
import SingleResult from "./single_result"

interface Props {
    results: SearchResult[]
}

const SearchResults: React.FC<Props> = props => {
    return (
        <Row>
            <Col span={12}>
                <h2>Results:</h2>

            <div className="results-container">
                {props.results.map(result => <SingleResult key={result.id} result={result} />
                )}
            </div>
            </Col>
            </Row>
    )

}

export default SearchResults