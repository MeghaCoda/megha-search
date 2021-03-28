import "../assets/scss/filter_bar.scss"
import { SearchResult } from "../d"

interface FilterProps {
    results: SearchResult[]
    
}

/*
interface FilterProps {
    results: {
        levels: Level[],
    locations: Location[],
    categories: Category[],
    company: Company
    } */

    const removeDupes = (arr: any):any => {
        let newArr: any = []
        for (let item of arr) {
            let str
            if (Array.isArray(item)) {
                str = item[0]
            }
            else {
                str = item
            }
            if (newArr.indexOf(str as string) === -1) {
                newArr.push(str)
            }
        }
        return newArr
    }
const FilterBar: React.FC<FilterProps> = props => {

    const levels = props.results.map(result =>  result.levels.map(level => level.name))
    const companies = props.results.map(result => result.company.name)
    const locations = props.results.map(result => result.locations.map(location => location.name))
    const categories = props.results.map(result => result.categories.map(category => category.name))
    const uniqueLevels = removeDupes(levels)
    const uniqueCompanies = removeDupes(companies)
    const uniqueLocations = removeDupes(locations)
    const uniqueCategories = removeDupes(categories)
    /* for some reason my usual technique of converting to a Set to remove duplicates isn't working.
    Tech debt for later */

    /* Note: the Antd design library's dropdown components, while pretty, are hover-based! 
    Not accessibility friendly or mobile friendly. Going for selects instead.  */

    return (
        <div className="filter-bar">
            <div className="title"><b>Filter results by:</b></div>
            <div className="filters">
            <div className="filter-container">
                <span className="filter-label">Company</span>
                <select name="company">
                {uniqueCompanies.map((company:any) => {
                        return <option value={company}>{company}</option>
                    })}
                </select>
            </div>
            <div className="filter-container">
                <span className="filter-label">Level</span>
                <select name="level">
                    {uniqueLevels.map((level:any) => {
                        return <option value={level}>{level}</option>
                    })}
                </select>
            </div>
            <div className="filter-container">
                <span className="filter-label">Location</span>
                <select name="location">
                    {uniqueLocations.map((location:any) => {
                        return <option value={location}>{location}</option>
                    })}
                </select>
            </div>
            <div className="filter-container">
                <span className="filter-label">Job Category</span>
                <select name="category">
                    {uniqueCategories.map((category:any) => {
                        return <option value={category}>{category}</option>
                    })}
                </select>
            </div>
        </div>
        </div>
        
    )

}

export default FilterBar