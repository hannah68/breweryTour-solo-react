import React from 'react'

const FilterByCity = (props) => {
    const {cities} = props;
    return (
        <>
            <div className="filter-by-city-heading">
                <h3>Cities</h3>
                <button className="clear-all-btn">clear all</button>
            </div>
            
            <form id="filter-by-city-form">
                {cities.map((city,index) => {
                    return(
                        <div key={index}>
                            <input type="checkbox" name={city} value={city}/>
                            <label htmlFor={city}>{city}</label>
                        </div>
                    )
                })}
            </form>    
        </>
    )
}

export default FilterByCity
