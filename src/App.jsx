import { useState, useEffect } from 'react';
import { mapItems } from './utils/mapFunctions';
import { characters, creatures, droids, locations, organizations, vehicles, weapons_and_tech } from './data';
import StarWarsCard from './components/StarWarsCard';
import SmallCardContent from './components/SmallCardContent';
import LargeCardContent from './components/LargeCardContent';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState(characters); 
  const [selectedCategory, setSelectedCategory] = useState(characters);

  useEffect(()=>{
    setSelectedItem(selectedCategory[0]);
  },[selectedCategory])
      
  return (
    <>
    <nav>STAR WARS</nav>
    <menu>
      <button onClick={()=>{setSelectedCategory(characters)}}>Characters</button>
      <button onClick={()=>{setSelectedCategory(creatures)}}>Creatures</button>
      <button onClick={()=>{setSelectedCategory(droids)}}>Droids</button>
      <button onClick={()=>{setSelectedCategory(locations)}}>Locations</button>
      <button onClick={()=>{setSelectedCategory(organizations)}}>Organizations</button>
      <button onClick={()=>{setSelectedCategory(vehicles)}}>Vehicles</button>
      <button onClick={()=>{setSelectedCategory(weapons_and_tech)}}>Weapons & Tech</button>
    </menu>  
    <section className="small-card-container">
      {mapItems(selectedCategory, StarWarsCard, setSelectedItem, selectedItem, SmallCardContent)}
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
