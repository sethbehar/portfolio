import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import '../styles/Chess.css';

const Chess = () => {
    const [totalGamesPlayed, setTotalGamesPlayed] = useState(0);

    useEffect(() => {
        const username = 'sethbehar'; // Replace with your Chess.com username
        const fetchStats = async () => {
            const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
            const data = await response.json();

            let totalGames = 0;
            // Loop through all game types (e.g., chess_rapid, chess_bullet) and sum up the records
            Object.values(data).forEach(stats => {
                if (stats && stats.record) {
                    totalGames += stats.record.win + stats.record.loss + stats.record.draw;
                }
            });

            setTotalGamesPlayed(totalGames);
        };

        fetchStats();
    }, []);

    return (
        <div className='container'>
            <div className='title-logo'>
                <Image className="icon" src="/chess.svg" alt="Chess Logo" width={60} height={60} />
                <h3>Chess Statistics</h3>
            </div>
            <div className='chess-stats'>
                <p>Total Games Played: {totalGamesPlayed}</p>
            </div>
        </div>
    );
};

export default Chess;
