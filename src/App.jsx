import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import StarWarsCard from './components/StarWarsCard'
import SmallCardContent from './components/SmallCardContent '
import LargeCardContent from './components/LargeCardContent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>STAR WARS</nav>
    <section className="small-card-container">
      <StarWarsCard type="div" contentType={SmallCardContent} layout="small-card" theme="dark-theme" interaction="clickable" />
      <div>CARD 2</div>
      <div>CARD 3</div>
      <div>CARD 4</div>
      <div>CARD 5</div>
    </section>
    <StarWarsCard type="article" contentType={LargeCardContent} layout="large-card" theme="dark-theme" interaction="hoverable" />
    </>
  )
}

export default App
