import React from "react"
import { SearchResult } from "../d"
import "../assets/scss/single_result.scss"

interface Props {
    result: SearchResult
}

/*
  contents: string, // unformatted HTML - needs to be sanitized
    name: string,
    id: number,
    levels: Level[],
    locations: Location[],
    categories: Category[],
    refs: LandingPage,
    company: Company
*/

const SingleResult: React.FC<Props> = props => {

    /* I know I could chain some of the functions below, but I prefer adding variables for
    each step to make it easy to read and debug. */

    const { name, id, levels, locations, categories, refs, company } = props.result

    const contentPreview: string = props.result.contents.substring(0, 200) // get the first 200 chars
    const textOnlyPreview = contentPreview.replace(/(<([^>]+)>)/gi, ""); // strip html
    const shortDesc = textOnlyPreview.substring(0, 100) // clip it to 100 chars

    return (
        <div className="result" style={{ borderTop: "1px solid gray" }}>
            <div className="result-label title">{name}</div>
            <div className="id"><span className="result-label">ID:</span> {id}</div>

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
            <div>
                <span className="result-label description">Description:</span> {shortDesc}...
            </div>

            <a href={refs.landing_page} target="#blank">View original listing</a>

        </div>
    )

}

export default SingleResult