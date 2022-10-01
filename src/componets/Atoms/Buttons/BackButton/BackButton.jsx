import "./BackButton.css";
import ForwardImage from "./../../../../image/forward.png";


function BackButton() {
    return (
        <div className="back-button">
            <img className="back-button-image" src={ForwardImage} alt="Imageone"></img>
        </div>
    );
}

export default BackButton;