import React, { useState } from "react";
import './people.css';
import lulu from '../images/lulu.JPG';
import ehua from '../images/ehua.jpg';
import alana from '../images/alana.JPG';
import kemily from '../images/kemily.jpg';
import Credits from '../components/Credits.js';

export default function People() {
    const [lastClicked, setLastClicked] = useState("null");

    React.useEffect(() => {
        document.title = "Confessions: People";
    });

    return (
        <>
            <div className="people-header-wrapper">
                <div className="people-header-container">
                    <div className="header">people</div>
                </div>
            </div>

            <Credits />

            <div className="leads-wrapper">
                <div className="leads-blurb-title text-center">Project Leads</div>
                <div className="leads-info-container">
                    <div className="leads-container">
                        <img className={lastClicked === "lulu" ? "leads-img clicked" : "leads-img"} id="lulu-img" alt="Lulu Tian" src={lulu}
                            onClick={() => setLastClicked("lulu")}/>
                        <div className="leads-name">Lulu Tian</div>
                    </div>
                    <div className="leads-container">
                        <img className={lastClicked === "ehua" ? "leads-img clicked" : "leads-img"} id="ehua-img" alt="Emily Huang" src={ehua}
                            onClick={() => setLastClicked("ehua")} />
                        <div className="leads-name">Emily Huang</div>
                    </div>
                    <div className="leads-container">
                        <img className={lastClicked === "kemily" ? "leads-img clicked" : "leads-img"} id="kemily-img" alt="Emily Kang" src={kemily}
                            onClick={() => setLastClicked("kemily")} />
                        <div className="leads-name">Emily Kang</div>
                    </div>
                    <div className="leads-container">
                        <img className={lastClicked === "alana" ? "leads-img clicked" : "leads-img"} id="alana-img" alt="Alana Chandler" src={alana}
                            onClick={() => setLastClicked("alana")} />
                        <div className="leads-name">Alana Chandler</div>
                    </div>
                </div>
                {lastClicked === "lulu" && (
                    <div className="leads-blurb">Sometimes with dating and romance,
                        things happen, and you’re not sure how to feel about them. Sometimes you
                        know how you feel about them but you’re not sure what others would think.
                        I was excited with this project to give our peers a space to talk honestly
                        about what they’ve experienced in terms of dating and romance, in the
                        context of their cultural and racial background. These conversations often
                        happen between friends, behind closed doors, but I hope that bringing them out
                        can help start even more open discourse.
                    </div>
                )}
                {lastClicked === "ehua" && (
                    <div className="leads-blurb">Often I have found, being Asian American, that
                        I did not have a voice for a very long time. Whether that stemmed from my own
                        fears, or those that were planted by the people around me, I felt uncomfortable
                        sharing stories about my experience publicly, and I think that often you’ll find
                        that a lot of other Asian Americans feel the same way. Mainstream media is so
                        obsessed with discourse around our race with regards to politics, and diaspora
                        growing pains, and the model minority myth, but rarely are we given a space to
                        just be, to sit down and talk about something as banal as romance. With Confessions,
                        I wanted to give students on campus a platform to share their experiences where
                        previously, they might not have had one. And I hope that you, as a viewer, will
                        find that what we have to say about something as simple as romance may not be as
                        shallow as one might think.
                    </div>
                )}
                {lastClicked === "kemily" && (
                    <div className="leads-blurb">Dating can be complicated, for so many reasons.
                    From conversations with friends to depictions in media, I came to notice that certain experiences
                    surrounding dating were possibly particularly colored by our Asian-Americanness.
                    We benefit from sharing our stories and from listening to those of other people.
                    I have found that knowing what others have gone through has the potential to validate my own past,
                    to realize: perhaps that experience of mine was not, in fact, just a small incident to be dismissed and diminished,
                    but instead part of something more. This power of sharing stories is what I wanted to carry through this project.
                    My hope is that you take the act of listening to others’ experiences as an exercise in empathy and compassion;
                    whether through questions, lingering thoughts, feelings of connection, or uncomfortable emotions,
                    I hope that these stories leave you with takeaways to sit with after each episode is over.
                    </div>
                )}
                {lastClicked === "alana" && (
                    <div className="leads-blurb">Between the cringe-to-problematic pipeline of MIT Confession
                        posts to the variety of unsolicited racialized DMs received to exasperated conversations with
                        friends of color who have had similar experiences, I felt an urgent need to do *something.* And
                        others felt it too. A collective “argh”! We realized that the tumultuous emotions resulting from
                        coping with these phenomena are an unfortunate but apparent commonality among our Asian American
                        peers. We hope this project helps bring these stories out from the shadows of silent normativity
                        and taboo. I would love to hear your own stories if you feel comfortable sharing, either through
                        our anonymous forum or through an email or conversation together. We are here to support one another.
                    </div>
                )}
                {lastClicked === "null" && (
                    <div className="leads-blurb text-center"><i>click to learn more<br/><br/></i></div>
                )}
            </div>
        </>
    );
}
