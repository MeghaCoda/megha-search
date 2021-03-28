import "../assets/scss/filter_bar.scss"

const FilterBar: React.FC = () => {
    /* Note: the Antd design library's dropdown's are hover-based! Not accessibility friendly or mobile friendly! 
    Going for good old fashioned select elements where possible, even if they aren't stylable */
    return (
        <div className="filter-bar">
            <div className="title"><b>Filter results by:</b></div>
            <div className="filters">
            <div className="filter-container">
                <span className="filter-label">Company</span>
                <select>
                    <option value="test">Test</option>
                </select>
            </div>
            <div className="filter-container">
                <span className="filter-label">Level</span>
            </div>
            <div className="filter-container">
                <span className="filter-label">Location</span>
            </div>
            <div className="filter-container">
                <span className="filter-label">Job Category</span>
            </div>
        </div>
        </div>
        
    )

}

export default FilterBar