import React, { useState, useEffect } from 'react'; 
import './Details.css'; 

const Move = () => { 
  const [items, setItems] = useState([]); 
  const [inputName, setInputName] = useState(''); 
  const [inputEmail, setInputEmail] = useState(''); 
  const [inputDob, setInputDob] = useState(''); 
  const [inputAddress, setInputAddress] = useState(''); 
  const [inputCity, setInputCity] = useState(''); 
  const [inputState, setInputState] = useState(''); 
  const [inputCountry, setInputCountry] = useState(''); 
  const [inputZipcode, setInputZipcode] = useState(''); 

  // Load data from local storage when the component mounts 
  useEffect(() => { 
    const storedItems = localStorage.getItem('items'); 
    if (storedItems) { 
      setItems(JSON.parse(storedItems)); 
    } 
  }, []); 

  // Save data to local storage whenever items change 
  useEffect(() => { 
    localStorage.setItem('items', JSON.stringify(items)); 
  }, [items]); 

  const addItem = () => { 
    if ( 
      inputName.trim() !== '' && 
      inputEmail.trim() !== '' && 
      inputDob.trim() !== '' && 
      inputAddress.trim() !== '' && 
      inputCity.trim() !== '' && 
      inputState.trim() !== '' && 
      inputCountry.trim() !== '' && 
      inputZipcode.trim() !== '' 
    ) { 
      setItems([ 
        ...items, 
        { 
          name: inputName, 
          email: inputEmail, 
          dob: inputDob, 
          address: inputAddress, 
          city: inputCity, 
          state: inputState, 
          country: inputCountry, 
          zipcode: inputZipcode, 
        }, 
      ]); 
      setInputName(''); 
      setInputEmail(''); 
      setInputDob(''); 
      setInputAddress(''); 
      setInputCity(''); 
      setInputState(''); 
      setInputCountry(''); 
      setInputZipcode(''); 
    } 
  }; 

  const deleteItem = (index) => { 
    const newItems = [...items]; 
    newItems.splice(index, 1); 
    setItems(newItems); 
  }; 

  const updateItem = (index, updatedItem) => { 
    const newItems = [...items]; 
    newItems[index] = updatedItem; 
    setItems(newItems); 
  }; 

  return ( 
    <div className="container"> 
      <h1>Simple CRUD App</h1> 
      <div className="input-group"> 
        <label>Name: </label> 
        <input 
          type="text" 
          value={inputName} 
          onChange={(e) => setInputName(e.target.value)} 
          placeholder="Enter name..." 
        /> 
      </div> 
      <div className="input-group"> 
        <label>Email: </label> 
        <input 
          type="email" 
          value={inputEmail} 
          onChange={(e) => setInputEmail(e.target.value)} 
          placeholder="Enter Email..." 
        /> 
      </div> 
      <div className="input-group"> 
        <label>DOB: </label> 
        <input 
          type="date" 
          value={inputDob} 
          onChange={(e) => setInputDob(e.target.value)} 
          placeholder="Enter DOB..." 
        /> 
      </div> 
      <div className="input-group"> 
        <label>Address: </label> 
        <input 
          type="text" 
          value={inputAddress} 
          onChange={(e) => setInputAddress(e.target.value)} 
          placeholder="Enter address..." 
        /> 
      </div> 
      <div className="input-group"> 
        <label>City: </label> 
        <input 
          type="text" 
          value={inputCity} 
          onChange={(e) => setInputCity(e.target.value)} 
          placeholder="Enter City..." 
        /> 
      </div> 
      <div className="input-group"> 
        <label>State: </label> 
        <input 
          type="text" 
          value={inputState} 
          onChange={(e) => setInputState(e.target.value)} 
          placeholder="Enter state..." 
        /> 
      </div> 
      <div className="input-group"> 
        <label>Country: </label> 
        <input 
          type="text" 
          value={inputCountry} 
          onChange={(e) => setInputCountry(e.target.value)} 
          placeholder="Enter Country..." 
        /> 
      </div> 
      <div className="input-group"> 
        <label>ZipCode: </label> 
        <input 
          type="number" 
          value={inputZipcode} 
          onChange={(e) => setInputZipcode(e.target.value)} 
          placeholder="Enter Zipcode..." 
        /> 
      </div> 
      <button onClick={addItem}>Add Item</button> 
      <br /> 
      <table className="table"> 
        <thead> 
          <tr> 
            <th>Name</th> 
            <th>Email</th> 
            <th>DOB</th> 
            <th>Address</th> 
            <th>City</th> 
            <th>State</th> 
            <th>Country</th> 
            <th>Zipcode</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          {items.map((item, index) => ( 
            <tr key={index}> 
              <td>{item.name}</td> 
              <td>{item.email}</td> 
              <td>{item.dob}</td> 
              <td>{item.address}</td> 
              <td>{item.city}</td> 
              <td>{item.state}</td> 
              <td>{item.country}</td> 
              <td>{item.zipcode}</td> 
              <td> 
                <button onClick={() => deleteItem(index)}>Delete</button> 
                <button 
                  onClick={() => { 
                    const newName = prompt('Enter new name', item.name); 
                    const newEmail = prompt('Enter new email', item.email); 
                    const newDob = prompt('Enter new DOB', item.dob); 
                    const newAddress = prompt('Enter new address', item.address); 
                    const newCity = prompt('Enter new city', item.city); 
                    const newState = prompt('Enter new state', item.state); 
                    const newCountry = prompt('Enter new country', item.country); 
                    const newZipcode = prompt('Enter new zipcode', item.zipcode); 
                    if ( 
                      newName !== null && 
                      newEmail !== null && 
                      newDob !== null && 
                      newAddress !== null && 
                      newCity !== null && 
                      newState !== null && 
                      newCountry !== null && 
                      newZipcode !== null 
                    ) { 
                      updateItem(index, { 
                        name: newName, 
                        email: newEmail, 
                        dob: newDob, 
                        address: newAddress, 
                        city: newCity, 
                        state: newState, 
                        country: newCountry, 
                        zipcode: newZipcode, 
                      }); 
                    } 
                  }} 
                > 
                  Update 
                </button> 
              </td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    </div> 
  ); 
}; 

export default Move;
