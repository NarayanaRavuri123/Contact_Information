// creating a class component
import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./AddContact.css";
class AddContact extends React.Component {

    state = {
        name: "",
        phonenumber: "",
        email: ""
    }

    addContacts =(e) => {
        e.preventDefault();
        if(this.state.name==="" || this.state.phonenumber==="") {
            alert("all the fields are mandatory");
        }
       
        this.props.addContactHandler(this.state);
        this.setState({name:"",phonenumber:"",email:""})
    }

    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                
                <form onSubmit={this.addContacts}>
                    <div className="namefield">
                        <TextField
                            required
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={this.state.name}
                            onChange={(e)=>this.setState({name:e.target.value})}
                             />
                    </div>
                    <div className="phonenumber_field">
                        <TextField
                            required
                            id="outlined-basic"
                            label="Phonenumber"
                            variant="outlined" 
                            value={this.state.phonenumber}
                            onChange={(e)=>this.setState({phonenumber:e.target.value})}/>
                    </div>
                    <div className="Email_field">
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined" 
                            value={this.state.email}
                            onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>
                    <Button variant="contained" type="submit">Add</Button>
                    <p className='message'>save the details of your contacts</p>
                </form>
            </div>
        )
    }
}

export default AddContact;