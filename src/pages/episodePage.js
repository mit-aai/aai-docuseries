import React from 'react';
import './episodePage.css';
import BackButton from "../components/BackButton";
import VideoWrapper from "../components/VideoWrapper";


export default function EpisodePage(props) {
    React.useEffect(() => {
        document.title = 'Confessions: ' + props.name;
      }, []);

    return (
        <div className="episodePage-container">
            <div className="episode-container">
                <div className="episodePage-quote">{props.quote}</div>
                <div className="episodePage-title">{props.name}</div>
                {props.cw==="none" ? null : (<div className="episodePage-cw"><i>{"content warning: " + props.cw}</i></div>)}
                <div className="episode-video-container">
                    <VideoWrapper link={props.link} />
                </div>
                <div className="episodePage-text">{props.summary}</div>
                <BackButton peopleInfo={props.peopleInfo} />
            </div>
        </div>

    );
    
};
