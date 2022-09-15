import "./AboutImageOne.css";
import Image from "../../../../Atoms/Image/ImageAtom";
import AboutImageOne from "./../../../../../image/about_img_1.png";


function AboutImgOne() {
    return(
        <div className="aboutImageOne">
            <Image src={AboutImageOne} alt="Imageone"/>   
        </div>
    );
}

export default AboutImgOne;