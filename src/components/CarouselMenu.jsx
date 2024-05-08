import { carousel_character, carousel_poster, carousel_stills } from "../data.js";

export default function CarouselMenu({ setSelectedCategory, setShowCarousel }) {
    const categoriesMap = {
        character: carousel_character,
        poster: carousel_poster,
        stills: carousel_stills
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(categoriesMap[category] || categoriesMap['character']);
        // setSelectedImage(selectedCategory[0]); 
        setShowCarousel(true);
    };

    return (
        <menu>
            {Object.keys(categoriesMap).map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </menu>
    );
}