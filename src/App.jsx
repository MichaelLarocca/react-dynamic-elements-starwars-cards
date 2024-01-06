import { useState } from 'react';
import { mapCharacters } from './utils/mapFunctions';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import StarWarsCard from './components/StarWarsCard';
import SmallCardContent from './components/SmallCardContent';
import LargeCardContent from './components/LargeCardContent';
import characters from './data';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>STAR WARS</nav>
    <section className="small-card-container">
      {/* {characters.map((character, index) => (
        <StarWarsCard 
          key={index}
          type="div" 
          contentType={SmallCardContent} 
          contentProps={{name: character.name, image: character.image}} 
          layout="small-card" 
          theme={"dark-theme"} 
          interaction="clickable" 
        />
      ))} */}
       {mapCharacters(characters, StarWarsCard)}
    </section>
    <StarWarsCard 
        type="article" 
        contentType={LargeCardContent} 
        contentProps={{name: characters[1].name, image: characters[1].image, about: characters[1].about}} 
        layout="large-card" 
        theme="light-theme" 
        interaction="hoverable" />
    </>
  )
}

export default App
