import React from "react";
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import DeleteIcon from '@mui/icons-material/Delete';
//install the icons
import './contactCard.css';
import download from '../Images/download.png'

const ContactCard = (props) => {
   
    const { name, phonenumber, email,id } = props.contact;

    
    return (
        <Box sx={{ border: '1px dashed grey',borderRadius:'5%',padding:'26px' }}>
            <div>
                <Avatar component="span" alt="krofile_image" src={download}></Avatar>
                <div className="deleteicon">
                    <DeleteIcon sx={{color:'red'}} 
                        onClick = {()=>props.deleteContactHandler(id)}
                     ></DeleteIcon>
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