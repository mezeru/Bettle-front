import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import 'regenerator-runtime/runtime';
import logoutCall from '../scripts/logoutCall'

export default function infoPage(){

    const handleClick = async (e) => {
        e.preventDefault();
        const resp = logoutCall(token);


    }

    return(
      <Link><button onClick={e => {handleClick(e)}} >LOGOUT</button></Link> 
    )

}