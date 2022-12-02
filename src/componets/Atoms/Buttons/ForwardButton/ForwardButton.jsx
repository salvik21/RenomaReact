import "./ForwardButton.css";
import ForwardImage from "./../../../../image/forward.png";
import Image from "./../../Image/ImageAtom";

function ForwardButton() {
    return (
        <div className="forward-button">
            <Image imageClass={"forward-button-image"} imageSrc={ForwardImage} imageAlt="Imageone" />
        </div>
    );
}

export default ForwardButton;