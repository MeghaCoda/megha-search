import { useState } from "react"
import { Col, Row, Button, Input } from 'antd'
import { isValidQuery } from "../helpers/search"
const SearchHome: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const invalidQuery = !isValidQuery(searchQuery)
    return (
        <div className="search-bar">
        <Row>
        <Col span={12} offset={2} className="full-width-col">
           <h1>Muse Searcher</h1>
           <Row>
            <Col span={3}>
                <label htmlFor="search-input">Search for jobs by title:</label>
                <Input name="search-input" type="text" onChange={(e) => setSearchQuery(e.target.value)}></Input>

            
            </Col>
            <Col span={4} offset={1} className="flex-bottom">
            <Button type="primary" name="submit" disabled={invalidQuery}>Search</Button>
            </Col>
            </Row>
        </Col>
        </Row>
        </div>
    )

}

export default SearchHome