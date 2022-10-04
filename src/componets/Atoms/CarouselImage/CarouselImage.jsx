import "./CarouselImage.css";
import Image from "./../Image/ImageAtom";
import CaruselImage from "./../../../image/carousel_img_1.png";


function CaruselImages() {
    return (
        <div className="carusel-image-wrapper">
            <Image imageClass={"carusel-image"} src={CaruselImage} alt="eggs and chicken" />
        </div>
    );
}

export default CaruselImages;