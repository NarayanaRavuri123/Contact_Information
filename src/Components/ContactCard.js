import React from "react";
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';
//install the icons
import './contactCard.css';


const ContactCard = (props) => {
    const { name, phonenumber, email } = props.contact;
    
    return (
        <Box sx={{ p: 2, border: '1px dashed grey',borderRadius:'2%' }}>
            <div>
                <Avatar component="span" alt="krofile_image" src="src/Images/download"></Avatar>
                <div className="deleteicon">
                    <DeleteIcon sx={{color:'red'}} ></DeleteIcon>
                </div>

                {
                    name && <h2>{name}</h2>
                }
            </div>
            {
                phonenumber && <h3>{phonenumber}</h3>
            }{
                email && <p>{email}</p>
            }
        </Box>
    )
}

export default ContactCard;