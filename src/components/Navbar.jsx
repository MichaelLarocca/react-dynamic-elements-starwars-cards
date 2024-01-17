import star_wars_logo from '../images/miscellaneous/star-wars-logo.png';
import ahsoka_logo from '../images/miscellaneous/ahsoka-logo.png';

function Navbar () {
    return (
        <nav>
            <div className='flex-col'>
            <img src={star_wars_logo} className='logo' /><img src={ahsoka_logo} className='logo ahsoka'  />
            </div>
        </nav>
    )
}

export default Navbar;