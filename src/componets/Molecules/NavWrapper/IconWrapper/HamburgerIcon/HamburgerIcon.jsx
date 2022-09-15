import "./HamburgerIcon.css";
import IconAtom from "../../../../Atoms/Icon/IconAtom";
import Hamburger from '../../../../../image/Hamburger.png';

function HamburgerIcon() {
    return(
        <div className="HamburgerIcon">
            <IconAtom  src={Hamburger} alt="Hamburger Icon" />
        </div>
    );
}

export default HamburgerIcon;