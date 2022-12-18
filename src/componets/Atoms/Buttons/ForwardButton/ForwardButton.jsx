import "./ForwardButton.css";
import ForwardImage from "./../../../../image/forward.png";
import Image from "./../../Image/ImageAtom";

function ForwardButton({ forwardButtonOnClick }) {
    return (
        <div className="forward-button">
            <Image imageClass={"forward-button-image"} imageSrc={ForwardImage} imageAlt="Imageone" imageOnClick={forwardButtonOnClick} />
        </div>
    );
}

export default ForwardButton;