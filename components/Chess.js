import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/Chess.css';

const Chess = () => {
    const [playerStats, setPlayerStats] = useState({});
    const [lastOnline, setLastOnline] = useState('');

    useEffect(() => {
        const username = 'sethbehar'; // Replace with your Chess.com username
        const fetchStats = async () => {
            const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
            const data = await response.json();
            setPlayerStats(data);
            
            const infoResponse = await fetch(`https://api.chess.com/pub/player/${username}`);
            const infoData = await infoResponse.json();
            setLastOnline(new Date(infoData.last_online * 1000).toLocaleDateString("en-US"));
        };

        fetchStats();
    }, []);

    // Calculating total games played
    const getTotalGamesPlayed = () => {
        return ['chess_daily', 'chess_rapid', 'chess_bullet', 'chess_blitz']
            .reduce((total, type) => playerStats[type] ? 
                    total + playerStats[type].record.win + playerStats[type].record.loss + playerStats[type].record.draw 
                    : total, 0);
    };

    return (
        <div className='container'>
            <div className='title-logo no-select'>
                <Image className="icon no-select" src="/chess.svg" alt="Chess Logo" width={60} height={60} />
                <h3>Chess Statistics</h3>
            </div>
            <div className='chess-stats'>
                <p className='chess-stat no-select'>Rapid Rating: {playerStats.chess_rapid ? playerStats.chess_rapid.last.rating : 'Loading...'}</p>
                <p className='chess-stat no-select'>Total Games Played: {Object.keys(playerStats).length > 0 ? getTotalGamesPlayed() : 'Loading...'}</p>
                <p className='chess-stat no-select'>Last Online: {lastOnline || 'Loading...'}</p>
            </div>
        </div>
    );
};

export default Chess;
