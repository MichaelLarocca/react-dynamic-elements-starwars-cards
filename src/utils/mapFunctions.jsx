import { Link, useLocation  } from "react-router-dom";

export function mapItems(items, Component, setSelectedItem, selectedItem, contentType, linkPath) {
    const location = useLocation();
    
    if (!Array.isArray(items)) {
        return null;
    }
    return items.map((item, index) => {
        const isSelected = location.pathname !== '/news' && (selectedItem ? selectedItem === item : index === 0);
        const contentProps = {
            ...item,
            isSelected
        };

        const card = (
            <Component 
                key={index} 
                type="div" 
                contentType={contentType} 
                contentProps={contentProps} 
                layout="small-card" 
                theme="dark-theme" 
                interaction="clickable" 
                onClick={() => setSelectedItem(item)} 
            />
        );

        if (linkPath) {
            return (
                <Link to={`${linkPath}/${item.story}`} key={item.story}>
                    {card}
                </Link>
            );
        }

        return card;
    });
}