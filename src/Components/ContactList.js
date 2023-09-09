import React from "react";
import ContactCard from "./ContactCard";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./ContactList.css";

const ContactList = (props) => {
    const contactlist = props.contactlist;


    return (
        <div>
            <div className="contactlist_container">
                <span className="contactlist_header">Contact list</span>
                <Link to="/addContact"><Button variant="contained">Add Contact</Button></Link>
            </div>
            {
                contactlist.map((contact, index) => (

                    contact.name && <ContactCard key={index} contact={contact} deleteContactHandler={props.deleteContactHandler} />
                ))
            }
        </div>
    )
}

export default ContactList;