function LargeCardContent({name, image, about}) {
    return (
        <div className="large-card">
            <div>
                <img src={image} alt={name}></img>
            </div>
            <div className="about">
                <div>-</div>
                <h1>{name}</h1>
                <p>{about}</p>
            </div>
        </div>    
    )
}

export default LargeCardContent;