import React from "react"
import { SearchResult } from "../d"
import sanitizeHtml from 'sanitize-html'

interface Props {
    result: SearchResult
}

const SingleResult: React.FC<Props> = props => {

    const markup = sanitizeHtml(props.result.contents) 

    return (
        <div className="result">

            <div dangerouslySetInnerHTML={{__html: markup }} />
        </div>
    )

}

export default SingleResult