import { mainpage } from '../data';
import '../App.css';

function MainPageDisplay() {
    return (
        <div className="mainpage-container">
            <img src={mainpage[0].image} alt={mainpage[0].name} className="mainpage-image"></img>
            <div>
                <h1>{mainpage[0].name}</h1>
                <p className="mainpage-description">{mainpage[0].paragraph_1}</p>
                <p className="mainpage-description">{mainpage[0].paragraph_2}</p>
                <p className="mainpage-description">{mainpage[0].paragraph_3}</p>
                <p>{mainpage[0].paragraph_4}</p>
                <span className='mainpage-icon-ctn'>
                    <img src={mainpage[0].ahsoka_tano_logo} className='mainpage-icon'></img>
                    <p className="mainpage-description">{mainpage[0].paragraph_5}</p>
                </span>

            </div>
        </div>
    )
}

export default MainPageDisplay;