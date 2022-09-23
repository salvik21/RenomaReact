import "./AboutImages.css";
import Image from "../../Atoms/Image/ImageAtom";
import AboutFirstImage from "./../../../image/about_img_1.png";
import AboutlSecondImage from "./../../../image/about_img_2.png";


function AboutImages() {
    return(
        <div className="aboutImages">
        <div className="aboutFirstImage">
            <Image src={AboutFirstImage} alt="ImageOne"/>   
        </div>
        <div className="aboutSecondImage">
            <Image src= {AboutlSecondImage} alt="ImageTwo"/>    
        </div>
        </div>
    );
}

export default AboutImages;