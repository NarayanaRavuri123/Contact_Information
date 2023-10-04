import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [contactlist, setContactlist] = useState([]);
  const addContactHandler = (contact, isValidName, isValidPhoneNumber) => {
    if (isValidName && isValidPhoneNumber) {
      setContactlist([...contactlist, { id: Date.now(), ...contact }]);
    }
    else {
      window.alert("please enter valid name and phonenumber");
    }
  }
  const deleteContactHandler = (id) => {
    const newContactlist = contactlist.filter((contact) => {
      return contact.id !== id;
    })
    setContactlist(newContactlist);
  }
  useEffect(() => {
    const sessionContactlist = JSON.parse(sessionStorage.getItem("contactlist"));
    setContactlist(sessionContactlist);
  }, []);
  useEffect(() => {
    sessionStorage.setItem("contactlist", JSON.stringify(contactlist));
  }, [contactlist]);
  return (
    <div className='body'>
      <Header />
      <BrowserRouter>
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
      </BrowserRouter>
    </div >
  );
}
export default App; 