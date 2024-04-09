import Image from 'next/image';
import '../styles/Media.css'

const Media = () => {
    return (
        <div className='main'>
            <Image className="icon" src="linkedin.svg" alt="linkedin" width={10} height={10} />
            <Image className="icon" src="github.svg" alt="git" width={10} height={10} />
            <Image className="icon" src="gmail.svg" alit="mail" width={10} height={10} />
        </div>
    );
};

export default Media;
