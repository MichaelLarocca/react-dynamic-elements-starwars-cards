export default function Menu({ setSelectedCategory, categories }) {
    return (
        <menu>
            {/* {Object.keys(categories).map(category => (
                <button key={category} onClick={() => setSelectedCategory(categories[category])}>
                    {category === 'youtube' ? 'VIDEO' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}             */}
            {Object.keys(categories).filter(category => category !== 'youtube').map(category => (
                <button key={category} onClick={() => setSelectedCategory(categories[category])}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}               
        </menu>
    )
}