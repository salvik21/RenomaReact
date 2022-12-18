import "./BackButton.css";
import ForwardImage from "./../../../../image/forward.png";
import Image from "./../../Image/ImageAtom";

function BackButton({ backButtonOnClick }) {
    return (
        <div className="back-button">
            <Image imageClass={"back-button-image"} imageSrc={ForwardImage} imageAlt="Imageone" imageOnClick={backButtonOnClick} />
        </div>
    );
}

export default BackButton;