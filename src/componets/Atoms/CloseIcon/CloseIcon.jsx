import "./CloseIcon.css";
import CloseImage from '../../../image/CloseIcon.png';

function CloseIcon({onClick}) {
    return(
        <div className="CloseIcon">
            <img src={CloseImage} alt="Close Image" onClick={onClick} />
        </div>
    );
}

export default CloseIcon;