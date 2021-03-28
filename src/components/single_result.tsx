import React from "react"
import { SearchResult } from "../d"

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


    const openFullView = () => { }

    console.log('Single result:')
    console.log(JSON.stringify(levels))

    return (
        <div className="result" style={{ border: "1px solid gray" }}>
            <div className="title">{name}</div>
            <div className="id">ID: {id}</div>

            {levels.length && <div className="result-label levels">Levels:
            {levels.map(level => {
                return <span>
                    {level.name}
                </span>
            })}
            </div>}

            {locations.length && <div className="result-label locations">Locations:
            {locations.map(location => {
                return <span>
                    {location.name}
                </span>
            })}
            </div>}

            {categories.length && <div className="result-label categories">Categories:
            {categories.map(category => {
                return <span>
                    {category.name}
                </span>
            })}
            </div>}
            <div>
                Description: {shortDesc}...
            </div>

            <a href={refs.landing_page} target="#blank">View original listing</a>

        </div>
    )

}

export default SingleResult