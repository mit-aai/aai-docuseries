import  React from 'react';
import ReactDOM from 'react-dom/client';
import { LastLocationProvider } from 'react-router-dom-last-location';

import './index.css';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import Episodes from './pages/episodes'
import About from './pages/about';
import People from './pages/people';
import Trailer from './pages/trailer';
import YourStory from './pages/yourStory';
import EpisodePage from './pages/episodePage';
import NotFound from './pages/notFound';

import jasonImg from "./images/stills/jason.jpeg";
import nikashaImg from "./images/stills/nikasha.jpeg";
import anon1Img from "./images/stills/anon1.png";
import anon2Img from "./images/stills/anon2.png";
import neoshaImg from "./images/stills/neosha.jpeg";
import anon3Img from "./images/stills/anon3.png";
import marcoImg from "./images/stills/marco.jpeg";
import shreyaImg from "./images/stills/shreya.jpeg";
import rajImg from "./images/stills/raj.jpeg";

import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

/* Update interviewee info here! */
let people = [
  { name: 'Jason',
    route: '/episode/jason',
    summary: 'Jason opens up about the emotional toll that using dating apps had on him and how his experience reflects how Asian men are viewed in the greater American context. He describes cultural clashes when discussing romance with an immigrant parent and laments that, while relationships are often seen as a perfect answer to one’s problems, many people have healing to do first.',
    quote: 'Dating in this modern world is really f***ing hard',
    link: 'https://www.youtube.com/embed/apC6BwJ5-PQ',
    themes: 'immigrants, trauma, online dating, familial expectation',
    cw: 'none', 
    img: jasonImg},
  { name: 'Nikasha',
    route: '/episode/nikasha',
    summary: 'Nikasha was raised in an Arizona suburb with a strong Indian community, but felt left behind as a brown woman in her high school dating scene, having been surrounded by an ideal of perfect blonde relationships. She also discusses biases she has observed in dating app algorithms, others incorrectly assuming she will have an arranged marriage, and colorism in media depictions of romance and beyond.',
    quote: 'Seeing only white Americana relationships',
    link: 'https://www.youtube.com/embed/R6cDlzvyHTU',
    themes: 'colorism, online dating, arranged marriage, caste',
    cw: 'none',
    img: nikashaImg},
    { name: 'Anonymous 1',
    route: '/episode/anon1',
    summary: 'Growing up, Anonymous 1 yearned to be white after being bullied for being Asian by their white classmates. Such negative experiences made their current dating preferences aversive towards white people; they continue to wrestle with the confusion of whether people are attracted to them for who they are or for their racial identity, given the overt Asian fetishization and sexual violence they have faced.',
    quote: 'Do they expect me to be submissive?',
    link: 'https://www.youtube.com/embed/IPCxUXYl_5Y',
    themes: 'internalized racism, sisterhood, fetishization, stereotypes, racial preference, online dating, family expectations, colorism',
    cw: 'sexual assault, eating disorders, self-harm',
    img: anon1Img},
  { name: 'Anonymous 2',
    route: '/episode/anon2',
    summary: 'Anonymous 2 recounts growing up in a Catholic Southeast Asian family and rural town — an environment that forced her to hide her gay identity throughout adolescence in fear of being disowned. She is now out with her college friends and sister, but she battles with the cognitive dissonance of her homophobic family being her main source of connection to her Asian identity.',
    quote: 'My mom would disown me if she knew',
    link: 'https://www.youtube.com/embed/HDPWzXwIhqE',
    themes: 'lgbtq, religion, racial preference, sisterhood',
    cw: 'homophobia',
    img: anon2Img},
  { name: 'Neosha',
    route: '/episode/neosha',
    summary: 'Having grown up "racially isolated", developing close friendships with people of color in university subsequently made Neosha more aware of race in dating. She recounts feeling labeled as mysterious by a previous partner, the judgment that brown women face when choosing a romantic partner, and the ways in which brown women are portrayed as indesirable, even within the South Asian community.',
    quote: 'There is so much judgment on us',
    link: 'https://www.youtube.com/embed/KHS95yc1oUQ',
    themes: 'lgbtq, parental expectations, judgment, dating preferences, stereotypes',
    cw: 'none',
    img: neoshaImg},
  { name: 'Anonymous 3',
    route: '/episode/anon3',
    summary: 'Anonymous 3 recounts being brought up by strictly religious parents — particularly how they avoided talking about romance, except for the topic of arranged marriage — and how he felt the need to hide his own relationships with women, both romantic and platonic. This sense of secrecy, along with the risks associated with being caught by others in his community, contributes to resentment for his culture.',
    quote: 'I have self-resentment for my culture',
    link: 'https://www.youtube.com/embed/dkjzSv8kf4E',
    themes: 'socioeconomic class, religion, arranged marriage, familial expectation',
    cw: 'none',
    img: anon3Img},
  { name: 'Marco',
    route: '/episode/marco',
    summary: 'Although Marco grew up in a Chinese household, his biracial identity and white-passing features meant that he often didn\'t feel accepted in the Asian community he most identified with. Marco opens up about his efforts to actively build connections with other Chinese people in college, dating experiences that have felt both affirming and invalidating of his identity, and complexities he faced when portraying himself on dating apps without "fetishizing himself".',
    quote: 'Often the outside world doesn\'t accept me as Chinese',
    link: 'https://www.youtube.com/embed/ikIu_h7SpWA',
    themes: 'mixed race, online dating, dating preferences',
    cw: 'none',
    img: marcoImg},
  { name: 'Anonymous 4',
    route: '/episode/anon4',
    summary: 'Anonymous 4 was raised in a household that did not express affection openly; instead, love was seen as something practical and demonstrated through acts of service. As she explores dating in college, she aims to find healthier ways to love, while attempting to avoid both the societal pressures of casual hook-up culture and the familial pressures of getting married and having children too quickly, if at all.',
    quote: 'Breaking the cycle of tough love',
    link: 'https://www.youtube.com/embed/tqsEHPq0vG8',
    themes: 'parents, familial expectation, hook up culture, religion, kids',
    cw: 'none',
    img: anon1Img},
    { name: 'Shreya',
    route: '/episode/shreya',
    summary: 'American media constantly reminded Shreya that she did not fit the blonde, blue-eyed classic beauty standard, along with the pervasive perception that people don\'t want to date Indian people, leading her to feel ugly and worthless growing up. As she gradually developed her sense of worth whilst in university, she reflects on the Indian peers that haved inspired her, cultural differences in dating someone white, and the lack of positive Indian American representations in pop culture.',
    quote: 'What\'s a race you would never date?',
    link: 'https://www.youtube.com/embed/vb0SOfQ2f1o',
    themes: 'beauty standards, parental expectations, racial preferences, media representation, fetishization',
    cw: 'none',
    img: shreyaImg},
    { name: 'Anonymous 5',
      route: '/episode/anon5',
      summary: 'Anonymous 5 grew up in two seemingly opposing worlds: one was her Chinese household that emphasized the practicality of relationships over romance, and the other was her predominantly white town that glorified external Western gestures of love. Her experience with online dating in college was generally uncomfortable, but she eventually develops a healthy, refreshing relationship with a partner of a different background whom she met off an app.',
      quote: 'There was never emphasis on love',
      link: 'https://www.youtube.com/embed/lUu8ESrYM50',
      themes: 'online dating, fetishization, marriage and divorce, sisterhood',
      cw: 'none',
      img: anon3Img},
    { name: 'Raj',
      route: '/episode/raj',
      summary: 'Raj grew up wanting to hide his Indian identity as much as possible, and felt as though his culture paired with his darker complexion prevented him from being seen as attractive by American standards. He reflects on how his internalized racism affected his dating preferences through his adolescence, and the satisfaction he feels today being able to discuss things like race and culture with his girlfriend who is also Asian, which he feels would be harder to do with a white partner.',
      quote: 'I felt different because of my skin color',
      link: 'https://www.youtube.com/embed/IM5BLlw0Z0o',
      themes: 'colorism, internalized racism, dating preferences, online dating',
      cw: 'none',
      img: rajImg},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <LastLocationProvider>
        <div className="page-body">
          <NavBar  peopleInfo = {people}/>
          <Routes>
              <Route key="home" exact path='/' element={<Episodes peopleInfo = {people}/>}></Route>
              <Route key="episodes" exact path='/episodes' element={<Episodes peopleInfo = {people}/>}></Route>
              <Route key="about" exact path='/about' element={<About />}></Route>
              <Route key="people" exact path='/people' element={<People />}></Route>
              <Route key="your-story" exact path='/your-story' element={<YourStory />}></Route>
              <Route key="trailer" exact path='/trailer' element={<Trailer />}></Route>
              <Route key="not found" exact path='*' element={<NotFound />}></Route>
              {people.map(person =>
                <Route path={person.route}
                  key={person.name}
                  element={<EpisodePage
                  quote = {person.quote}
                  summary = {person.summary}
                  link = {person.link}
                  themes = {person.themes}
                  cw = {person.cw}
                  name = {person.name}
                  route = {person.route}
                  peopleInfo = {people}
                  />}
                />
              )}
          </Routes>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </LastLocationProvider>
    </Router>
  </React.StrictMode>
);
