// import React, { useState, useEffect } from "react";
// import Lightsaber from "./Lightsaber";
// import Menu from "./Menu";
// import CarouselMenu from "./CarouselMenu";
// import handleVideoClick from "../utils/helpers";
// import handleNewsClick from "../utils/handleNewsClick";
// import { useNavigate } from 'react-router-dom';

// export default function HamburgerMenu({
// 	categories,
// 	setSelectedCategory,
// 	setShowCarousel,
// }) {
// 	const [isActive, setIsActive] = useState(false);
// 	const [isDatabankVisible, setDatabankVisible] = useState(false);
// 	const [isCarouselVisible, setCarouselVisible] = useState(false);
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		if (isActive) {
// 			setDatabankVisible(false);
// 		}
// 	}, [isActive]);

// 	useEffect(() => {
// 		if (isActive) {
// 			setDatabankVisible(false);
// 			setCarouselVisible(false); // This will close the Carousel menu when the hamburger menu is toggled
// 		}
// 	}, [isActive]);

// 	function handleClick() {
// 		setIsActive(!isActive);
// 	}

// 	function toggleCarousel() {
// 		setShowCarousel((prev) => !prev);
// 	}

// 	return (
// 		<div className="hamburger-menu" onClick={handleClick}>
// 			<Lightsaber
// 				isActive={isActive}
// 				className={
// 					isActive ? "hamburger-lightsaber-1 active" : "hamburger-lightsaber-1"
// 				}
// 			/>
// 			<Lightsaber
// 				isActive={isActive}
// 				className={
// 					isActive ? "hamburger-lightsaber-2 active" : "hamburger-lightsaber-2"
// 				}
// 			/>
// 			{isActive && (
// 				<div className="dropdown-menu">
// 					<div className="navbar-buttons"
// 						onClick={()=>{
// 							handleNewsClick({categories, setSelectedCategory});
// 							setShowCarousel(false);
// 							navigate('/news');
// 						}}
// 					>NEWS</div>
// 					{/* <div className="navbar-buttons">FEATURES</div> */}
// 					{/* <div
// 						className="navbar-buttons"
// 						onClick={() => setShowCarousel((prev) => !prev)}
// 					>
// 						GALLERY
// 					</div> */}
// 					<div
// 						className="navbar-buttons"
// 						onMouseEnter={() => setCarouselVisible(true)}
// 						onMouseLeave={() => setCarouselVisible(false)}
// 					>
// 						GALLERY
// 						{isCarouselVisible && (
// 							<CarouselMenu
// 								setSelectedCategory={setSelectedCategory}
// 								setShowCarousel={setShowCarousel}
// 							/>
// 						)}
// 					</div>
// 					<div
// 						className="navbar-buttons"
// 						onClick={() => {
// 							handleVideoClick({ categories, setSelectedCategory });
// 							setShowCarousel(false);
// 						}}
// 					>
// 						VIDEO
// 					</div>
// 					<div
// 						className="navbar-buttons"
// 						onMouseEnter={() => setDatabankVisible(true)}
// 						onMouseLeave={() => setDatabankVisible(false)}
// 					>
// 						DATABANK
// 						{isDatabankVisible && (
// 							<Menu
// 								setSelectedCategory={setSelectedCategory}
// 								setShowCarousel={setShowCarousel}
// 								categories={categories}
// 							/>
// 						)}
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

import React, { useState, useEffect } from "react";
import Lightsaber from "./Lightsaber";
import Menu from "./Menu";
import CarouselMenu from "./CarouselMenu";
import handleVideoClick from "../utils/helpers";
import handleNewsClick from "../utils/handleNewsClick";
import { useNavigate } from 'react-router-dom';

export default function HamburgerMenu({
  categories,
  setSelectedCategory,
  setShowCarousel,
}) {
  const [isActive, setIsActive] = useState(false);
  const [isDatabankVisible, setDatabankVisible] = useState(false);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) {
      setDatabankVisible(false);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      setDatabankVisible(false);
      setCarouselVisible(false); // This will close the Carousel menu when the hamburger menu is toggled
    }
  }, [isActive]);

  function handleClick() {
    setIsActive(!isActive);
  }

  function toggleCarousel() {
    setShowCarousel((prev) => !prev);
  }

  const handleNavigation = (path) => {
    navigate('/');
    setTimeout(() => {
      navigate(path);
    }, 0); // You can adjust the delay if needed
  };

  return (
    <div className="hamburger-menu" onClick={handleClick}>
      <Lightsaber
        isActive={isActive}
        className={
          isActive ? "hamburger-lightsaber-1 active" : "hamburger-lightsaber-1"
        }
      />
      <Lightsaber
        isActive={isActive}
        className={
          isActive ? "hamburger-lightsaber-2 active" : "hamburger-lightsaber-2"
        }
      />
      {isActive && (
        <div className="dropdown-menu">
          <div className="navbar-buttons"
            onClick={() => {
              handleNewsClick({ categories, setSelectedCategory });
              setShowCarousel(false);
              handleNavigation('/news');
            }}
          >
            NEWS
          </div>
          <div
            className="navbar-buttons"
            onMouseEnter={() => setCarouselVisible(true)}
            onMouseLeave={() => setCarouselVisible(false)}
          >
            GALLERY
            {isCarouselVisible && (
              <CarouselMenu
                setSelectedCategory={setSelectedCategory}
                setShowCarousel={setShowCarousel}
                handleNavigation={handleNavigation} // Pass handleNavigation
              />
            )}
          </div>
          <div
            className="navbar-buttons"
            onClick={() => {
              handleVideoClick({ categories, setSelectedCategory });
              setShowCarousel(false);
              handleNavigation('/videos'); // Assuming you have a route for videos
            }}
          >
            VIDEO
          </div>
          <div
            className="navbar-buttons"
            onMouseEnter={() => setDatabankVisible(true)}
            onMouseLeave={() => setDatabankVisible(false)}
          >
            DATABANK
            {isDatabankVisible && (
              <Menu
                setSelectedCategory={setSelectedCategory}
                setShowCarousel={setShowCarousel}
                categories={categories}
                handleNavigation={handleNavigation} // Pass handleNavigation
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}