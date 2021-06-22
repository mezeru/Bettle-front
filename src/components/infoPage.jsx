import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import 'regenerator-runtime/runtime';
import logoutCall from '../scripts/logoutCall'
import { useHistory } from "react-router";

export default function infoPage(){

  let history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        // const resp = logoutCall(token);

        history.push('/login');
        
    }

    return(
      <button onClick={e => {handleClick(e)}} >LOGOUT</button>
    )

}