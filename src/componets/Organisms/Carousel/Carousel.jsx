import "./Carousel.css";
import CarouselImages from "../../Molecules/CarouselImages/CarouselImages";
import ForwardButton from "../../Atoms/Buttons/ForwardButton/ForwardButton";
import BackButton from "../../Atoms/Buttons/BackButton/BackButton";
import CarouselTitles from "../../Molecules/CarouselTitles/CarouselTitles";
import { useState } from "react";

function Carusel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % 3);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + 3) % 3);
    };

    return (
        <div className="carousel">
            <div className="carousel-wrapper" >
                <CarouselImages index={currentIndex} />
                <CarouselTitles index={currentIndex} />
            </div>
            <div className="carousel-buttons">
                <BackButton backButtonOnClick={prevImage} />
                <ForwardButton forwardButtonOnClick={nextImage} />
            </div>
        </div>
    );
}

export default Carusel;