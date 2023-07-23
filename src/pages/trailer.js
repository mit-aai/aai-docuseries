import React from "react";
import './trailer.css';
import VideoWrapper from "../components/VideoWrapper";

export default function Trailer() {
    React.useEffect(() => {
        document.title = 'Confessions: Trailer';
      }, []);
    return (
        <div className="container">
            <div className="trailer-container">
                <div className="trailer-video-container">
                    <VideoWrapper link="https://www.youtube.com/embed/pXz9PGNpR8o" />
                </div>
            </div>
        </div>
    );
}