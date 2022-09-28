import "./HamburgerIcon.css";
import HamburgerImage from '../../../image/Hamburger.png';

function HamburgerIcon({onClick}) {
    return(
        <div className="hamburger-icon">
            <img src={HamburgerImage} alt="Hamburger Image" onClick={onClick} />
        </div>
    );
}

export default HamburgerIcon;