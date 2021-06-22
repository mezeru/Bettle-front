import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import 'regenerator-runtime/runtime';
import logoutCall from '../scripts/logoutCall'
import { useHistory } from "react-router";
import socketIOClient from 'socket.io-client';

export default function infoPage(){

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('fetchData',"Badlapur");
    
  }
  
    const socket = socketIOClient("http://localhost:3001/");
    socket.on('connnect', () =>{
      console.log("Retriving data");
    })

    socket.on('sendAlerts', (alerts) =>{
      console.log(alerts);
    })
    

  let history = useHistory();

    return(
      <>
      <div className="container">
        <button onClick={handleClick}>Send Request</button>
      </div>

      </>
    )

}

