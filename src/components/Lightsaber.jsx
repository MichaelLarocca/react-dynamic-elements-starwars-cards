function Lightsaber({ isActive }) {
    return (
        <div className="lightsaber">
            <div className={`lightsaber-saber ${isActive ? 'glow' : ''}`}></div>
            {/* <div className="lightsaber-saber-hilt"></div> */}
        </div>
    )
}

export default Lightsaber;

// function Lightsaber({ isActive, className }) {
//     const glowStyle = isActive ? "glow" : "";
  
//     return (
//       <div className={`${className} ${glowStyle}`}></div>
//     );
//   }

// export default Lightsaber;