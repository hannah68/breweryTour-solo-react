import { useState, useEffect } from "react";
import Header from "./components/Header";
import BrewerySection from "./components/BrewerySection";
import FilterForm from "./components/FilterForm";

const App = () => {
    const [breweries, setBreweries] = useState([]);
    const [filteredBreweries, setFilteredBreweries] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [submit, setSubmit] = useState(false);
    const [cities, setCities] = useState([]);
    const [brewType, setBrewType] = useState('');

    let ListOfBreweries = breweries;
    console.log("State: ", { breweries, selectedState, brewType, filteredBreweries});

    useEffect(() => {
        const fetchBreweryByState = async() => {
            const res = await fetch(`https://api.openbrewerydb.org/breweries?by_state=${selectedState}`)
            const breweryData = await res.json();
            const cleanData = breweryData.filter(type => {
                return type.brewery_type=== 'micro' || type.brewery_type=== 'regional' || type.brewery_type=== 'brewpub'
            });
            const numberOfBrew = cleanData.slice(0,10);
            setBreweries(numberOfBrew);
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

    const handleTypeChange = (e) => {
        setBrewType(e.target.value);
    }

    useEffect(() => {
        if(breweries && !submit){
            setFilteredBreweries(breweries);
        }
        if(selectedState && filteredBreweries && !submit){
            const updatedCity = filteredBreweries.map(brew => brew.city);
            setCities(updatedCity);
        }
    }, [selectedState, breweries, submit, setCities])

    useEffect(() => {
        if(brewType && !submit){
            const filterByType = filteredBreweries.filter(brew => {
                if(brew.brewery_type === brewType){
                    return brew
                }
            });
            setFilteredBreweries(filterByType);
            console.log('inside brewtype', filterByType);
            const updatedCity = filterByType.map(brew => brew.city)
            setCities(updatedCity);
        }
    }, [brewType,submit, setCities])

    if(brewType){
        ListOfBreweries = filteredBreweries
    }
    
    console.log(cities);
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
                        handleTypeChange={handleTypeChange}
                    />}
                </aside>
                <BrewerySection 
                    ListOfBreweries={ListOfBreweries} 
                    selectedState={selectedState}
                    />
            </main>
        </>
    );
}

export default App;