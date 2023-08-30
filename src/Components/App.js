import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { Routes, Route } from 'react-router-dom';



function App() {
  const [contactlist, setContactlist] = useState([]);

  const addContactHandler = (contact) => {
    setContactlist([...contactlist, { id: uuidv4(), ...contact }]);

  }

  const deleteContactHandler = (id) => {
    const newContactlist = contactlist.filter((contact) => {
      return contact.id !== id;
    })
    setContactlist(newContactlist);
  }

  //the retrieval part from the local storage is working but the retrieved value  in not getting set to the contactlist
  //so commenting the code for the time being
  // useEffect(() => {
  //   const localcontactlist = JSON.parse(localStorage.getItem("contactlist"));
  //   console.log("Initial localcontactlist:", localcontactlist);

  //   setContactlist(localcontactlist);
  // }, []);

  // useEffect(() => {
  //   console.log("Updated contactlist:", contactlist);
  // }, [contactlist]);


  // store the contacts to the local storage, when contactlist state is changed
  useEffect(() => {
    localStorage.setItem("contactlist", JSON.stringify(contactlist));
  }, [contactlist]);


  return (
    <div>
      <Header />
      <Routes>
       
        <Route exact path = "/addContact" element= {<AddContact addContactHandler={addContactHandler} />} />

        <Route exact path='/contactList' element={<ContactList contactlist={contactlist} deleteContactHandler={deleteContactHandler} />}></Route>
      </Routes>

    </div>
  );
}

export default App;