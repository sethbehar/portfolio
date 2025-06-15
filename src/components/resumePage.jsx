import React from 'react';
import BackButton from './BackButton';

export default function ResumePage() {
  return (
    <div
      className="select-none min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <BackButton />
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-3xl w-full text-gray-800">
        {/* Header */} 
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Seth Behar</h1>
        </header>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <p className="font-medium"> <span className='text-blue-700'>University of Florida</span>, Gainesville, FL</p>
          <p>Bachelor of Science in Computer Science (Aug 2021 &ndash; May 2025)</p>
          <p>GPA: 3.68 / 4.00</p>
          <p className="mt-1 text-xs italic">
            Coursework: Data Structures & Algorithms, Discrete Structures, Computational Linear Algebra, Operating Systems, Programming Language Concepts, Foundations of Machine Learning
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Experience</h2>

          {/* WebstaurantStore */}
          <div className="mb-4">
            <p className="font-medium">BI Developer Intern, <span className='text-green-700'>WebstaurantStore</span>  (Remote)</p>
            <p className="text-sm italic">May 2024 &ndash; Aug 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Established a structured data dictionary framework for DAX queries in Power BI, enhancing clarity for 200+ data fields and accelerating new analyst onboarding.</li>
              <li>Created and revised SQL stored procedures to streamline data retrieval for BI reporting, ensuring all procedures passed UAT and code review for successful deployment.</li>
              <li>Conducted research spikes to identify and verify sources of truth for key metrics, providing product owners with accurate data for dashboards.</li>
            </ul>
          </div>

          {/* eBacon */}
          <div className="mb-4">
            <p className="font-medium">Software Engineer Intern, <span className='text-pink-600'>eBacon</span> (Remote)</p>
            <p className="text-sm italic">May 2023 &ndash; Aug 2023</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Automated client portfolio rebalancing via a custom SQL AutoRebalance procedure, reducing manual workload.</li>
              <li>Modernized the company’s case management system using React.js, improving UI/UX and data accessibility.</li>
              <li>Collaborated in daily Agile Scrum stand-ups as part of the 401k developer team.</li>
            </ul>
          </div>

          {/* TAMID */}
          <div>
            <p className="font-medium">President of Tech Consulting, TAMID (Gainesville, FL)</p>
            <p className="text-sm italic">Jan 2024 &ndash; December 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Elected President after delivering three tech projects to various clients, showcasing leadership and project management skills.</li>
              <li>Coordinated with Israeli startups to identify suitable projects for the team.</li>
              <li>Led weekly developer meetings to streamline communication and reduce project delays.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Projects</h2>

          <div className="mb-5">
            <p className="font-medium">Internshark (<a href='https://internshark.us' target="_blank" className='italic'>www.internshark.us</a>)</p>
            <ul className="list-disc list-inside mt-1 space-y-1 text-sm">
              <li>Implemented a student-first web app enabling mass application to 4,500+ internships across the U.S.</li>
              <li>Designed a robust backend pipeline with PostgreSQL and cleaned data from multiple job board APIs.</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="font-medium">Shopilot Chatbot (<a href='https://app.shopilot.fyi' target="_blank" className='italic'>app.shopilot.fyi</a>)</p>
            <ul className="list-disc list-inside mt-1 space-y-1 text-sm">
              <li>Improved an AI-powered chatbot using Next.js with Google authentication via Firebase.</li>
              <li>Implemented features for storing and displaying previous chats and pinning conversations, boosting user retention.</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="font-medium">Internos (<a href='https://internos.vercel.app' target="_blank" className='italic'>internos.vercel.app</a>)</p>
            <ul className="list-disc list-inside mt-1 space-y-1 text-sm">
              <li>AI-powered chatbot utilizing text to sql to provide personalized internship recommendations </li>
              <li>Built with React, DaisyUI, Flask, PostgreSQL </li>
            </ul>
          </div>

          <div>
            <p className="font-medium">AutoRebalance SQL Procedure</p>
            <ul className="list-disc list-inside mt-1 space-y-1 text-sm">
              <li>Automated portfolio rebalancing based on custom stock selections, eliminating manual calculations and ensuring timely adjustments.</li>
              <li>Built a monitoring system to track sell orders before initiating buys.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
          <p><span className="font-medium">Languages & Tools:</span> SQL, Power BI, Excel, Python, PostgreSQL, MongoDB, JavaScript, C++, GitHub</p>
          <p className="mt-1"><span className="font-medium">Certifications:</span> Bloomberg Market Concepts, Microsoft Azure Fundamentals, Postman API Fundamentals</p>
        </section>
      </div>
    </div>
  );
}
