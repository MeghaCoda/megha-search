import "../assets/scss/filter_bar.scss"
import { SearchResult } from "../d"
import { Select } from "antd"

interface FilterProps {
    results: SearchResult[],
    onSelect: Function
    
}
    /* my usual trick of converting the Array to a Set and back again wasn't working, so I wrote this.
    There's probably a better solution out there, but it works */
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
    const { onSelect } = props

    const levels = props.results.map(result =>  result.levels.map(level => level.name))
    const companies = props.results.map(result => result.company.name)
    const locations = props.results.map(result => result.locations.map(location => location.name))
    const categories = props.results.map(result => result.categories.map(category => category.name))
    const uniqueLevels = removeDupes(levels)
    const uniqueCompanies = removeDupes(companies)
    const uniqueLocations = removeDupes(locations)
    const uniqueCategories = removeDupes(categories)

    return (
        <div className="filter-bar">
            <div className="title"><b>Filter results by:</b></div>
            <div className="filters">
            <div className="filter-container">
                <span className="filter-label">Company</span>
                <Select style={{width: "200px"}} onChange={(value) => onSelect({ company: value})}>
                {uniqueCompanies.map((company:any, i: number) => {
                        return <Select.Option key={i} value={company}>{company}</Select.Option>
                    })}
                </Select>
            </div>
            <div className="filter-container">
                <span className="filter-label">Level</span>
                <Select style={{width: "200px"}} onChange={(value) => onSelect({ level: value})}>
                    {uniqueLevels.map((level:any, i: number) => {
                        return <Select.Option key={i} value={level}>{level}</Select.Option>
                    })}
                </Select>
            </div>
            <div className="filter-container">
                <span className="filter-label">Location</span>
                <Select style={{width: "200px"}} onChange={(value) => onSelect({ location: value})}>
                    {uniqueLocations.map((location:any, i: number) => {
                        return <Select.Option key={i} value={location}>{location}</Select.Option>
                    })}
                </Select>
            </div>
            <div className="filter-container">
                <span className="filter-label">Job Category</span>
                <Select style={{width: "200px"}} onChange={(value) => onSelect({ category: value})}>
                    {uniqueCategories.map((category:any, i: number) => {
                        return <Select.Option key={i} value={category}>{category}</Select.Option>
                    })}
                </Select>
            </div>
        </div>
        </div>
        
    )

}

export default FilterBar