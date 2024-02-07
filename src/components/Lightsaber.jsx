function Lightsaber({ isActive, className }) {
    return (
    <div className={`lightsaber ${className} ${isActive ? "active" : ""}`}>
        <div className={`lightsaber-saber ${isActive ? 'glow lightsaber-saber-active' : ''}`}></div>
        <div className={`lightsaber-saber-hilt ${isActive ? 'lightsaber-saber-hilt-active' : ''}`}></div>
    </div>   
    )
}

export default Lightsaber;