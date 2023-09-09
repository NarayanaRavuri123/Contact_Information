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
    console.log("contactlist",contactlist);
  }

  const deleteContactHandler = (id) => {
    const newContactlist = contactlist.filter((contact) => {
      return contact.id !== id;
    })
    setContactlist(newContactlist);
  }
  
  //retrieve the data stored in the local storage and set the value to the contactlist variable
  useEffect(() => {
    const sessionContactlist = JSON.parse(sessionStorage.getItem("contactlist"));
    setContactlist(sessionContactlist);
  }, []);


  // store the contacts to the session storage, when contactlist state is changed
  useEffect(() => {
    sessionStorage.setItem("contactlist", JSON.stringify(contactlist));
  }, [contactlist]);


  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ContactList
              contactlist={contactlist}
              deleteContactHandler={deleteContactHandler} />
          } />

        <Route
          exact
          path="/addContact"
          element={
            <AddContact
              addContactHandler={addContactHandler} />
          } />


      </Routes>

    </div >
  );
}

export default App; 