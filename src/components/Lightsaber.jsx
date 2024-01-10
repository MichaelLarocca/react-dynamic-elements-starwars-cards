function Lightsaber({ isActive }) {
    return (
        <div className="lightsaber">
            <div className={`lightsaber-saber ${isActive ? 'glow lightsaber-saber-active' : ''}`}></div>
            <div className={`lightsaber-saber-hilt ${isActive ? 'lightsaber-saber-hilt-active' : ''}`}></div>
        </div>
    )
}

export default Lightsaber;