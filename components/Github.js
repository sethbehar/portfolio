import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Github.css"
import Image from "next/image";

const Github = () => { 
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/sethbehar/events`);
        setEvents(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching GitHub events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='activity'>
      <div className='title-logo'>
      <Image className="icon-logo" src="github.svg" alt="git" width={10} height={10} />
        <h3>Recent Github Activity</h3>
      </div>
      <ul className='list'>
        {events.map((event, index) => (
          <li key={index}>
            {event.type === "PushEvent" ? "Commit" : "Pull Request"} in <a href={event.repo.url}>{event.repo.name}</a> on {new Date(event.created_at).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Github;
