import "./ForwardButton.css";
import Image from "../../../Atoms/Icon/IconAtom";
import ForwardImage from "./../../../../image/forward.png";


function ForwardButton() {
    return(
        <div className="forward-button">
            <Image src= {ForwardImage} alt="Imageone" />
        </div>
    );
}

export default ForwardButton;