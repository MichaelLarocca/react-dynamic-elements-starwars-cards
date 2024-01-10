import { useState } from 'react';
import { mapItems } from './utils/mapFunctions';
import { characters, creatures } from './data';
import StarWarsCard from './components/StarWarsCard';
import SmallCardContent from './components/SmallCardContent';
import LargeCardContent from './components/LargeCardContent';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState(characters); // or creatures, based on your requirement

  return (
    <>
    <nav>STAR WARS</nav>
    <section className="small-card-container">
      {mapItems(characters, StarWarsCard, setSelectedItem, selectedItem, SmallCardContent)}
    </section>
        <StarWarsCard 
            type="article" 
            contentType={LargeCardContent} 
            contentProps={{
              name: selectedItem ? selectedItem.name : items[0].name, 
              image: selectedItem ? selectedItem.image : items[0].image, 
              about: selectedItem ? selectedItem.about : items[0].about
            }} 
            layout="large-card" 
            theme="dark-theme" 
            interaction="hoverable" />
    </>
  )
}

export default App
