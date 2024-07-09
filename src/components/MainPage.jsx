import { useState, useEffect } from "react";
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
import Navbar from "../components/Navbar";
import StarWarsCard from "../components/StarWarsCard";
import SmallCardContent from "../components/SmallCardContent";
import LargeCardContent from "../components/LargeCardContent";
import MainPageDisplay from "../components/MainPageDisplay.jsx";
// import News from "../components/News";
import "../App.css";

function MainPage() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [items, setItems] = useState(characters);
	const [selectedCategory, setSelectedCategory] = useState(mainpage);
	const [showCarousel, setShowCarousel] = useState(false);

	// const [selectedStory, setSelectedStory] = useState(0);

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
		// news,
	};

	useEffect(() => {
		if (selectedCategory && selectedCategory.length > 0) {
			setSelectedItem(selectedCategory[0]);
		}
	}, [selectedCategory]);

	// useEffect(()=> {

	// 	if(selectedCategory === news && selectedItem !== null) {
	// 		setSelectedStory(selectedItem.story);
	// 	}

	// }, [selectedItem]);

	return (
		<>
			<Navbar
				categories={categories}
				setSelectedCategory={setSelectedCategory}
				setShowCarousel={setShowCarousel}
			/>
			{selectedCategory === categories.mainpage && <MainPageDisplay />}
			{!showCarousel && selectedCategory !== categories.mainpage && (
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
			{!showCarousel && selectedCategory && selectedCategory !== categories.mainpage && (
				<StarWarsCard
					type="article"
					contentType={LargeCardContent}
					contentProps={{
						name: selectedItem ? selectedItem.name : items[0].name,
						image: selectedItem ? selectedItem.image : items[0].image,
						about: selectedItem ? selectedItem.about : items[0].about,
						youtubeId: selectedItem
							? selectedItem.youtubeId
							: items[0].youtubeId,
					}}
					layout="large-card"
					theme="dark-theme"
					interaction="hoverable"
				/>
			)}
			{showCarousel && selectedCategory !== categories.mainpage && (
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