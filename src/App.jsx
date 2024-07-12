import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import NewsList from './components/NewsList';
import Article from './components/Article';
import NewsArticle from './components/News';
import NotFound from './components/NotFound.jsx';
import {
  characters,
  creatures,
  droids,
  locations,
  organizations,
  vehicles,
  weapons_and_tech,
  youtube,
  mainpage,
  news,
} from './data.js';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(mainpage);
  const [showCarousel, setShowCarousel] = useState(false);

  const categories = {
    characters,
    creatures,
    droids,
    locations,
    organizations,
    vehicles,
    weapons_and_tech,
    youtube,
    mainpage,
    news,
  };

  useEffect(() => {
    if (selectedCategory && selectedCategory.length > 0) {
      setSelectedItem(selectedCategory[0]);
    }
  }, [selectedCategory]);

  return (
    <Router>
      <Navbar
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setShowCarousel={setShowCarousel}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              showCarousel={showCarousel}
              setShowCarousel={setShowCarousel}
            />
          }
        />
        <Route
          path="/news"
          element={
            <NewsList
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              showCarousel={showCarousel}
              setShowCarousel={setShowCarousel}
            />
          }
        />
        <Route path="/article/:storyNumber" element={<NewsArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;