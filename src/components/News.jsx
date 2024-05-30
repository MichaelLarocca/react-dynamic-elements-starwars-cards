import { news } from "../data.js";

function News({news}) {
  return (
    <div className="ctn-news">
      <img src={news[2].image_title} alt="Placeholder" className="news__image-main" />
      <div className="news__title">
        <h1>{news[2].title}</h1>
        <h4>{news[2].sub_title}</h4>
      </div>
      <div className="news__about"> 
        <div className="ctn-news-header">
          <img src="src/images/news/BB-8.jpeg" width="50px" height="50px" alt="Placeholder" className="news__image-author" />
          <div>
            <p className="ctn-news-author gray"><strong>By:</strong> {news[2].by}</p>
            <p  className="ctn-news-date gray"><strong>date:</strong> {news[2].date}</p>
          </div>
        </div>
        <div className="news__social-icons">
          {/* Social icons go here */}
          <div>Social icons go here</div>
        </div>
      </div>
      <div className="news__content">
        <p>
        {news[2].paragraph_1}
        </p>
        <img src={news[2].image_1} alt="Placeholder" className="news__image-body"/>
        <p>
        {news[2].paragraph_2}
        </p>
      </div>
      <div className="news__footer">
        {/* Footer content goes here */}
        <footer><strong>StarWars.com. All Star Wars, all the time.</strong></footer>
      </div>
    </div>
  );
}

export default News;

