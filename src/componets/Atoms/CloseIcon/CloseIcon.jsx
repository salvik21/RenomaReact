import "./CloseIcon.css";
import CloseImage from '../../../image/CloseIcon.png';
import Image from "./../Image/ImageAtom";

function CloseIcon() {
    return (
        <>
            <Image imageClass={"close-icon"} src={CloseImage} alt="Close Image" />
        </>
    );
}

export default CloseIcon;