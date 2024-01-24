import { useState } from 'react';
import star_wars_logo from '../images/miscellaneous/star-wars-logo.png';
import ahsoka_logo from '../images/miscellaneous/ahsoka-logo.png';
import Menu from './Menu';

function Navbar ({ categories, setSelectedCategory }) {
    const [isDatabankVisible, setDatabankVisible] = useState(false);

    return (
        <nav>
            <div className='flex-col'>
            <img src={star_wars_logo} className='logo' /><img src={ahsoka_logo} className='logo ahsoka'  />
            <div className='flex ctn-navbar'>
                <div className="navbar-buttons">NEWS</div>
                <div className="navbar-buttons">FEATURES</div>
                <div className="navbar-buttons">VIDEO</div>
                    
                    <div className="navbar-buttons" onMouseEnter={() => setDatabankVisible(true)} onMouseLeave={() => setDatabankVisible(false)}>
                        DATABANK
                        {isDatabankVisible && (
                            <div className="dropdown-menu">
                                <Menu setSelectedCategory={setSelectedCategory} categories={categories}/>
                            </div>
                        )}
                    </div>

            </div>
            </div>
        </nav>
    )
}

export default Navbar;