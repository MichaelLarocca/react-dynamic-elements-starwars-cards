import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../data.js";
import "../App.css";

function Article() {
  const { story } = useParams();
  const article = news.find((item) => item.story === parseInt(story));

  if (!article) {
    return <h2>Article not found!</h2>;
  }

  return (
    <div>
      <h1>{article.name}</h1>
      <img src={article.image} alt={article.name} />
      <p>{article.about}</p>
    </div>
  );
}

export default Article;