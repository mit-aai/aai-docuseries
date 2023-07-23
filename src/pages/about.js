import React from "react";
import './about.css';

export default function About() {
    React.useEffect(() => {
        document.title = 'Confessions: About';
      }, []);
    return (
        <div className="about-wrapper">
            <div className="about-container">
                <div className="header">about</div>
                <div className="about-text">
                    "Confessions" is a word familiar to all MIT students—the name of an anonymous message board 
                    on Facebook notorious for its sometimes humorous, sometimes demeaning, and often absurd posts. 
                    There, people can get away with saying things they would never say anywhere else. In the midst 
                    of this chaos, what caught our eye more and more over time were the posts that had concerning 
                    ideas related to Asian Americans and dating. They felt real to our own experiences and we 
                    wondered—what about other Asian Americans on campus?
                </div>

                <div className="about-text">
                    <i>Confessions: on race & romance</i> is our attempt to pull back the curtain and give space for 
                    Asian American students at MIT to speak out about their experiences with cultural dating expectations, 
                    fetishization, colorism, uncomfortable DMs, and more. These reflections can be heavy and challenging, 
                    provoking and controversial. Unlike MIT Confessions though, here, you see a person beyond a post: vulnerable, 
                    honest, and complex.
                </div>

                <div className="about-text about-disclaimer">
                    <i>Disclaimer: the views expressed in these interviews are the opinions of the individuals and do 
                    not necessarily reflect that of the MIT Asian American Initiative. No content is intended to malign 
                    anyone or anything. Please be respectful of all participants and stories shared.</i>
                </div>
                {/* TODO put an image or illustration or something to make this page more lively? */}
            </div>
        </div>
    );
}