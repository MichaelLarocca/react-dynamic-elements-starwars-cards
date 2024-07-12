import { useNavigate } from 'react-router-dom';
import { handleNavigation } from '../utils/navigationHelpers';

export default function Menu({
  setSelectedCategory,
  setShowCarousel,
  categories,
}) {
  let path;
  const navigate = useNavigate();

  return (
    <menu>
      {Object.keys(categories)
        .filter((category) => category !== "youtube" && category !== "news" && category !== "mainpage")
        .map((category) => (
          <button className="button-sw"
            key={category}
            onClick={() => {
              path = '/';
              handleNavigation(navigate, path, setTimeout);
              setSelectedCategory(categories[category]);
              setShowCarousel(false);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
    </menu>
  );
}
