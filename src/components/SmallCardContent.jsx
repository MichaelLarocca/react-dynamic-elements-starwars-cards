// function SmallCardContent({name, image}){

//     return (
//         <div className="small-card">
//             <img src={image} alt={name}></img>
//             <div className="lightsaber">
//                 <div className="lightsaber-saber"></div>
//                 <div className="lightsaber-saber-hilt"></div>
//             </div>
//             <p>{name}</p>
//         </div>
//     )
// }

// export default SmallCardContent;

import { useState } from 'react';

function SmallCardContent({name, image}) {
    const [isSelected, setIsSelected] = useState(false);
  
    const handleClick = () => {
      setIsSelected(!isSelected);
    }
  
    return (
      <div className={`small-card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
        <img src={image} alt={name}></img>
        <div className="lightsaber">
          <div className={`lightsaber-saber ${isSelected ? 'glow' : ''}`}></div>
          <div className="lightsaber-saber-hilt"></div>
        </div>
        <p>{name}</p>
      </div>
    )
  }

  export default SmallCardContent;