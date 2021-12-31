import { useState, useEffect } from "react";
import BreweryList from './BreweryList';
import BrewerySearch from './BrewerySearch'

const BrewerySection = (props) => {
    const {breweries, selectedState, filteredBreweries, filters} = props;
    const [breweryArr, setbreweryArr] = useState([])

    useEffect(() => {
        let breweriesArr = [];
        if(filters.breweryType !== ''){
            breweriesArr = filteredBreweries
            console.log('filter', breweries);
        }else{
            breweriesArr = breweries
            console.log('nofilter', breweries);
        }
        breweriesArr = Array.from(new Set(breweries));
        setbreweryArr(breweriesArr)
    }, [filters.breweryType, filteredBreweries, breweries, setbreweryArr])

    console.log('brewArr',breweryArr);

    return (
        <>
            {selectedState && <BrewerySearch 
                selectedState={selectedState}
            />}
            <article>
                <ul className="breweries-list">
                    {breweryArr.map((brew,index) => {
                        return <BreweryList key={index} brew={brew}/>
                    })}
                </ul>
            </article>
        </>
    )
}

export default BrewerySection
