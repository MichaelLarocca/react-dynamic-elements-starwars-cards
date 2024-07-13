import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { mapItems } from "../utils/mapFunctions.jsx";
import {
  characters,
  creatures,
  droids,
  locations,
  organizations,
  vehicles,
  weapons_and_tech,
  youtube,
  carousel,
  carousel_character,
  carousel_poster,
  carousel_stills,
  mainpage,
  // news,
} from "../data.js";
import StarWarsCard from "../components/StarWarsCard";
import SmallCardContent from "../components/SmallCardContent";
import LargeCardContent from "../components/LargeCardContent";
import MainPageDisplay from "../components/MainPageDisplay.jsx";
// import News from "../components/News";
import "../App.css";

function MainPage({ selectedCategory, setSelectedCategory, selectedItem, setSelectedItem, showCarousel, setShowCarousel }) {

  const renderMainPageDisplay = selectedCategory === mainpage;
  const renderSmallCardContainer = !showCarousel && selectedCategory !== mainpage;
  const renderLargeCard = !showCarousel && selectedCategory && selectedCategory !== mainpage;
  const renderCarousel = showCarousel && selectedCategory !== mainpage;

  return (
    <>
      {renderMainPageDisplay && <MainPageDisplay />}
      {renderSmallCardContainer && (
        <section className="small-card-container">
          {mapItems(
            selectedCategory,
            StarWarsCard,
            setSelectedItem,
            selectedItem,
            SmallCardContent
          )}
        </section>
      )}
      {renderLargeCard && (
        <StarWarsCard
          type="article"
          contentType={LargeCardContent}
          contentProps={{
            name: selectedItem ? selectedItem.name : selectedCategory[0].name,
            image: selectedItem ? selectedItem.image : selectedCategory[0].image,
            about: selectedItem ? selectedItem.about : selectedCategory[0].about,
            youtubeId: selectedItem ? selectedItem.youtubeId : selectedCategory[0].youtubeId,
          }}
          layout="large-card"
          theme="dark-theme"
          interaction="hoverable"
        />
      )}
      {renderCarousel && (
        <Carousel className="ctn-carousel">
          {selectedCategory && selectedCategory.map((item) => (
            <div key={item.name}>
              <img src={item.image} />
              <p className="legend">{item.name}</p>
            </div>
          ))}
        </Carousel>
      )}
      {/* {selectedCategory === news && <News news={news} storyNumber={selectedStory} />} */}
    </>
  );
}

export default MainPage;