import React from "react";
import { useState} from "react";
import axios from "axios";
import { backend } from "../conf";

const SignIn = () => {
  const [user, setUser] = useState({});

  const UserChange = (e) => {
    const tmp = { ...user, [e.target.name]: e.target.value };
    setUser(tmp);
  };
  const json = JSON.stringify(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${backend}/auth/signin`, user).then() 
    .catch((er)=>console.log("erreur",er));
  };

  return (
    <div>
      <h1>{json}</h1>
      <h2>Connecte-toi</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
        <button type="submit" value="Je me connecte">
          Je me connecte
        </button>
      </form>
    </div>
  );
};
export default SignIn;
