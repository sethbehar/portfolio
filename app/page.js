"use client";
import Box from "@/components/Box";
import WordAnimation from "@/components/WordAnimation";
import "../styles/Home.css";
import { useState } from "react";
import Image from "next/image";
import Github from "@/components/Github";
import Media from "@/components/Media";
import Spotify from "@/components/Spotify";
import Chess from "@/components/Chess"
import ContactForm from "@/components/Mail";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [mailFormActive, setMailFormActive] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  // const renderMailForm = () => {
  //   setMailFormActive(!mailFormActive)
  //   console.log('false')
  // }

  const renderInitialBoxes = () => (
    <>
      <Box color="white" onClick={() => handleClick('about')} animationVariant="fromLeft">
        <div className="title-icon no-select">
          <Image className="icon" src="user.svg" alt="img" width={10} height={10} />
          <h1 className="section-title">About</h1>
        </div>
        <p className="about-text no-select">
          <WordAnimation className="no-select" text="hi i’m seth, a developer from Florida. i am a senior at the University of Florida studying CS. i am passionate about web apps, startups, sql, and youtube tutorials. i love music and chess." />
        </p>
      </Box>

      <Box color="white" onClick={() => handleClick('experience')} animationVariant="fromTop">
        <div className="title-icon no-select">
          <Image className="icon" src="info.svg" alt="img" width={10} height={10} />
          <h1 className="section-title">Experience</h1>
        </div>
        <div className='logo-container no-select'>
          <p className="experience-text apricity">Apricity</p>
          <p className="experience-text shopilot">Shopilot</p>
          <p className="experience-text internshark">Internshark</p>
          <p className="experience-text ebacon">eBacon</p>
          <p className="experience-text tamid">TAMID</p>
          <p className="experience-text webstaurant">WebstaurantStore</p>
        </div>
      </Box>

      {
        mailFormActive ?
          // <ContactForm renderMailForm={renderMailForm} /> :
          <ContactForm /> :
          <Box color="white" animationVariant="fromBottom" height="9rem" width="30rem">
            <div className="title-icon no-select">
              <Image className="icon" src="source-control.svg" alt="img" width={10} height={10} />
              <h1 className="section-title">Contact</h1>
            </div>
            <div className="contact-info-logos">
              <a href="https://www.linkedin.com/in/seth-behar/" target="_blank" rel="noopener noreferrer">
                <Image className="icon-logo" src="linkedin.svg" alt="img" width={10} height={10} />
              </a>
              <a href="https://github.com/sethbehar" target="_blank" rel="noopener noreferrer">
                <Image className="icon-logo" src="github.svg" alt="img" width={10} height={10} />
              </a>
              {/* <Image onClick={() => renderMailForm()} className="icon-logo" src="gmail.svg" alt="img" width={10} height={10} /> */}
            </div>
          </Box>
      }


      <Box className="no-select" color="white" animationVariant="fromRight" height="9rem" width="30rem">
        <div className="title-icon no-select">
          <Image className="icon" src="coding.svg" alt="img" width={10} height={10} />
          <h1 className="section-title">Skills</h1>
        </div>
        <div className="skills-logos no-select">
          <Image className="icon-logo" src="sql.svg" alt="img" width={10} height={10} />
          <Image className="icon-logo" src="firebase.svg" alt="img" width={10} height={10} />
          <Image className="icon-logo" src="javascript.svg" alt="img" width={10} height={10} />
          <Image className="icon-logo" src="python.svg" alt="img" width={10} height={10} />
          <Image className="icon-logo" src="mongo.svg" alt="img" width={10} height={10} />
          <Image className="icon-logo" src="node.svg" alt="img" width={10} height={10} />
          <Image className="icon-logo" src="css.svg" alt="img" width={10} height={10} />
          <Image className="icon-logo" src="C++.svg" alt="img" width={10} height={10} />
          <Image className="icon-logo" src="react.svg" alt="img" width={10} height={10} />
        </div>
      </Box>
    </>
  );

  const renderSectionBoxes = () => {
    switch (activeSection) {
      case 'about':
        return (
          <>
            <Box color="white">
              <div className="favorite-language-box no-select">
                <div className="title-logo">
                  <Image className="icon" src="coding.svg" alt="img" width={10} height={10} />
                  <h3>Favorite Tech Stack</h3>
                </div>
                <div className="lanugage-logo">
                  <Image className="icon no-select shadow" src="postgres.svg" alt="img" width={10} height={10} />
                  <Image className="icon no-select shadow" src="javascript.svg" alt="img" width={10} height={10} />
                  <Image className="icon no-select shadow" src="node.svg" alt="img" width={10} height={10} />
                  <Image className="icon no-select shadow" src="react.svg" alt="img" width={10} height={10} />
                </div>
              </div>
            </Box>

            <Box color="white">
              <Github />
            </Box>

            <Box color="white">
              <button onClick={() => { setActiveSection(null) }} className=" center back-btn">Go Back</button>
            </Box>

            <Box color="white">
              <Chess />
            </Box>

          </>
        );
      case 'experience':
        return (
          <>
            <Box color="white">
              <div className="favorite-language-box no-select">
                <div className="title-logo">
                  <Image className="icon no-select " src="/piggy.svg" alt="img" width={10} height={10} />
                  <a href="https://www.ebacon.com/" target="_blank" rel="noopener noreferrer"><h3>eBacon</h3></a>
                </div>
                <div className="text-area-column">
                  <p>Software Developer Intern <span>May 2023 - August 2023</span></p>
                  <p>Automated client portfolio rebalancing via a custom SQL sproc</p>
                  <p>Modernized the case management system using React.js</p>
                </div>
              </div>
            </Box>

            <Box color="white">
              <div className="favorite-language-box no-select">
                <div className="title-logo">
                  <Image className="icon-ws no-select " src="/WebstaurantStore.svg" alt="img" width={10} height={10} />
                  <a href="https://www.webstaurantstore.com/" target="_blank" rel="noopener noreferrer"><h3>WebstaurantStore</h3></a>
                </div>
                <div className="text-area-column">
                  <p>Incoming Database Developer Intern <span>Summer 2024</span></p>
                </div>
              </div>
            </Box>

            <Box color="white">
              <button onClick={() => { setActiveSection(null) }} className="back-btn">Go Back</button>
            </Box>
            <Box color="white">
              <div className="favorite-language-box no-select">
                <div className="title-logo">
                  <Image className="icon no-select " src="fin.svg" alt="img" width={10} height={10} />
                  <h3>Internshark</h3>
                </div>
                <div className="text-area-column">
                  <p>Developed a student-first web application, enabling mass application to over 1,500 internships across the U.S</p>
                  <p>Built with Vue.js frontend and Express backend, Firebase and Stripe for subscription payments</p>

                </div>
              </div>
            </Box>
          </>

        );

      default:
        return null;
    }
  };

  return (
    <div className="all-content">
      <div className="header-group no-select">
        {activeSection === null ? (
          <p className="header-text-main">Hello, my name is <span className="name">Seth</span><br />CS student at <span className="name">UF</span></p>
        ) : activeSection === 'about' ? (
          <p className="header-text">Hello, my name is <span className="name">Seth</span><br />Let me tell you a bit <span className="name">about</span> myself</p>
        ) : activeSection === 'experience' ? (
          <p className="header-text">Hello, my name is <span className="name">Seth</span><br />Here are my projects and <span className="name">experience</span></p>
        ) : (
          <p className="header-text">Hello, my name is <span className="name">Seth</span><br />CS student at <span className="name">UF</span></p>
        )}
      </div>
      <div className="home">
        <div className="boxes">
          {activeSection === null ? renderInitialBoxes() : renderSectionBoxes()}
        </div>
      </div>
    </div>
  );

}
