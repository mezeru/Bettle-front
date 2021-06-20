import React from 'react';
import { useState } from 'react';
import loginCall from '../scripts/loginCall';
import 'regenerator-runtime/runtime';

export default function Header() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const handleClick =  async (e) => {
      e.preventDefault();
      const resp = await loginCall(name,pass);
      console.log(resp); 
    }


  return (
    <>
    <form id="login" onSubmit={e => {handleClick(e)}}>
      <h1>Login</h1>

      <div className="field">
        <p>Branch Name</p>
        <input placeholder="Type your Branch Name" value={name.value} onChange={(e) => { setName(e.target.value)}}></input>
      </div>

      <div className="field">
        <p>Password</p>
        <input type="password" placeholder="Type your Pasword" value={pass.value} onChange={(e) => { setPass(e.target.value)}} ></input>
      </div>

      <div className="field btn">
        <button form="login">Submit</button>
      </div>

      <div className="redirect">
        <p>If you are not a Branch Incharge <a href="#">Click Here</a></p>
      </div>

    </form>
  </>
  );
}

