import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { mapItems } from "./utils/mapFunctions";
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
} from "./data.js";
import Navbar from "./components/Navbar";
import StarWarsCard from "./components/StarWarsCard";
import SmallCardContent from "./components/SmallCardContent";
import LargeCardContent from "./components/LargeCardContent";
import "./App.css";

function App() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [items, setItems] = useState(characters);
	const [selectedCategory, setSelectedCategory] = useState(null);
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
	};

	useEffect(() => {
		if (selectedCategory && selectedCategory.length > 0) {
			setSelectedItem(selectedCategory[0]);
		}
	}, [selectedCategory]);

	return (
		<>
			<Navbar
				categories={categories}
				setSelectedCategory={setSelectedCategory}
				setShowCarousel={setShowCarousel}
			/>
			{!showCarousel && (
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
			{!showCarousel && (
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
			{showCarousel && (
				<Carousel>
					{selectedCategory && selectedCategory.map((item) => (
						<div key={item.name}>
							<img src={item.image} />
							<p className="legend">{item.name}</p>
						</div>
					))}
				</Carousel>
			)}
		</>
	);
}

export default App;
