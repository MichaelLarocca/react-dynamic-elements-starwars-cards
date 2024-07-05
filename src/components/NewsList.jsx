import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { news } from "../data.js";
import StarWarsCard from "../components/StarWarsCard";
import SmallCardContent from "../components/SmallCardContent";
// import NewsComponent from "../components/News.jsx";
import NewsArticle from "../components/News.jsx";
import "../App.css";

function NewsList() {
    const [selectedItem, setSelectedItem] = useState(null);
  
    useEffect(() => {
      if (news && news.length > 0) {
        setSelectedItem(news[0]);
      }
    }, []);
  
    return (
      <div>
        <h1>News List</h1>
        <section className="small-card-container">
          {news.map((item) => (
            <Link to={`/article/${item.story}`} key={item.story} onClick={() => setSelectedItem(item)}>
              <StarWarsCard
                type="small"
                contentType={SmallCardContent}
                contentProps={{
                  name: item.name,
                  image: item.image,
                  about: item.about,
                }}
                layout="small-card"
                theme="dark-theme"
                interaction="hoverable"
              />
            </Link>
          ))}
        </section>
        {selectedItem && <NewsArticle news={news} storyNumber={selectedItem.story} />}
      </div>
    );
  }
  
  export default NewsList;

// function NewsList() {
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     if (news && news.length > 0) {
//       setSelectedItem(news[0]);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>News List</h1>
//       <section className="small-card-container">
//         {news.map((item) => (
//           <Link to={`/article/${item.story}`} key={item.story}>
//             <StarWarsCard
//               type="small"
//               contentType={SmallCardContent}
//               contentProps={{
//                 name: item.name,
//                 image: item.image,
//                 about: item.about,
//               }}
//               layout="small-card"
//               theme="dark-theme"
//               interaction="hoverable"
//             />
//           </Link>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default NewsList;

// function NewsList() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//       </div>
//     );
//   }
  
//   export default NewsList;