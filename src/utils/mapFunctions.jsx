// export function mapItems(items, Component, setSelectedItem, selectedItem, contentType) {
//     if (!Array.isArray(items)) {
//         return null;
//     }
//     return items.map((item, index) => {
//         return (
//             <Component 
//                 key={index} 
//                 type="div" 
//                 contentType={contentType} 
//                 contentProps={{
//                     ...item,
//                     isSelected: selectedItem ? selectedItem === item : index === 0
//                 }} 
//                 layout="small-card" 
//                 theme="dark-theme" 
//                 interaction="clickable" 
//                 onClick={() => setSelectedItem(item)} 
//             />
//         )
//     });
// }

import { Link } from "react-router-dom";

export function mapItems(items, Component, setSelectedItem, selectedItem, contentType, linkPath) {
    if (!Array.isArray(items)) {
        return null;
    }
    return items.map((item, index) => {
        const contentProps = {
            ...item,
            isSelected: selectedItem ? selectedItem === item : index === 0
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