import React from 'react'
import BreweryList from './BreweryList';
import BrewerySearch from './BrewerySearch'

const BrewerySection = (props) => {
    const {ListOfBreweries, selectedState} = props;
    return (
        <>
            {selectedState && <BrewerySearch 
                selectedState={selectedState}
            />}
            <article>
                <ul className="breweries-list">
                    {ListOfBreweries.map((brew,index) => {
                        return <BreweryList key={index} brew={brew}/>
                    })}
                </ul>
            </article>
        </>
    )
}

export default BrewerySection
