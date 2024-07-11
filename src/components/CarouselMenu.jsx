// import { carousel_character, carousel_poster, carousel_stills } from "../data.js";

// export default function CarouselMenu({ setSelectedCategory, setShowCarousel }) {
//     const categoriesMap = {
//         character: carousel_character,
//         poster: carousel_poster,
//         stills: carousel_stills
//     };

//     const handleCategoryChange = (category) => {
//         setSelectedCategory(categoriesMap[category] || categoriesMap['character']);
//         // setSelectedImage(selectedCategory[0]); 
//         setShowCarousel(true);
//     };

//     return (
//         <menu>
//             {Object.keys(categoriesMap).map((category) => (
//                 <button className="button-sw"
//                     key={category}
//                     onClick={() => handleCategoryChange(category)}
//                 >
//                     {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </button>
//             ))}
//         </menu>
//     );
// }

import { useNavigate } from 'react-router-dom';
import { carousel_character, carousel_poster, carousel_stills } from "../data.js";

export default function CarouselMenu({ setSelectedCategory, setShowCarousel }) {
  const navigate = useNavigate();

  const categoriesMap = {
    character: carousel_character,
    poster: carousel_poster,
    stills: carousel_stills
  };

  const handleNavigation = (path) => {
    navigate('/');
    setTimeout(() => {
      navigate(path);
    }, 0); // You can adjust the delay if needed
  };

  const handleCategoryChange = (category) => {
    handleNavigation('/'); // Navigate to the main page first
    setSelectedCategory(categoriesMap[category] || categoriesMap['character']);
    setShowCarousel(true);
  };

  return (
    <menu>
      {Object.keys(categoriesMap).map((category) => (
        <button className="button-sw"
          key={category}
          onClick={() => handleCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </menu>
  );
}