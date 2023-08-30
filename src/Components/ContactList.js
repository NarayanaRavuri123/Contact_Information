import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const contactlist = props.contactlist;
    
    
    return (
        <div>
            <h2>Contact list</h2>
            {
                contactlist.map((contact,index) => (

                    contact.name && <ContactCard key={index}  contact={contact} deleteContactHandler = {props.deleteContactHandler} />
                ))
            }
        </div>
    )
}

export default ContactList;