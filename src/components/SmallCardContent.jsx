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
// 
// import { useState } from 'react';
// import Lightsaber from './Lightsaber';

// function SmallCardContent({name, image}) {
  // function SmallCardContent({name, image, isSelected, onClick}) {
  //   const [isSelected, setIsSelected] = useState(false);
  
  //   const handleClick = () => {
  //     setIsSelected(!isSelected);
  //   }
  
    // return (
    //   <div className={`small-card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
    //     <img src={image} alt={name}></img>
    //     <div className="lightsaber">
    //       <div className={`lightsaber-saber ${isSelected ? 'glow' : ''}`}></div>
    //       <div className="lightsaber-saber-hilt"></div>
    //     </div>
    //     <p>{name}</p>
    //   </div>
    // )
    // function SmallCardContent({name, image, isSelected, onClick}) {
      // return (
      //     <div className={`small-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      //         <img src={image} alt={name}></img>
      //         <Lightsaber isActive={isSelected} />
      //         <p>{name}</p>
      //     </div>
      // )
  // }


  // }

  // export default SmallCardContent;

//   function SmallCardContent({name, image, isSelected, onClick}) {
//     return (
//         <div className={`small-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
//             <img src={image} alt={name}></img>
//             <Lightsaber isActive={isSelected} />
//             <p>{name}</p>
//         </div>
//     )
// }

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