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
        phonenumber: true
    })
    const navigate = useNavigate();

    const isValidName = () => {
        const regex = /^[A-Za-z\s]+$/;
        if (regex.test(contact.name)) {
            return true;
        }
        else {
            return false;
        }
    }

    const isValidPhoneNumber = () => {
        const regex = /^[0-9]{10}$/;
        if (regex.test(contact.phonenumber)) {
            return true;
        }
        else {
            return false;
        }
    }

    // const isValidEmail = () => {
        //     const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        //     if(regex.test(contact.email)) {
        //         return true;
        //     }
        //     else {
        //         return false;
        //     }
        // }


    const addContacts = (e) => {
        e.preventDefault();

        if (contact.name === "" || contact.phonenumber === "") {
            alert("All the fields are mandatory");
        } else {
            const isNameValid = isValidName();
            const isPhoneNumberValid = isValidPhoneNumber();
            setIsvalid({
                name: isNameValid,
                phonenumber: isPhoneNumberValid
            })
            props.addContactHandler(contact, isNameValid, isPhoneNumberValid);
            setContact({ name: "", phonenumber: "", email: "" });
            navigate('/');
        }


    };

    console.log(isvalid.name);
    console.log(contact);



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
                        onChange={(e) => {
                            setContact({ ...contact, name: e.target.value });
                            setIsvalid({name:isValidName(),phonenumber:isValidPhoneNumber()})
                        }}
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
