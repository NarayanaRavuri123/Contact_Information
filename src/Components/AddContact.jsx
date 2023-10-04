import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./AddContact.css";
import { useNavigate } from 'react-router-dom';

const AddContact = (props) => {
    const [contact, setContact] = useState({
        name: "",
        phonenumber: "",
        email: ""
    });
    const [isvalid, setIsvalid] = useState({
        name: true,
        phonenumber: true,
        emailAddress:true
    })
    const navigate = useNavigate();
    const isValidName = (newName) => {
        const regex = /^[A-Za-z\s]+$/;
        return (regex.test(newName));
    }
    const isValidPhoneNumber = (newPhoneNumber) => {
        const regex = /^[0-9]{10}$/;
        return (regex.test(newPhoneNumber));
    }
    const isValidEmailAddress = (newEmailAddress) => {
        const regex = /^[A-Za-z0-9_+.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return regex.test(newEmailAddress);
    }
    const addContacts = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.phonenumber === "") {
            setIsvalid({...isvalid,name: false,phonenumber: false});
            alert("Name and Phone number fields are mandatory.");
        } else {
            const isNameValid = isValidName(contact.name);
            const isPhoneNumberValid = isValidPhoneNumber(contact.phonenumber);

            setIsvalid({
                name: isNameValid,
                phonenumber: isPhoneNumberValid
            })
            if (isNameValid && isPhoneNumberValid) {
                props.addContactHandler(contact, isNameValid, isPhoneNumberValid);
                navigate('/');
                setContact({ name: "", phonenumber: "", email: "" });
            }
        }
        
    };
    return (
        <div>
            <h2>Add Contact</h2>
            <form>
                <div className="namefield">
                    <TextField
                        required
                        label="Name"
                        variant="outlined"
                        value={contact.name}
                        onChange={(e) => {
                            const newName = e.target.value;
                            setContact((prevContact) => ({ ...prevContact, name: newName }));
                            setIsvalid((prevIsvalid) => ({ ...prevIsvalid, name: isValidName(newName) }));
                        }}
                        autoFocus
                    />
                    {
                        !(isvalid.name) && <p className="error_message">Enter a valid name.</p>
                    }
                </div>
                <div className="phonenumber_field">
                    <TextField
                        required
                        id="outlined-basic"
                        label="Phonenumber"
                        variant="outlined"
                        value={contact.phonenumber}
                        onChange={(e) => {
                            const newphoneNumber = e.target.value;
                            setContact((prevContact) => ({ ...prevContact, phonenumber: newphoneNumber }));
                            setIsvalid((prevIsvalid) => ({ ...prevIsvalid, phonenumber: isValidPhoneNumber(newphoneNumber) }));
                        }}
                    />
                    {
                        !(isvalid.phonenumber) && <p className="error_message">Enter a valid Phonenumber.</p>
                    }
                </div>
                <div className="Email_field">
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={contact.email}
                        onChange={(e) => {
                            const newEmailAddress = e.target.value;
                            setContact((prevContact)=>({...prevContact,email:newEmailAddress}));
                            setIsvalid((prevIsvalid)=> ({...prevIsvalid,emailAddress:isValidEmailAddress(newEmailAddress)}));
                        }}
                    />
                    {
                        !(isvalid.emailAddress) && <p className="error_message">Enter a valid EmailAddress.</p>
                    }
                </div>
                <Button
                    onClick={addContacts}
                    variant="contained" 
                    disabled = {!(isvalid.name && isvalid.phonenumber)}>
                    
                    Add
                </Button>
                <p className='message'>Save the details of your contacts</p>
            </form>
        </div>
    );
};
export default AddContact;
