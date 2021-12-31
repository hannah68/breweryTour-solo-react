import React from 'react'
import FilterByCity from './FilterByCity'

const FilterForm = (props) => {
    const {cities, filters, setFilters} = props;
    const {filterCities} = props.filters;
    

    const handleTypeChange = (e) => {
        setFilters({...filters, breweryType : e.target.value});  
    }

    return (
        <>
            <h2>Filter By:</h2>
            <form id="filter-by-type-form" autocompete="off">
                <label htmlFor="filter-by-type">
                    <h3>Type of Brewery</h3>
                </label>
                <select name="filter-by-type" id="filter-by-type" onChange={handleTypeChange}>
                    <option value="">Select a type...</option>
                    <option value="micro">Micro</option>
                    <option value="regional">Regional</option>
                    <option value="brewpub">Brewpub</option>
                </select>
            </form>
            <FilterByCity filterCities={filterCities}/>
        </>
    )
}

export default FilterForm
