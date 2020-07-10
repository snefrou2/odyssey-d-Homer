import React from "react";
import { useState} from "react";
import axios from "axios";
import { backend } from "../conf";

const SignUp = () => {
  const [newUser, setNewUser] = useState({});

  const UserChange = (e) => {
    const tmp = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(tmp);
  };
  const json = JSON.stringify(newUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${backend}/auth/signup`, newUser).then() 
    .catch((er)=>console.log("erreur",er));
  };
  

  return (
    <div>
      <h1>{json}</h1>
      <h2>Inscris-toi</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => {
            UserChange(e);
          }}
          placeholder="Ton prénom"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          onChange={(e) => {
            UserChange(e);
          }}
          placeholder="Ton Nom"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => {
            UserChange(e);
          }}
          placeholder="Ton Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => {
            UserChange(e);
          }}
          placeholder="Ton mot de passe"
        />
        <input
          type="password"
          name="passwordbis"
          id="passwordbis"
          required
          
          placeholder="Confirme ton mot de passe"
        />
        <button type="submit" value="Je m'inscris">
          Je m'inscris
        </button>
      </form>
    </div>
  );
};
export default SignUp;
