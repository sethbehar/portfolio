import Image from 'next/image';
import '../styles/Spotify.css'

const Spotify = () => {
    return (
        <div className='both-boxes'>

            <div className="container">
                <Image className="spotify-logo" src="/spotify.svg" alt="Spotify Logo" width={250} height={250} />
                <div className='music-bars'>
                    <div class="now playing" id="music">
                        <span class="bar n1">A</span>
                        <span class="bar n2">B</span>
                        <span class="bar n3">c</span>
                        <span class="bar n4">D</span>
                        <span class="bar n5">E</span>
                    </div>
                    <p className='now-playing-text'>Now playing</p>
                </div>
            </div>
            <div className='song-artist-box'>
                <h2 className='song'>One of These Nights</h2>
                <h3 className='artist'>Eagles</h3>

            </div>
        </div>
    );
};

export default Spotify;
