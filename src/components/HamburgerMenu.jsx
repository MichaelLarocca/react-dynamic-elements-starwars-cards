import React from 'react';
import Lightsaber from './Lightsaber';

export default function HamburgerMenu() {
    return (
        <div className="hamburger-menu">
            <Lightsaber isActive={false} />
            <Lightsaber isActive={false} />
            <Lightsaber isActive={false} />
        </div>
    );
}