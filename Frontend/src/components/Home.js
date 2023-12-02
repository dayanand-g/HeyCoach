import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'

function Home() {

  // Fetching the data will be starts from here---

  const [data,setData] = useState("")
  const [error,setError] = useState(null)
  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({
    name: '',
    address: '',
    contact: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedContact, setEditedContact] = useState('');

  const fetch = async()=>{
    const res = await axios.get(`http://localhost:8080/api/hotels/read`)
    setData(res.data)
  }

  console.log(data)

  useEffect (() => {
    fetch()
  }, [])


  // Creating a new card---

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setData([...data, newCard]);
    setNewCard({ name: '', address: '', contact: '' });
    setShowForm(false);
  };


  //  Update function will be starts from here

  const handleUpdateCard = (id) => {
    axios.put(`http://localhost:8080/api/hotels/update/${id}`, {
      name: editedName,
      address: editedAddress,
      contact: editedContact,
    })
    .then(response => {
      const updatedData = data.map(card => {
        if (card.id === id) {
          return {
            ...card,
            name: editedName,
            address: editedAddress,
            contact: editedContact,
          };
        }
        return card;
      });
      setData(updatedData);
      // Reset editing state
      setEditingId(null);
      setEditedName('');
      setEditedAddress('');
      setEditedContact('');
    })
    .catch(error => {
      setError(error.message);
    });
  };
  

  // Delete function will be starts from here (the resturant will be deleted based upon the particular id of it)

  const handleDeleteCard = (id) => {
    axios.delete(`http://localhost:8080/api/hotels/delete/${id}`)
      .then(response => {
        const updatedData = (data.filter(card => card.id !== id));
        setData(updatedData)            // Remove deleted card from cardsData
      })
      .catch(error => {
        console.error("Error deletinf card", error)
        setError(error.message);
      });
      console.log(error)
  };

  return (
    <>
      <div className='add-btn-div'>
          <div>
            <button onClick={() => setShowForm(true)} className='add-btn'>Add New</button>
            {showForm && (
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={newCard.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={newCard.address}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  value={newCard.contact}
                  onChange={handleInputChange}
                />
                <button type="submit">Add Resturant</button>
              </form>
            )}
          </div>
          <div></div>
      </div>
      <div className="cards-container">
        {Array.isArray(data) && data.map((card, index) => (
          <div className="card" key={index}>
            {editingId === card.id ? (
                <div>
                  <input
                    type="text"
                    value={editedName}
                    placeholder='Name'
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={editedAddress}
                    placeholder='Address'
                    onChange={(e) => setEditedAddress(e.target.value)}
                  />
                  <input
                    type="text"
                    value={editedContact}
                    placeholder='Contact'
                    onChange={(e) => setEditedContact(e.target.value)}
                  />
                  <button onClick={() => handleUpdateCard(card.id)}>Save</button>
                </div>
              ) : (
                <div>
                  <h2 className="card-title">{card.name}</h2>
                  <p className="card-description">{card.address}</p>
                  <p className='card-contact'>{card.contact}</p>
                  <div className="card-buttons">
                    <button className="delete-btn" onClick={() => handleDeleteCard(card.id)} >Delete</button>
                    <button className="update-btn" onClick={() => setEditingId(card.id)} >Update</button>
                  </div>
                </div>
              )}
          </div>
        ))}
        {!Array.isArray(data) && <div>Loading...</div>}
      </div>
    </>
  );
}

export default Home