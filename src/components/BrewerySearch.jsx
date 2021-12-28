import React from 'react'

const BrewerySearch = (props) => {
    const {selectedState} = props;
    return (
        <>
        <h1>{`List of Breweries from ${selectedState}`}</h1>
            <header className="search-bar">
                <form id="search-breweries-form" autocomplete="nope">       
                    <label htmlFor="search-breweries"><h2>Search breweries:</h2></label>
                    <input id="search-breweries" name="search-breweries" type="text"/>
                </form>
            </header>
        </>
    )
}

export default BrewerySearch
