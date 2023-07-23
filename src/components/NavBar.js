import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import Hamburger from './Hamburger.js';
import logo from '../images/logo.png';

export default function NavBar(props) {

    let activeClassName = "header-link header-link-active";
    let pages = ['about','trailer','episodes','people','your story',];
    let pageRoutes = ['/about','/trailer','/','/people','/your-story',];
    let pageList = [];
    pages.forEach((page, index) => {
        pageList.push( <NavLink key={page}
                to={pageRoutes[index].toLowerCase()}
                className={({ isActive }) =>
                        isActive ? activeClassName : "header-link" }
            >
                {page}
            </NavLink>
        )
    });

    let oldScrollY = 0;
    const [directionUp, setDirectionUp] = useState(true);
    const controlDirection = () => {
        if(window.scrollY > oldScrollY && window.scrollY > 116.75) {
            setDirectionUp(false);
        } else {
            setDirectionUp(true);
        }
        oldScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    },[]);

    return (
        <>
            <nav className={directionUp ? 'nav' : 'nav nav-bar--hidden'}>
                <div className="header-container">
                    <div className="header-title-container">
                        <a
                            className="header-logo-link"
                            href="/"
                        >
                            <img
                                src={logo}
                                alt="confessions logo"
                                className="header-logo-img">
                            </img>
                        </a>
                    </div>
                    <div className="header-link-container">
                        {pageList}
                    </div>
                </div>
            </nav>
            <div className={directionUp ? "hamburger" : " move-down"}>
                <Hamburger peopleInfo={props.peopleInfo}/>
            </div>
        </>
    );
}

