import "./HamburgerIcon.css";
import HamburgerImage from '../../../image/Hamburger.png';

function HamburgerIcon({ onClick, }) {
    return (
        <div>
            <img className="hamburger-icon" src={HamburgerImage} alt="Hamburger Image" onClick={onClick} />
        </div>
    );
}

export default HamburgerIcon;