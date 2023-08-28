import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const [contactlist, setcontactlist] = useState([]);

  const addContactHandler = (contact) => {
    setcontactlist([...contactlist, contact]);
  }

  useEffect(() => {
    const localcontactlist =JSON.parse(sessionStorage.getItem("contactlist")) ;
    if (localcontactlist) {
      setcontactlist(localcontactlist);
    }
  },[]);
  //complete the retreval part from local storage

  useEffect(() => {
    sessionStorage.setItem("contactlist", JSON.stringify(contactlist));
    console.log(contactlist);
  }, [contactlist]);

  
  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contactlist={contactlist} />
    </div>
  );
}

export default App;