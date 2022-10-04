import "./HamburgerIcon.css";
import HamburgerImage from '../../../image/Hamburger.png';
import Image from "./../Image/ImageAtom";

function HamburgerIcon() {
    return (
        <div>
            <Image imageClass={"hamburger-icon"} src={HamburgerImage} alt="Hamburger Image" />
        </div>
    );
}

export default HamburgerIcon;