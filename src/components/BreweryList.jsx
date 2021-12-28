import { useState } from "react";
import BookingForm from './BookingForm'

const BreweryList = (props) => {
    const {brew} = props;
    const [showForm, setShowForm] = useState(false);

    return (
        <li>
            <h2>{brew.name}</h2>
            <div className="type">{brew.brewery_type}</div>
            <section className="address">
                <h3>Address:</h3>
                <p>{brew.street}</p>
                <p><strong>{brew.city}, {brew.postal_code}</strong></p>
            </section>
            <section className="phone">
                <h3>Phone:</h3>
                <p>{brew.phone}</p>
            </section>
            <section className="booking">
                <button onClick={() => setShowForm(!showForm)}>Book a tour</button>
            </section>
            <section className="link">
                <a href={brew.website_url ? brew.website_url : '-'} target="_blank">
                    Visit Website
                </a>
            </section>

            {showForm && <BookingForm/>}
        </li>
    )
}

export default BreweryList
