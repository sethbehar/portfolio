import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Github.css"

const Github = ({ username }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/sethbehar/events`);
        setEvents(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching GitHub events:', error);
      }
    };

    fetchEvents();
  }, [username]);

  return (
    <div className='activity'>
      <h3>Recent Activity for {username}</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.type} in <a href={event.repo.url}>{event.repo.name}</a> at {new Date(event.created_at).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Github;
