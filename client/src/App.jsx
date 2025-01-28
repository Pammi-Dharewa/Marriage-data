import { useState } from 'react';
import './App.css';

function App() {
  const [details, setDetails] = useState({
    name: '',
    address: '',
    amount: '',
    gold: '',
    silver: '',
    otherGifts: '',
    option: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', JSON.stringify(details));
    alert(`Form submitted successfully! ${JSON.stringify(details)}`);

    try{
      const response = await fetch('http://localhost:5000/api/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });

      if(response.ok){
        const data = await response.json();
        console.log(data);
      }else{
        console.log('Failed to submit form');
      }
    }catch(err){
      console.log(err);
    }

    setDetails({
      name: '',
      address: '',
      amount: '',
      gold: '',
      silver: '',
      otherGifts: '',
      option: '',
    })
  };

  return (
    <div
      className="form-container">
      <h1>Details</h1>
      <form onSubmit={handleSubmit} className="form">

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={details.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            value={details.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gold */}
        <div className="form-group">
          <label htmlFor="gold">Gold: </label>
          <input
            type="text"
            name="gold"
            id="gold"
            value={details.gold}
            onChange={handleChange}
          />
        </div>

        {/* Silver */}
        <div className="form-group">
          <label htmlFor="silver">Silver: </label>
          <input
            type="text"
            name="silver"
            id="silver"
            value={details.silver}
            onChange={handleChange}
          />
        </div>

         {/* Amount */}
         <div className="form-group">
          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={details.amount}
            onChange={handleChange}
            required
          />
        </div>

        {/* Other Gifts */}
        <div className="form-group">
          <label htmlFor="otherGifts">Other Gifts: </label>
          <input
            type="text"
            name="otherGifts"
            id="otherGifts"
            value={details.otherGifts}
            onChange={handleChange}
          />
        </div>

        {/* Dropdown */}
        <div className="form-group">
          <label htmlFor="option">Choose an option:</label>
          <select
            name="option"
            id="option"
            value={details.option}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="A">Presentation</option>
            <option value="B">Taken</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
