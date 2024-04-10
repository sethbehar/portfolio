import Image from 'next/image';
import '../styles/Spotify.css'

const Spotify = () => {
    return (
        <div className='container no-select'>
            <div className='title-logo'>
                <Image className="icon" src="spotify.svg" alt="spotify" width={10} height={10} />
                <h3>Currently Listening to...</h3>
            </div>
            <div>
                <h2>Quittin' Time - Live</h2>
                <h3>Zach Bryan</h3>
                {/* <p>All My Homies Hate TicketMaster (Live from Red Rocks)</p> */}
            </div>
        </div>
    );
};

export default Spotify;

{/* <div className='music-bars'>
                    <div class="now playing" id="music">
                        <span class="bar n1">A</span>
                        <span class="bar n2">B</span>
                        <span class="bar n3">c</span>
                        <span class="bar n4">D</span>
                        <span class="bar n5">E</span>
                    </div>
                    <p className='now-playing-text'>Now playing</p>
                </div> */}
