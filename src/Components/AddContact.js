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
    const navigate = useNavigate();
    



    const addContacts = (e) => {
        e.preventDefault();

        if (contact.name === "" || contact.phonenumber === "") {
            alert("All the fields are mandatory");
        } else {
            props.addContactHandler(contact);
            setContact({ name: "", phonenumber: "", email: "" });
            
        }
        navigate('/');
        
    };

    return (
        <div>
            <h2>Add Contact</h2>
            <form>
                <div className="namefield">
                    <TextField
                        required
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    />
                </div>
                <div className="phonenumber_field">
                    <TextField
                        required
                        id="outlined-basic"
                        label="Phonenumber"
                        variant="outlined"
                        value={contact.phonenumber}
                        onChange={(e) => setContact({ ...contact, phonenumber: e.target.value })}
                    />
                </div>
                <div className="Email_field">
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    />
                </div>
                
                    <Button onClick={addContacts} variant="contained" >
                        Add
                    </Button>
                
                <p className='message'>Save the details of your contacts</p>
            </form>
        </div>
    );
};

export default AddContact;
