import "./CarouselImage.css";
import Image from "../../Atoms/Image/ImageAtom";
import CaruselImage from "./../../../image/carousel_img_1.png";


function CaruselImages() {
    return(
        <div className="carusel-image">
            <Image src= {CaruselImage} alt="Imageone"/>   
        </div>
    );
}

export default CaruselImages;