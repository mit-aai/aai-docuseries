import React from "react";
import { useNavigate } from "react-router-dom";
import './notFound.css';

export default function NotFound() {

    React.useEffect(() => {
        document.title = 'Confessions: Not Found';
      }, []);
    let navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }
    
    return (
        <div className="notFound-container">
            <div className="notFound-text">oops! wrong page</div>
            <div className="container" onClick={handleClick}>
                <svg className="button-img button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"/></svg>
                <div className="button">return to episodes</div>
            </div>
        </div>
    )
    
}