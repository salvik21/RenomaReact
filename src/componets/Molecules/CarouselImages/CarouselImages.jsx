import "./CarouselImages.css";
import Image from "./../../Atoms/Image/ImageAtom";
import CarouselImageOne from "./../../../image/carousel_img_1.png";
import CarouselImageTwo from "./../../../image/carousel_img_2.png";
import CarouselImageThree from "./../../../image/carousel_img_3.png";


function CarouselImages() {
    const ImageElement = [
        { id: 24, src: CarouselImageOne, alt: "eggs and chicken" },
        { id: 25, src: CarouselImageTwo, alt: "something more" },
        { id: 26, src: CarouselImageThree, alt: "something more" },
    ]

    return (
        <div className="carousel__image-wrapper" >
            {ImageElement.map((item) =>
                <Image key={item.id} imageClass={"carousel__image"} imageSrc={item.src} imageAlt={item.alt} />
            )
            }
        </div>
    )
}

export default CarouselImages;