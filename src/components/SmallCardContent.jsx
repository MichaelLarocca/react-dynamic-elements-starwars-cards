import Lightsaber from './Lightsaber';

function SmallCardContent({name, image, isSelected, onClick}) {
    return (
        <div className={`small-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <img src={image} alt={name}></img>
            <Lightsaber isActive={isSelected} />
            <p>{name}</p>
        </div>
    )
}

export default SmallCardContent;