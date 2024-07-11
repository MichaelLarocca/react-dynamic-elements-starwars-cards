// import { useNavigate } from 'react-router-dom';

// const handleNavigation = (path) => {
//     navigate('/');
//     setTimeout(() => {
//       navigate(path);
//     }, 0); // You can adjust the delay if needed
//   };

// export default function Menu({
// 	setSelectedCategory,
// 	setShowCarousel,
// 	categories,
// }) {

// 	const navigate = useNavigate();

// 	return (
// 		<menu>
// 			{/* {Object.keys(categories).map(category => (
//                 <button key={category} onClick={() => setSelectedCategory(categories[category])}>
//                     {category === 'youtube' ? 'VIDEO' : category.charAt(0).toUpperCase() + category.slice(1)}
//                 </button>
//             ))}             */}
// 			{Object.keys(categories)
// 				.filter((category) => category !== "youtube" && category !== "news" && category !== "mainpage")
// 				.map((category) => (
// 					<button className="button-sw"
// 						key={category}
// 						onClick={() => {
// 							handleNavigation('/');
// 							setSelectedCategory(categories[category]);
// 							setShowCarousel(false);
// 						}}
// 					>
// 						{category.charAt(0).toUpperCase() + category.slice(1)}
// 					</button>
// 				))}
// 		</menu>
// 	);
// }

import { useNavigate } from 'react-router-dom';

export default function Menu({
  setSelectedCategory,
  setShowCarousel,
  categories,
}) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate('/');
    setTimeout(() => {
      navigate(path);
    }, 0); // You can adjust the delay if needed
  };

  return (
    <menu>
      {Object.keys(categories)
        .filter((category) => category !== "youtube" && category !== "news" && category !== "mainpage")
        .map((category) => (
          <button className="button-sw"
            key={category}
            onClick={() => {
              handleNavigation('/');
              setSelectedCategory(categories[category]);
              setShowCarousel(false);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
    </menu>
  );
}
