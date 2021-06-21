import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default function infoPage(){


    return(
        <div className="home-btns">
            <Link to="/login" >
                <div>
                    <button className="hm-btn">Login</button>
                </div>
            </Link>

            <Link to="/customer" >
                <div>
                    <button className="hm-btn" >Customer</button>
                </div>
            </Link>

        </div>
        
    )

}