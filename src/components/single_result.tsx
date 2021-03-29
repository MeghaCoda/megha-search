import React from "react"
import { SearchResult } from "../d"
import FullResult from "./full_result"
import "../assets/scss/single_result.scss"

interface Props {
    result: SearchResult
    fullView?: boolean
}

const SingleResult: React.FC<Props> = props => {

    const { name, id, levels, locations, categories, refs, company } = props.result

    let contentPreview: string, textOnlyPreview, shortDesc

    if (!props.fullView) {
    contentPreview = props.result.contents.substring(0, 200) // get the first 200 chars
    textOnlyPreview = contentPreview.replace(/(<([^>]+)>)/gi, ""); // strip html
    shortDesc = textOnlyPreview.substring(0, 100) // clip it to 100 chars
    }

    return (
        <div className="result text-left" style={{ borderTop: "1px solid gray" }}>
            <div className="result-label title">{name}</div>
            <div className="company"><span className="result-label">Company:</span> {company.name}</div>

            {levels.length && <div className="levels"><span className="result-label">Levels:</span>
            {levels.map((level, i) => {
                return <span key={i}>
                    {level.name}
                </span>
            })}
            </div>}

            {locations.length && <div className="locations"><span className="result-label">Locations:</span>
            {locations.map((location, i) => {
                return <span key={i}>
                    {location.name}
                </span>
            })}
            </div>}

            {categories.length > 0 && <div className="categories">
            <span className="result-label">Categories:</span>
            {categories.map((category, i) => {
                return <span key={i}>
                    {category.name}
                </span>
            })}
            </div>}
            <div className="id"><span className="result-label">ID:</span> {id}</div>
            {!props.fullView && <div>
                <span className="result-label description">Description:</span> {shortDesc}... 
                <a className="view-full-description"
                href={`${window.location.origin}?id=${id}`}
                target="_blank"
                rel="noreferrer"
                aria-label="View Full Description">View Full Job Description</a>
            </div>}
            {props.fullView && <FullResult result={props.result} />}

            <a className="view-original" href={refs.landing_page} target="#blank">View original listing</a>

        </div>
    )

}

export default SingleResult