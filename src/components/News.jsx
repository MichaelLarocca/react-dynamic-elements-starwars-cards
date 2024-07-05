// import { useState, useEffect } from "react";
// import { news } from "../data.js";
import { TwitterShareButton, XIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import BB8 from "../images/news/BB8.jpeg";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { news } from "../data.js";
import StarWarsCard from "../components/StarWarsCard";
import SmallCardContent from "../components/SmallCardContent";
import News from "../components/News"; // Import the News component
import "../App.css";

const Article = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => {
        if (item.type === 'paragraph') {
          return <p key={index}>{item.text}</p>;
        } else if (item.type === 'image') {
          return <img key={index} src={item.src} alt={item.alt} className="news__image-body" />;
        }
        return null;
      })}
    </div>
  );
};

// function News({ news, storyNumber }) {
function NewsArticle({ news, storyNumber }) {

  const articleContent = [];
  const [shareUrl, setShareUrl] = useState(window.location.href);
  const [title, setTitle] = useState(news[storyNumber].name);
  const [hashtags, setHashtags] = useState(['StarWars', 'News']);

  // State for Twitter icon
  const [twitterBgColor, setTwitterBgColor] = useState('black');
  const [twitterIconColor, setTwitterIconColor] = useState('white');

  // State for LinkedIn icon
  const [linkedinBgColor, setLinkedinBgColor] = useState('black');
  const [linkedinIconColor, setLinkedinIconColor] = useState('white');

  // Event handlers for Twitter icon
  const handleMouseEnterTwitter = () => {
    setTwitterBgColor('lightgray');
    setTwitterIconColor('black');
  };

  const handleMouseLeaveTwitter = () => {
    setTwitterBgColor('black');
    setTwitterIconColor('white');
  };

  // Event handlers for LinkedIn icon
  const handleMouseEnterLinkedin = () => {
    setLinkedinBgColor('lightgray');
    setLinkedinIconColor('black');
  };

  const handleMouseLeaveLinkedin = () => {
    setLinkedinBgColor('black');
    setLinkedinIconColor('white');
  };

  useEffect(() => {
    setShareUrl(window.location.href);
    setTitle(news[storyNumber].name);
    setHashtags(['StarWars', 'News']);
  }, [storyNumber]);

  for (let key in news[storyNumber]) {
    if (key.startsWith('paragraph')) {
      articleContent.push({ type: 'paragraph', text: news[storyNumber][key] });
    } else if (key.startsWith('image') && !news[storyNumber][key].includes('title')) {
      articleContent.push({ type: 'image', src: news[storyNumber][key], alt: key });
    }
  }

  return (
    <div className="ctn-news">
      <img src={news[storyNumber].image} alt="Placeholder" className="news__image-main" />
      <div className="news__title">
        <h1>{news[storyNumber].name}</h1>
        <h4>{news[storyNumber].sub_title}</h4>
      </div>
      <div className="news__about">
        <div className="ctn-news-header">
          <img src={BB8} width="50px" height="50px" alt="Placeholder" className="news__image-author" />
          <div>
            <p className="ctn-news-author gray"><strong>By:</strong> {news[storyNumber].by}</p>
            <p className="ctn-news-date gray"><strong>date:</strong> {news[storyNumber].date}</p>
          </div>
        </div>
        <div className="news__social-icons">
          <div>
            <TwitterShareButton url={shareUrl} title={title} hashtags={hashtags}>
              <XIcon size={32} round bgStyle={{ fill: twitterBgColor }} iconFillColor={twitterIconColor} onMouseEnter={handleMouseEnterTwitter} onMouseLeave={handleMouseLeaveTwitter} className="social-icons"/>
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={title}>
              <LinkedinIcon size={32} round bgStyle={{ fill: linkedinBgColor }} iconFillColor={linkedinIconColor} onMouseEnter={handleMouseEnterLinkedin} onMouseLeave={handleMouseLeaveLinkedin} className="social-icons" />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
      <div className="news__content ctn-news-article">
        <Article content={articleContent} />
      </div>
      <div className="news__footer">
        <footer><strong>StarWars.com. All Star Wars, all the time.</strong></footer>
      </div>
    </div>
  );
}

// export default News;
export default NewsArticle;