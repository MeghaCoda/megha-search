import React from "react"
import { SearchResult } from "../d"

interface Props {
    result: SearchResult
}

const SingleResult: React.FC<Props> = props => {
    
    return (
        <div className="result">Results are here!{JSON.stringify(props.result)}</div>
    )

}

export default SingleResult