import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import 'regenerator-runtime/runtime';
import logoutCall from '../scripts/logoutCall'
import { useHistory } from "react-router";
import socketIOClient from 'socket.io-client';

export default function infoPage(){

  let history = useHistory();

  const [alerts,useAlerts] = useState([]);
  const [disable,useDisable] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    let token;
    socket.emit('fetchData',"Badlapur",token);
  }
  
    const socket = socketIOClient("http://localhost:3001/",);
    socket.on('sendAlerts', (alerts) =>{
      useAlerts(alerts);
      useDisable("none");
      console.log(alerts);
    });
    
    const alertCards = alerts.map(alert => {
      return(
        <div className="alert-card">
          <h1>{alert.contactinfo}</h1>
          <p>{alert.Time}</p>
        </div>
      )
    })

    return(
      <>
      <div className="alerts">
        {alertCards}
      </div>

      <div style={{display:disable}} className="home-btns">
        <button className="hm-btn" onClick={handleClick}>Get Alerts</button>
      </div>
      
     
      </>
    )

}

