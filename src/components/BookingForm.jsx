import React from 'react'

const BookingForm = (props) => {
    const {showForm} = props;
    
    return (
        <section className="booking-form">
            <h3>Book a tour:</h3>
            <form>
                <label htmlFor='firstname'>First Name</label>
                <input type="text" name="firstName" value="" id='firstname'/>

                <label htmlFor='lastname'>Last Name</label>
                <input type="text" name="lastName" value="" id='lastname'/>

                <label htmlFor='tourdate'>Tour date</label>
                <input type="date" name="date" value="" id='tourdate'/>

                <label htmlFor='time'>Time</label>
                <input
                    type="time"
                    name="time"
                    min="09:00"
                    max="18:00"
                    step="3600"
                    value=""
                    id='time'
                    />

                <label htmlFor='people'>No. people</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    name="peopleCount"
                    value="" 
                    id='people'
                    />
                <input type="submit" value="Book Now!" />
            </form>
        </section>
    )
}

export default BookingForm
