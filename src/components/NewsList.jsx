import React, { useState, useEffect } from "react";
import { news } from "../data.js";
import StarWarsCard from "../components/StarWarsCard";
import SmallCardContent from "../components/SmallCardContent";
import { mapItems } from "../utils/mapFunctions.jsx";
import news_logo from "../images/news/logo_news_ai.png";
import "../App.css";

function NewsList() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(news);

    useEffect(() => {
        if (news && news.length > 0) {
            setSelectedItem(news[0]);
        }
    }, []);

    return (
        <div>
            <h1>News List</h1>
            <section className="small-card-container">
                {mapItems(
                    selectedCategory,
                    StarWarsCard,
                    setSelectedItem,
                    selectedItem,
                    SmallCardContent,
                    "/article"
                )}
            </section>
            <img src={news_logo} alt="News Logo" />
        </div>
    );
}

export default NewsList;