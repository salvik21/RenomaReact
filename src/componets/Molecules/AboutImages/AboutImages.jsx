import "./AboutImages.css";
import Image from "../../Atoms/Image/ImageAtom";
import AboutFirstImage from "./../../../image/about_img_1.png";
import AboutlSecondImage from "./../../../image/about_img_2.png";


function AboutImages() {
    return (
        <div className="about-images">
            <div className="about-first-image">
                <Image src={AboutFirstImage} alt="ImageOne" />
            </div>
            <div className="about-second-image">
                <Image src={AboutlSecondImage} alt="ImageTwo" />
            </div>
        </div>
    );
}

export default AboutImages;