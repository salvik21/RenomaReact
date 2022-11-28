import "./CloseIcon.css";
import CloseImage from '../../../image/CloseIcon.png';
import Image from "./../Image/ImageAtom";

function CloseIcon({refCloseIcon, onClick}) {
    return (
        <>
            <Image refImage={refCloseIcon} imageClass={"close-icon"} src={CloseImage} alt="Close Image" onClick={onClick} />
        </>
    );
}

export default CloseIcon;