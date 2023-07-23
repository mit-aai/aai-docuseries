import React, { useRef, useEffect, useState, createRef } from "react";
import {useNavigate} from 'react-router-dom';
import EpisodeBlock from "../components/EpisodeBlock";
import './episodes.css';

export default function Episodes(props) {
    
    const [lastHovered, setLastHovered] = useState(false);
    const peopleRef = useRef(props.peopleInfo.map(() => createRef()));

    let navigate = useNavigate();
    const handleClick = (event, param) => {
        sessionStorage.setItem('scrollPosition', window.pageYOffset)
        navigate(param)
    }
    
    useEffect(() => {
        document.title = "Confessions"
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
            sessionStorage.removeItem('scrollPosition');
        }
      });

    /* Scroll to center view of person clicked */
    function handleNameClick(event, param) {
        param[0].current.scrollIntoView({ behavior: "smooth", block: "center" });
        setLastHovered(param[1])
    }

    /* Return to top of page */
    function handleTopClick() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    /* Determine if user is scrolling up */
    let oldScrollY = 0;
    const [directionUp, setDirectionUp] = useState(true);
    const controlDirection = () => {
        if(window.scrollY > oldScrollY && window.scrollY > 116.75) {
            setDirectionUp(false);
        } else {
            setDirectionUp(true);
        }
        oldScrollY = window.scrollY;
    }
    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    },[]);

    let epBlock = [];
    let sidebar = [];
    props.peopleInfo.forEach((person, index) => {
        epBlock.push( <div key={person.name} className="episode-block-container" ref={peopleRef.current[index]}
                onMouseEnter={() => setLastHovered(person.name)}>
                <EpisodeBlock
                    id={person.name}
                    image={person.img}
                    description={person.name + " still"}
                    name={person.name}
                    quote={person.quote}
                    clickEp={event => handleClick(event, person.route)}
                />
            </div>
        )
        sidebar.push(
            <div key={person.name + "-sidebar"}
                className={lastHovered === person.name ? "episodes-sidebar-name highlight" : "episodes-sidebar-name"} 
                onClick={event => handleNameClick(event, [peopleRef.current[index], person.name])}>{person.name}</div>
        )
    });

    epBlock.push( 
        <div key="next-ep" className="episode-block-container"> 
            <div className="episode-block-wrapper">
                    <div className="episode-quote" dir="ltr">next episodes coming soon!</div>
                    {/* <div className="episode-name">January 25th</div> */}
            </div>
        </div>
    )

    return (
        <div>
            <div className="episodes-wrapper">
                <div className={directionUp ? "episodes-blurb-wrapper" : "episodes-blurb-wrapper scrolled"}>
                    {(() => {
                        for (let i = 0; i < props.peopleInfo.length; i++) {
                            if(lastHovered === props.peopleInfo[i].name) {
                                return (
                                    <>
                                        <div className="episodes-blurb-title">{props.peopleInfo[i].name}</div>
                                        {props.peopleInfo[i].cw==="none" ? null : <div className="episodes-blurb-cw">{"content warning: " + props.peopleInfo[i].cw}</div>}
                                        <div className="episodes-blurb-themes">themes: {props.peopleInfo[i].themes}</div>
                                        <div className="episodes-blurb-summary">{props.peopleInfo[i].summary}</div> 
                                    </>
                                );
                            }
                        }
                        return (
                            // base case to provide a description before any videos are hovered over
                            <div className="episodes-blurb-none">
                                Hover over a video to get its description!
                            </div>
                        );
                    })()}
                    </div>
                <div className="episodes-container">
                    {epBlock}
                </div>
                <div className={directionUp ? "episodes-sidebar-wrapper" : "episodes-sidebar-wrapper scrolled"}>
                    <div className="episodes-sidebar-container">
                        {sidebar}
                    </div>
                </div>
                <div className="episodes-sidebar-name" onClick={handleTopClick}>
                    <svg className="episodes-button" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V9"/></svg>
                </div>
            </div>
            <div className="disclaimer-wrapper">
                <div className="disclaimer">Disclaimer: the views expressed in these interviews are the opinions of the individuals and do not necessarily reflect that of the MIT Asian American Initiative. No content is intended to malign anyone or anything. Please be respectful of all participants and stories shared.</div>
            </div>
        </div>
        
    );
}
