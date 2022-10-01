import "./CloseIcon.css";
import CloseImage from '../../../image/CloseIcon.png';

function CloseIcon({ onClick }) {
    return (
        <div className="close-icon-wrapper">
            <img className="close-icon" src={CloseImage} alt="Close Image" onClick={onClick} />
        </div>
    );
}

export default CloseIcon;