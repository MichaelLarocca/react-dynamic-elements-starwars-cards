export function mapItems(items, Component, setSelectedItem, selectedItem, contentType) {
    return items.map((item, index) => {
        return (
            <Component 
                key={index} 
                type="div" 
                contentType={contentType} 
                contentProps={{
                    ...item,
                    isSelected: selectedItem === item
                }} 
                layout="small-card" 
                theme="dark-theme" 
                interaction="clickable" 
                onClick={() => setSelectedItem(item)} 
            />
        )
    });
  }