import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import customerSubmit from '../scripts/customerSubmit';
import { Link } from 'react-router-dom';

export default function customer(){

    let history = useHistory();

    const [pincode,usePincode] = useState("");
    const [contact,useContact] = useState("");

    async function handleClick(e){
        e.preventDefault();
        const resp = await customerSubmit(pincode,contact);

        if(resp.status === 200){
            alert("Alert Send");
            history.push('/');
        }
        else{
            alert("Pincode Not Assiciated With any Branch")
        }

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
            <input type="text" placeholder="Type The Pincode of the branch" value={pincode.value} onChange={(e) => { usePincode(e.target.value)}} ></input>
        </div>

        <div className="field btn">
            <button form="login">Submit</button>
        </div>

        <div className="redirect">
            <p>If you are a Branch Incharge <Link to="/Login">Click Here</Link></p>
        </div>

        </form>

    </>
    )

}