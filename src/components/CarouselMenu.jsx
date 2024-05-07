import { carousel } from "../data.js";

export default function CarouselMenu({
    setSelectedCategory,
    setShowCarousel
}) {
    // const carousel = {
    //     character: 'Character Gallery',
    //     poster: 'Poster Gallery',
    //     stills: 'Stills Gallery'
    // };

    return (
        <menu>
            {Object.keys(carousel).map((category) => (
                <button
                    key={category}
                    onClick={() => {
                        setSelectedCategory(carousel[category]);
                        setShowCarousel(true);
                    }}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </menu>
    );
}