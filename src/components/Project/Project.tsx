import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/MuhammadAffan623/rater-helper" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>RATER HELPER</h3>
              <p>
                Web-based application facilitating employee job management and record-keeping. Assigned distinct job roles to each employee according to the services they provided. Created APIs for CRUD operations and Integrated APIs on the front end.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular.js</li>
                <li>MUI</li>
                <li>SQL</li>
                <li>Express.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href="https://github.com/MuhammadAffan623/aanya" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                </div>
            </header>
            <div className="body">
              <h3>AANYA</h3>
              <p>Web-based application designed to transition offline businesses seamlessly into the online sphere, akin to a Shopify platform. Took charge of creating reusable components and played a pivotal role in API creation and integration. Continuously contributed to the enhancement and maintenance of existing APIs.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Remix.js</li> <li>NestJS</li> <li>GraphQL</li> <li>Tailwind CSS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href="https://github.com/MuhammadAffan623/dexes" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a> */}
              </div>
            </header>
            <div className="body">
              <h3>DEXES</h3>
              <p>
                Developed a sophisticated web-based application focusing on precisely localizing arbitrary points across five indexes. Played a pivotal role in designing and implementing APIs, ensuring seamless communication between frontend and backend systems.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>NextJS</li>
                <li>Node.js</li>
                <li>Express JS</li>
                <li>WebSocket</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href="https://github.com/MuhammadAffan623/fileonion" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>FILEONION</h3>
              <p>Developed a web application that allows users to manage their files and provides a solution for receiving files from customers and evaluating requests based on uploaded files. Improved performance by optimizing time-consuming APIs and implementing pagination. Utilized context for better user experience and effective state management.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python (FastAPI)</li>
                <li>AWS (Lambda, SNS, SQS, SES, EventBridge, Cognito)</li>
                <li>NextJS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/MuhammadAffan623/cartex-web-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>CARTEX WEB APP</h3>
              <p>Utilized the Flickity library to construct a dynamic and engaging user-centric carousel component. Created the application using ReactJS and Tailwind CSS to significantly boost component rendering speed. Spearheaded the creation of reusable components, optimizing code efficiency and promoting scalability.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Tailwind CSS</li>
                <li>Flickity</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/MuhammadAffan623/teachmetoo" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>TEACHMETOO</h3>
              <p>
                Web-based application for uploading videos and splitting them into small chapters, having all the functionality of YouTube. Responsible for creating reusable components and API creation and integration.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Context API</li>
                <li>MongoDB</li>
                <li>NestJS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/MuhammadAffan623/shill-to-earn" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>SHILL TO EARN</h3>
              <p>
                Developed a web app that displays all earned rewards in cryptocurrency. The app checks user Twitter posts, comments, and retweets for specific keywords, rewarding users with crypto coins accordingly. Created a cron job to check user posts and retweets daily, rewarding them based on the results. The service also monitors the likes on all desired posts daily to update the rewards.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Twitter API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}