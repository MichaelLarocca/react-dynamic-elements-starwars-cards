import { useNavigate } from 'react-router-dom';
import { carousel_character, carousel_poster, carousel_stills } from "../data.js";
import { handleNavigation } from "../utils/navigationHelpers.js";

export default function CarouselMenu({ setSelectedCategory, setShowCarousel }) {
  let path;
  const navigate = useNavigate();

  const categoriesMap = {
    character: carousel_character,
    poster: carousel_poster,
    stills: carousel_stills
  };

  const handleCategoryChange = (category) => {
    path = '/';
    handleNavigation(navigate, path, setTimeout);
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