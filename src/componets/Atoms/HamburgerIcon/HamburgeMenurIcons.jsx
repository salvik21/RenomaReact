import "./HamburgerMenuIcons.css";
import HamburgerImage from '../../../image/Hamburger.png';
import CloseImage from '../../../image/CloseIcon.png';
import Image from "../Image/ImageAtom";

function HamburgerIcon({ refHamburgerMenuIcons, onClickHamburgerMenuIcons, hamburgerMenuIcons }) {
    return (
        <>
            <Image refImage={refHamburgerMenuIcons} imageClass={"hamburger-close-icons"} imageSrc={hamburgerMenuIcons ? HamburgerImage : CloseImage} imageAlt="Hamburger menu icon " imageOnClick={onClickHamburgerMenuIcons} />
        </>
    );
}

export default HamburgerIcon;