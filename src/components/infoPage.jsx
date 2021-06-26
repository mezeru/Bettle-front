import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import 'regenerator-runtime/runtime';
import logoutCall from '../scripts/logoutCall'
import { useHistory } from "react-router";
import socketIOClient from 'socket.io-client';
import { read_cookie } from "sfcookies";
import seen from "../scripts/seen";

export default function infoPage(){

  let history = useHistory();
  let socket;
  useEffect(() => {
    socket = socketIOClient("https://bettle-backend.herokuapp.com:3001");
    socket.on('sendAlerts', (alerts) =>{
      useAlerts(alerts);
      useDisable("none");
    });
  });

  if(read_cookie("tokens").length === 0){
      history.push('/login');
  }
  
  const [alerts,useAlerts] = useState([]);
  const [disable,useDisable] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    let branchName = read_cookie('branchName')
    let token = read_cookie('tokens');
    socket.emit('fetchData',branchName,token);
  }

  const handleSeen = (id) => {
    seen(id,read_cookie('branchName'));
  }
    
    const alertCards = alerts.map(alert => {
      return(
        <div className="alert-card" key={alert._id} onClick={() => handleSeen(alert._id)}>
          <h1>Alert !!</h1>
          <p>{alert.contactinfo}</p>
          <p>{alert.Time.split(" ")[0]}</p>
          <p>{alert.Time.split(" ")[1]}</p>
          <p>{alert.pincode}</p>
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

