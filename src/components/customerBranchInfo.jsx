import React, { useEffect, useState } from "react";
import 'regenerator-runtime/runtime';
import logoutCall from '../scripts/logoutCall'
import { useHistory } from "react-router";
import socketIOClient from 'socket.io-client';
import { read_cookie } from "sfcookies";

export default function infoPage(){

  let history = useHistory();

  const info = read_cookie('branchesInfo');

  const cardStyle = {
    background : "linear-gradient(159deg, rgba(253,29,29,1) 0%, rgba(249,145,0,1) 50%, rgba(52,255,0,1) 100%)"
  }
    
    const branchesCards = info.map(alert => {
      return(
        <div className="alert-card" style={cardStyle}>
          <h1>{alert.branchName}</h1>
          <p>{alert.insitutionName}</p>
          <p>{alert.city}</p>
          <p>{alert.branchIncharge}</p>
        </div>
      )
    })


    return(
      <>
      <div className="alerts">
        {branchesCards}
      </div>
      
     
      </>
    )

}

