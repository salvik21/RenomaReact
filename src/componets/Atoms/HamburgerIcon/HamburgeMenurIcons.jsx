import "./HamburgerMenuIcons.css";
import HamburgerImage from '../../../image/Hamburger.png';
import CloseImage from '../../../image/CloseIcon.png';
import Image from "../Image/ImageAtom";

function HamburgerIcon({ refHamburgerMenuIcons, onClickHamburgerMenuIcons, hamburgerMenuIcons }) {
    return (
        <>
            <Image refImage={refHamburgerMenuIcons} imageClass={"hamburger-close-icons"} src={hamburgerMenuIcons ? HamburgerImage : CloseImage} alt="Hamburger menu icon " onClick={onClickHamburgerMenuIcons} />
        </>
    );
}

export default HamburgerIcon;