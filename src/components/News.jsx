
function News() {
  return (
    <div className="ctn-news">
      <img src="https://via.placeholder.com/150" alt="Placeholder" className="news__image-main" />
      <div className="news__title">
        <h1>Join Forces with Sabine Wren at Star Wars: Galaxy’s Edge – Reveal</h1>
        <h4>Meet the Mandalorian warrior from Ahsoka and Star Wars Rebels inside the market at Batuu.</h4>  
      </div>
      <div className="news__about"> 
        <div className="ctn-news-header">
          <img src="src/images/news/BB-8.jpeg" width="50px" height="50px" alt="Placeholder" className="news__image-author" />
          <div>
            <p className="ctn-news-author gray"><strong>By:</strong> Star Wars Team</p>
            <p  className="ctn-news-date gray"><strong>date:</strong> April 5, 2024</p>
          </div>
        </div>
        <div className="news__social-icons">
          {/* Social icons go here */}
          <div>Social icons go here</div>
        </div>
      </div>
      <div className="news__content">
        <p>
        Sabine Wren, the colorful Mandalorian warrior and Padawan to Ahsoka Tano, is making her way to Star Wars: Galaxy’s Edge at Disneyland Resort. And today, StarWars.com has your first look at her latest, limited-time appearance!
        </p>
        <img src="https://via.placeholder.com/150" alt="Placeholder" className="news__image-body"/>
        <p>
        With her short-cropped purple hair, unique beskar armor including stunning red and purple helmet, and her lightsaber at her hip, the artist and Rebel has officially arrived on Batuu. Sharp-eyed visitors may spot her exploring the districts near Black Spire Outpost.
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

