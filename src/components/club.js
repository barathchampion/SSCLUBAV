// src/components/Club.js
import React, { useState } from 'react';
import './clubstyle.css'
import { db } from '../firebase'; // Importing Firebase DB configuration

const Club = () => {
  
    const [formData, setFormData] = useState({
        playerName: '',
        email: '',
        position: '',
        contactNumber: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, such as sending the data to Firebase or any backend
        console.log(formData);
      };
    
      return (
        <div className='cntr m-3'>
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Join Our Volleyball Club</p>
          <p className="message">Please fill out the form to become a member.</p>
    
          <label>
            <input
              className="input"
              type="text"
              name="playerName"
              value={formData.playerName}
              onChange={handleInputChange}
              required
            />
            <span>Player Name</span>
          </label>
    
          <label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <span>Email</span>
          </label>
    
          <label>
            <select
              className="input"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Position</option>
              <option value="Attacker">Attacker</option>
              <option value="Libero">Libero</option>
              <option value="Blocker">Blocker</option>
              <option value="Setter">Setter</option>
            </select>
            <span>Position</span>
          </label>
    
          <label>
            <input
              className="input"
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Optional"
            />
            <span>Contact Number (Optional)</span>
          </label>
    
          <button type="submit" className="submit">Submit</button>
          
          <p className="signin">
            Take ! Lift ! Spike ! Defend !
          </p>
        </form>
        </div>
      )
    };
    


export default Club;
