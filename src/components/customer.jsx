import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';




export default function customer(){

    const [pincode,usePincode] = useState("");
    const [contact,useContact] = useState("");

    function handleClick(e){
        e.preventDefault();
        
    };

    return(
        <>

        <form id="login" onSubmit={e => {handleClick(e)}}>
        <h1>Customer</h1>

        <div className="field">
            <p>Contact No </p>
            <input placeholder="Type your Contact Number" value={contact.value} onChange={(e) => { useContact(e.target.value)}}></input>
        </div>

        <div className="field">
            <p>Pin Code </p>
            <input type="text" placeholder="Type your Contact Number" value={pincode.value} onChange={(e) => { usePincode(e.target.value)}} ></input>
        </div>

        <div className="field btn">
            <button form="login">Submit</button>
        </div>

        <div className="redirect">
            <p>If you are a Branch Incharge <a href="#">Click Here</a></p>
        </div>

        </form>

    </>
    )

}