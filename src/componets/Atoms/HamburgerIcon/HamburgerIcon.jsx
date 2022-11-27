import "./HamburgerIcon.css";
import HamburgerImage from '../../../image/Hamburger.png';
import Image from "./../Image/ImageAtom";

function HamburgerIcon({ refHamburgerIcon, onClickHamburgerIcon }) {
    return (
        <>
            <Image refImage={refHamburgerIcon} imageClass={"hamburger-icon"} src={HamburgerImage} alt="Hamburger Image" onClick={onClickHamburgerIcon} />
        </>
    );
}

export default HamburgerIcon;