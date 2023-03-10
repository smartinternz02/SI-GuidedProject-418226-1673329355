import React, { useState } from 'react';
import axios from 'axios';
import '../css/Flight.css';

function Flights() {

    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [traveller, setTraveller] = useState(0);

    const data = {
        personCnt: traveller,
        origin: origin,
        dest: destination,
        departDate: departureDate,
        returnDate: returnDate
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5050/flight-search', data)
            .then((response) => alert(response.data)).catch(error => alert(error.response.data));
    }

    return (
        <>
            <div className="flight">
                <div className="container-fluid">
                    <form className="form" action='' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="origin">Enter Origin (IATA Code)</label>
                            <div className="col">
                                <input className="form-item" type="text" id='origin' name="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="destination">Enter Destination (IATA Code)</label>
                            <div className="col">
                                <input className="form-item" type="text" id='destination' name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ddate">Enter Departure Date</label>
                            <div className="col">
                                <input className="form-item" type="text" id='ddate' name="ddate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rdate">Enter Return Date (Optional)</label>
                            <div className="col">
                                <input className="form-item" type="text" id='rdate' name="rdate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="traveller">Enter Total Number of Traveller</label>
                            <div className="col">
                                <input className="form-item" type="number" id='traveller' name="traveller" value={traveller} onChange={(e) => setTraveller(e.target.value)} required></input>
                            </div>
                        </div>
                        <div className="result-container">
                            <button className='form-item btn-submit' type='submit'>RESULT</button>
                        </div>
                    </form>
                    <div className="flights-details">
                        <h1> Welcome</h1>
                    </div>
                </div >

            </div>
        </>
    )
}


export default Flights;