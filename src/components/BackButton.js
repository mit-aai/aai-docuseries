import React from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.css';
import { useLastLocation } from 'react-router-dom-last-location';

export default function BackButton(props) { 

    const lastLocation = useLastLocation();

    let navigate = useNavigate();
    function handleClick() {
        if(props.peopleInfo.some(e => e.route === JSON.stringify(lastLocation))) { 
            navigate(-1);
        } else {
            navigate("/");
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            console.log('foo');
            handleClick();
        }
    };
    
    return (
        <div className="container" onClick={handleClick} onKeyDown={handleKeyPress} tabIndex="0">
            <svg className="button-img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"/></svg>
            <div className="button">back to episodes</div>
        </div>
    )
}