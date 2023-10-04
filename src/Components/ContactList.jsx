import React from "react";
import ContactCard from "./ContactCard";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./ContactList.css";
import { Grid } from "@mui/material";

const ContactList = (props) => {
    const contactlist = props.contactlist;

    return (
        <div >
            <Grid container spacing = {2} sx={{marginBottom:'5%'}}>
                <Grid item xs={12} md={9} sm={10.5}>
                    <span className="contactlist_header">Contact list</span>
                </Grid>
                <Grid item xs={12} md={3} sm={1.5}>
                    <Link to="/addContact"><Button variant="contained">Add Contact</Button></Link>
                </Grid>
            </Grid>
            {
                contactlist.map((contact, index) => (
                    contact.name && <ContactCard key={index} contact={contact} deleteContactHandler={props.deleteContactHandler} />
                ))
            }
        </div>
    )
}

export default ContactList;