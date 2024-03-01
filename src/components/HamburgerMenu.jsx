import React, { useState, useEffect } from 'react';
import Lightsaber from './Lightsaber';
import Menu from './Menu';
import handleVideoClick from '../utils/helpers';

export default function HamburgerMenu({ categories, setSelectedCategory }) {

    const [isActive, setIsActive] = useState(false);
    const [isDatabankVisible, setDatabankVisible] = useState(false);

    useEffect(() => {
        if(isActive) {
            setDatabankVisible(false);
        }
    }, [isActive]);

    function handleClick() {
        setIsActive(!isActive);
    } 

    return (
        <div className="hamburger-menu" onClick={handleClick}>
            <Lightsaber isActive={isActive} className={isActive ? "hamburger-lightsaber-1 active" : "hamburger-lightsaber-1"} />
            <Lightsaber isActive={isActive} className={isActive ? "hamburger-lightsaber-2 active" : "hamburger-lightsaber-2"} />
            {isActive && (
                <div className="dropdown-menu">
                    <div className="navbar-buttons">NEWS</div>
                    <div className="navbar-buttons">FEATURES</div>
                    <div className="navbar-buttons" onClick={() => handleVideoClick({ categories, setSelectedCategory })}>VIDEO</div>
                    <div className="navbar-buttons" onMouseEnter={() => setDatabankVisible(true)} onMouseLeave={() => setDatabankVisible(false)}>
                        DATABANK
                        {isDatabankVisible && (
                            <Menu setSelectedCategory={setSelectedCategory} categories={categories}/>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}