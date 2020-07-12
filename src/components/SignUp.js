import React from "react";
import { useState} from "react";
import axios from "axios";
import { backend } from "../conf";
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';


const SignUp = () => {
  const [newUser, setNewUser] = useState({});
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const UserChange = (e) => {
    const tmp = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(tmp);
  };
  const json = JSON.stringify(newUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${backend}/auth/signup`, newUser).then() 
    .catch((er)=>console.log("erreur",er));
    console.log(newUser)
  };
  

  return (
    <Grid  container
    alignItems='center'
    style={{ height:  '100%' }}>
       <Grid
       container
       alignItems='center'
       justify='center'
          >
               <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={json}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
          <h2>Inscris-toi</h2>
          </Grid>
         
          <form onSubmit={(e) => {
          handleSubmit(e);
        }}>
           <FormControl>
        <TextField
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => {
            UserChange(e);
          }}
          placeholder="Ton prénom"
        />
        <TextField
          type="text"
          name="lastname"
          id="lastname"
          required
          onChange={(e) => {
            UserChange(e);
          }}
          placeholder="Ton Nom"
        />
        <TextField
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => {
            UserChange(e);
          }}
          placeholder="Ton Email"
        />
        <TextField
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => {
            UserChange(e);
          }}
          placeholder="Ton mot de passe"
        />
        <TextField
          type="password"
          name="passwordbis"
          id="passwordbis"
       
          placeholder="Confirme ton mot de passe"
        />
        <Button type="submit" value="Je m'inscris"   onClick={handleClick}>
          Je m'inscris
        </Button>
        </FormControl>
    </form>
   
    </Grid>
  );
};
export default SignUp;
