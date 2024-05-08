export function mapItems(items, Component, setSelectedItem, selectedItem, contentType) {
    if (!Array.isArray(items)) {
        return null;
    }
    return items.map((item, index) => {
        return (
            <Component 
                key={index} 
                type="div" 
                contentType={contentType} 
                contentProps={{
                    ...item,
                    isSelected: selectedItem ? selectedItem === item : index === 0
                }} 
                layout="small-card" 
                theme="dark-theme" 
                interaction="clickable" 
                onClick={() => setSelectedItem(item)} 
            />
        )
    });
}