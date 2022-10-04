import "./CloseIcon.css";
import CloseImage from '../../../image/CloseIcon.png';
import Image from "./../Image/ImageAtom";

function CloseIcon() {
    return (
        <div>
            <Image imageClass={"close-icon"} src={CloseImage} alt="Close Image" />
        </div>
    );
}

export default CloseIcon;