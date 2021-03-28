import React from "react"
import { SearchResult } from "../d"
import { Col, Row } from 'antd'
import SingleResult from "./single_result"

interface Props {
    page: number,
    pageCount: number,
    results: SearchResult[]
}

const SearchResults: React.FC<Props> = props => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <h2>Results:</h2>

                    <div className="results-list">
                        {props.results.map(result => <SingleResult key={result.id} result={result} />
                        )}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <hr />
                    <div>{`Page ${props.page} of ${props.pageCount}`}</div>
                </Col>
            </Row>
        </>
    )

}

export default SearchResults