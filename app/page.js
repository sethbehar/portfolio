"use client";
import Box from "@/components/Box";
import WordAnimation from "@/components/WordAnimation";
import "../styles/Home.css";
import { useState } from "react";
import Image from "next/image";
import Github from "@/components/Github";
import Media from "@/components/Media";
import Spotify from "@/components/Spotify";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const renderInitialBoxes = () => (
    <>
      <Box color="white" onClick={() => handleClick('about')} animationVariant="fromLeft">
        <div className="title-icon no-select">
          <Image className="icon" src="user.svg" width={10} height={10} />
          <h1 className="section-title">About</h1>
        </div>
        <p className="about-text no-select">
          <WordAnimation text="hi i’m seth, a developer from Florida. I am a senior at the University of Florida studying CS. I am passionate about web apps, startups, sql, and youtube tutorials. I love music and chess." />
        </p>
      </Box>

      <Box color="white" onClick={() => handleClick('experience')} animationVariant="fromTop">
        <div className="title-icon no-select">
          <Image className="icon" src="info.svg" width={10} height={10} />
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

      <Box color="white" animationVariant="fromBottom">
        <div className="title-icon no-select">
          <Image className="icon" src="source-control.svg" width={10} height={10} />
          <h1 className="section-title">Contact</h1>
        </div>
        <Media />
      </Box>

      <Box color="white" onClick={() => handleClick('skills')} animationVariant="fromRight">
      <div className="title-icon no-select">
          <Image className="icon" src="coding.svg" width={10} height={10} />
          <h1 className="section-title">Skills</h1>
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
              <p>About box 1</p>
            </Box>

            <Box color="white">
              <Github />
            </Box>

            <Box color="white">
              <Spotify />
            </Box>

            <Box color="white">
              <p>About box 4</p>
            </Box>

            <button className="back-btn" onClick={() => { setActiveSection(null) }}>go back</button>
          </>
        );
      case 'experience':
        return (
          <>
            <Box color="white">
              <p>experience box 1</p>
            </Box>

            <Box color="white">
              <p>experience box 2</p>
            </Box>

            <Box color="white">
              <p>experience box 3</p>
            </Box>

            <Box color="white">
              <p>experience box 4</p>
            </Box>

            <button className="back-btn" onClick={() => { setActiveSection(null) }}>go back</button>
          </>

        );
      case 'skills':
        return (
          <>
            <Box color="white">
              <p>skills box 1</p>
            </Box>

            <Box color="white">
              <p>skills box 2</p>
            </Box>

            <Box color="white">
              <p>skills box 3</p>
            </Box>

            <Box color="white">
              <p>skills box 4</p>
            </Box>
            <button className="back-btn" onClick={() => { setActiveSection(null) }}>go back</button>
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
          <p className="header-text">Hello, my name is <span className="name">Seth</span><br />Here are some <span className="name">projects</span> i've worked on</p>

        ) : activeSection === 'skills' ? (
          <p className="header-text">Hello, my name is <span className="name">Seth</span><br />These are the <span className="name">skills</span> i've developed </p>

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
