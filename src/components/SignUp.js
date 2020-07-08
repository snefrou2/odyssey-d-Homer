import React from "react";
import {useState, useEffect} from "react";



export default function SignUp() {
    const[email, setEmail] = useState("")

    
  return <div >
       <form >
        <label>
          Sign Up:
          <input value={email} onChange={e => setEmail(e.target.value)}  />
        </label>
      </form>
      <h1>{email}</h1>
  </div>;
}

