import React from "react"
import { SearchResult } from "../d"
import sanitizeHtml from 'sanitize-html'
import "../assets/scss/single_result.scss"

interface Props {
    result?: SearchResult
}

const FullResult: React.FC<Props> = props => {

    if (!props.result) {
        return <div>No results!</div>
    }
    else {

        const markup = sanitizeHtml(props.result.contents)

        return (
            <div className="result">

                <div dangerouslySetInnerHTML={{ __html: markup }} />
            </div>
        )
    }

}

export default FullResult