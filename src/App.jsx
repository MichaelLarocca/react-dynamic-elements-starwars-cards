import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import StarWarsCard from './components/StarWarsCard';
import SmallCardContent from './components/SmallCardContent ';
import LargeCardContent from './components/LargeCardContent';
import characters from './data';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>STAR WARS</nav>
    <section className="small-card-container">
      <StarWarsCard 
        type="div" 
        contentType={SmallCardContent} 
        contentProps={{name: characters[0].name, image: characters[0].image}} 
        layout="small-card" 
        theme="dark-theme" 
        interaction="clickable" 
      />
      <StarWarsCard 
        type="div" 
        contentType={SmallCardContent} 
        contentProps={{name: characters[1].name, image: characters[1].image}} 
        layout="small-card" 
        theme="light-theme" 
        interaction="clickable" 
      />
      <StarWarsCard 
        type="div" 
        contentType={SmallCardContent} 
        contentProps={{name: characters[2].name, image: characters[2].image}} 
        layout="small-card" 
        theme="dark-theme" 
        interaction="clickable" 
      />
      <StarWarsCard 
        type="div" 
        contentType={SmallCardContent} 
        contentProps={{name: characters[3].name, image: characters[3].image}} 
        layout="small-card" 
        theme="dark-theme" 
        interaction="clickable" 
      />      
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
