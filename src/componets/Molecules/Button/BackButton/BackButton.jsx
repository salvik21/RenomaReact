import "./BackButton.css";
import Image from "./../../../Atoms/Icon/IconAtom";
import ForwardImage from "./../../../../image/forward.png";


function BackButton() {
    return(
        <div className="button">
            <Image src= {ForwardImage} alt="Imageone"/>
        </div>
    );
}

export default BackButton;