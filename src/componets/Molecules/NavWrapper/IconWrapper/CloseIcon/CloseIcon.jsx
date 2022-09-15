import "./CloseIcon.css";
import IconAtom from "../../../../Atoms/Icon/IconAtom";
import Close from '../../../../../image/CloseIcon.png';

function CloseIcon() {
    return(
        <div className="CloseIcon">
            <IconAtom  src={Close} alt="Close Icon" />
        </div>
    );
}

export default CloseIcon;