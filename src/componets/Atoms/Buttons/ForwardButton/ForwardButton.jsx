import "./ForwardButton.css";
import ForwardImage from "./../../../../image/forward.png";
import Image from "./../../Image/ImageAtom";

function ForwardButton() {
    return (
        <div className="forward-button">
            <Image imageClass={"forward-button-image"} src={ForwardImage} alt="Imageone" />
        </div>
    );
}

export default ForwardButton;