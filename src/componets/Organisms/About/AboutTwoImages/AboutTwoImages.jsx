import "./AboutTwoImages.css";
import ImageOne from "./../../../Molecules/AboutWrapper/AboutImagesWrapper/AboutImageOne/AboutImageOne"
import ImageTwo from "../../../Molecules/AboutWrapper/AboutImagesWrapper/AboutImageTwo/AboutImageTwo"

function AboutTwoImg() {
    return(
        <div className="aboutTwoImg">
            <ImageOne />
            <ImageTwo />
        </div>
    );
}

export default AboutTwoImg;