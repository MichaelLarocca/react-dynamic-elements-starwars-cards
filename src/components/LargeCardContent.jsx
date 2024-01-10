import Lightsaber from './Lightsaber';

function LargeCardContent({name, image, about, isSelected }) {
    return (
        <div className="large-card">
            <div>
                <img src={image} alt={name}></img>
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