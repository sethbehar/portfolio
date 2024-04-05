"use client";
import Box from "@/components/Box";
import WordAnimation from "@/components/WordAnimation";
import "../styles/Home.css";
import { useState } from "react";
import Image from "next/image";
import Github from "@/components/Github";
import Spotify from "@/components/Spotify";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const renderInitialBoxes = () => (
    <>
      <Box color="white" onClick={() => handleClick('about')} animationVariant="fromLeft">
        <h1 className="section-title">About</h1>
        <p className="about-text">
          <WordAnimation text="hi i’m seth, a developer from Florida. I'm interested in React, Node, Product Design, Startups, Project Management, Music, and Chess" />
        </p>
      </Box>

      <Box color="white" onClick={() => handleClick('projects')} animationVariant="fromTop">
        <h1 className="section-title">Projects</h1>
        <div className='logo-container'>
          <p>Apricity</p>
          <p>Shopilot</p>
          <p>Internshark</p>
        </div>
      </Box>

      <Box color="white" animationVariant="fromBottom">
        <h1 className="section-title">Media</h1>
      </Box>

      <Box color="white" onClick={() => handleClick('skills')} animationVariant="fromRight">
        <h1 className="section-title">Skills</h1>
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
      case 'projects':
        return (
          <>
            <Box color="white">
              <p>project box 1</p>
            </Box>

            <Box color="white">
              <p>project box 2</p>
            </Box>

            <Box color="white">
              <p>project box 3</p>
            </Box>

            <Box color="white">
              <p>project box 4</p>
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
      <div className="header-group">
        {activeSection === null ? (
          <p className="header-text-main">Hello, my name is <span className="name">Seth</span><br />CS student at <span className="name">UF</span></p>
        ) : activeSection === 'about' ? (
          <p className="header-text">Hello, my name is <span className="name">Seth</span><br />Let me tell you a bit <span className="name">about</span> myself</p>
        ) : activeSection === 'projects' ? (
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
