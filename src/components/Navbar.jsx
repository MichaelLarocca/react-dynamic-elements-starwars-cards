import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import star_wars_logo from "../images/miscellaneous/star-wars-logo.png";
import ahsoka_logo from "../images/miscellaneous/ahsoka-logo.png";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import CarouselMenu from "./CarouselMenu";
import handleVideoClick from "../utils/helpers";
import handleNewsClick from "../utils/handleNewsClick";
import { handleNavigation } from '../utils/navigationHelpers';

function Navbar({ categories, setSelectedCategory, setShowCarousel, carousel }) {
  const [isDatabankVisible, setDatabankVisible] = useState(false);
  const [isGalleryVisible, setGalleryVisible] = useState(false);
  const navigate = useNavigate();
  let path;

  return (
    <nav>
      <HamburgerMenu
        className="hamburger-menu"
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setShowCarousel={setShowCarousel}
      />
      <div className="flex-col">
        <img
          src={star_wars_logo}
          className="logo"
          onClick={() => {
            setSelectedCategory(categories.mainpage);
            setShowCarousel(false);
            const path = '/'; 
            handleNavigation(navigate, path, setTimeout);
          }}
        />
        <img
          src={ahsoka_logo}
          className="logo ahsoka"
          onClick={() => {
            setSelectedCategory(categories.mainpage);
            setShowCarousel(false);
            path = '/'; 
            handleNavigation(navigate, path, setTimeout);
          }}
        />
        <div className="flex ctn-navbar">
          <div
            className="navbar-buttons desktop-menu"
            onClick={() => {
              handleNewsClick({ categories, setSelectedCategory });
              setShowCarousel(false);
              path = '/news';
              handleNavigation(navigate, path, setTimeout);
            }}
          >
            NEWS
          </div>
          <div
            className="navbar-buttons desktop-menu"
            onMouseEnter={() => setGalleryVisible(true)}
            onMouseLeave={() => setGalleryVisible(false)}
          >
            GALLERY
            {isGalleryVisible && (
              <div className="dropdown-menu dropdown-menu-carousel">
                <CarouselMenu
                  setSelectedCategory={setSelectedCategory}
                  setShowCarousel={setShowCarousel}
                  carousel={carousel}
                />
              </div>
            )}
          </div>
          <div
            className="navbar-buttons desktop-menu"
            onClick={() => {
              handleVideoClick({ categories, setSelectedCategory });
              setShowCarousel(false);
              path = '/';
              handleNavigation(navigate, path, setTimeout);
            }}
          >
            VIDEO
          </div>
          <div
            className="navbar-buttons desktop-menu"
            onMouseEnter={() => setDatabankVisible(true)}
            onMouseLeave={() => setDatabankVisible(false)}
          >
            DATABANK
            {isDatabankVisible && (
              <div className="dropdown-menu">
                <Menu
                  setSelectedCategory={setSelectedCategory}
                  setShowCarousel={setShowCarousel}
                  categories={categories}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hamburger-menu"></div>
    </nav>
  );
}

export default Navbar;
