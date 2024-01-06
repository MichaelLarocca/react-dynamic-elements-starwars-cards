function SmallCardContent({name, image}){

    return (
        <div className="small-card">
            <img src={image} alt={name}></img>
            <div>-</div>
            <p>{name}</p>
        </div>
    )
}

export default SmallCardContent;