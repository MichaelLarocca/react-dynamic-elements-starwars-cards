import { news } from "../data.js";
import BB8 from "../images/news/BB8.jpeg";

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

function News({ news, storyNumber }) {

  const articleContent = [];

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
          <div>Social icons go here</div>
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

export default News;