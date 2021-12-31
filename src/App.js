import { useState, useEffect } from "react";
import Header from "./components/Header";
import BrewerySection from "./components/BrewerySection";
import FilterForm from "./components/FilterForm";

const App = () => {
    const [breweries, setBreweries] = useState([]);
    const [filteredBreweries, setFilteredBreweries] = useState([])
    const [selectedState, setSelectedState] = useState("");
    const [submit, setSubmit] = useState(false);
    const [cities, setCities] = useState([]);
    const [filters, setFilters] = useState({
        breweryType: "",
        search: "",
        filterCities: [],
    });
    
   
    console.log("State: ", { breweries, selectedState, filters, cities});

    // const filterBySearch = (brew) => {

    // }
    const filterByCity = (brew) => {
        if (filters.filterCities.includes(brew.city)) return true;
    }

    const filterByType = (brew) => {
        if (filters.breweryType.includes(brew.brewery_type)) return true;
    }

    const filterAllBreweries = (brew) => {
        if (filterByType(brew) && filterByCity(brew)) return brew;
    }

    useEffect(() => {
        const brewArr = breweries.filter(brew => filterAllBreweries(brew));
        setFilteredBreweries(brewArr);
    }, [breweries, filters])
    
    console.log('check each brew',filteredBreweries);


    const cleanCity = (breweryArr) => {
        const updatedCity = breweryArr.map(brew => {
            return brew.city
        })
        console.log('updatedCity', updatedCity);
        // remove repetitive city
        const cityArr = [...new Set(updatedCity)]
        setFilters({...filters, filterCities: cityArr})
    }

    const renderBreweriesByState = (breweryArr) => {
        const breweriesArr = breweryArr.filter(brew => brew.state.toUpperCase() === selectedState.toUpperCase());
        return breweriesArr;
    }
    
    useEffect(() => {
        const fetchBreweryByState = async() => {
            const res = await fetch(`https://api.openbrewerydb.org/breweries?by_state=${selectedState}`)
            const breweryData = await res.json();
            const cleanData = breweryData.filter(type => {
                return type.brewery_type=== 'micro' || type.brewery_type=== 'regional' || type.brewery_type=== 'brewpub'
            });
            const breweryArr = cleanData.slice(0,10);
            setBreweries(breweryArr);
            // const filteredArray = breweryArr.filter((brew) => filterAllBreweries(brew));
            // setBreweries(filteredArray);
            cleanCity(breweryArr)
            // setBreweries(renderBreweriesByState(breweryArr))
            // filteredBreweries(breweryArr);
        }
        if(submit){
            fetchBreweryByState();
        }
        setSubmit(false);
    }, [submit, selectedState])


    const handleSubmitState = (e) => {
        e.preventDefault();
        setSubmit(true);
    };

    const handleInputSelectedState = (e) => {
        setSelectedState(e.target.value);
    };

    
    return (
        <>
            <Header
                handleSubmitState={handleSubmitState}
                handleInputSelectedState={handleInputSelectedState}
            />
            <main>
                <aside className="filters-section">
                    {selectedState && <FilterForm 
                        cities={cities}
                        setFilters={setFilters}
                        filters={filters}/>}
                </aside>
                <BrewerySection
                    filteredBreweries={filteredBreweries}
                    breweries={breweries} 
                    selectedState={selectedState}
                    filters={filters}
                    />
            </main>
        </>
    );
}

export default App;