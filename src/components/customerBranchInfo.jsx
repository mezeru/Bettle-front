import React, { useEffect, useState } from "react";
import 'regenerator-runtime/runtime';
import logoutCall from '../scripts/logoutCall'
import { useHistory } from "react-router";
import socketIOClient from 'socket.io-client';
import { read_cookie } from "sfcookies";

export default function infoPage(){

  let history = useHistory();

  const info = read_cookie('branchesInfo');
    
    const branchesCards = info.map(alert => {
      return(
        <div className="alert-card" >
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

