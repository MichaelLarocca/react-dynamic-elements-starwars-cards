import YouTube from 'react-youtube';
import Lightsaber from './Lightsaber';

function LargeCardContent({name, image, about, isSelected, youtubeId}) {
    return (
        <div className="large-card">
            <div className="ctn-youtube">
                {!youtubeId && <img src={image} alt={name}></img>}
                {youtubeId && <YouTube videoId={youtubeId} className='youtube'/>}
            </div>
            <div className="about">
                <Lightsaber isActive={true} />
                <h1>{name}</h1>
                <p>{about}</p>
            </div>
        </div>    
    )
}

export default LargeCardContent;