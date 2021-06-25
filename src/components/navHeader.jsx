import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function navHeader(){

    let history = useHistory()

    return(
        <>
            <div className="nav">
               <a href='/'><h1>Bettlenut</h1></a>
            </div>
        
        </>
    )
}