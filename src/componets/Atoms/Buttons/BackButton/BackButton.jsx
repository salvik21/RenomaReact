import "./BackButton.css";
import ForwardImage from "./../../../../image/forward.png";
import Image from "./../../Image/ImageAtom";

function BackButton() {
    return (
        <div className="back-button">
            <Image imageClass={"back-button-image"} imageSrc={ForwardImage} imageAlt="Imageone" />
        </div>
    );
}

export default BackButton;