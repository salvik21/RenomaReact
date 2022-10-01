import "./ForwardButton.css";
import ForwardImage from "./../../../../image/forward.png";


function ForwardButton() {
    return (
        <div className="forward-button">
            <img className="forward-button-image" src={ForwardImage} alt="Imageone" ></img>
        </div>
    );
}

export default ForwardButton;