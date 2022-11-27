import "./HamburgerIcon.css";
import HamburgerImage from '../../../image/Hamburger.png';
import CloseImage from '../../../image/CloseIcon.png';
import Image from "./../Image/ImageAtom";

function HamburgerIcon({ refHamburgerIcon, onClickHamburgerIcon, hamburgerIcon }) {
    return (
        <>
            <Image refImage={refHamburgerIcon} imageClass={"hamburger-icon"} src={hamburgerIcon ? HamburgerImage : CloseImage} alt="Hamburger menu icon " onClick={onClickHamburgerIcon} />
        </>
    );
}

export default HamburgerIcon;