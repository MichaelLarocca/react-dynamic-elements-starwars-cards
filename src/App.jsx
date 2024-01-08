import { useState } from 'react';
import { mapCharacters } from './utils/mapFunctions';
import StarWarsCard from './components/StarWarsCard';
import LargeCardContent from './components/LargeCardContent';
import characters from './data';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <>
    <nav>STAR WARS</nav>
    <section className="small-card-container">
       {mapCharacters(characters, StarWarsCard, setSelectedCharacter)}
    </section>
    <StarWarsCard 
        type="article" 
        contentType={LargeCardContent} 
        contentProps={{
          name: selectedCharacter ? selectedCharacter.name : characters[0].name, 
          image: selectedCharacter ? selectedCharacter.image : characters[0].image, 
          about: selectedCharacter ? selectedCharacter.about : characters[0].about
      }} 
        layout="large-card" 
        theme="light-theme" 
        interaction="hoverable" />
    </>
  )
}

export default App
