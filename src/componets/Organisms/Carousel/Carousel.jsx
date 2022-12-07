import "./Carousel.css";
import CarouselImages from "../../Molecules/CarouselImages/CarouselImages";
import ForwardButton from "../../Atoms/Buttons/ForwardButton/ForwardButton";
import BackButton from "../../Atoms/Buttons/BackButton/BackButton";
import CarouselTitles from "../../Molecules/CarouselTitles/CarouselTitles";

function Carusel() {
    return (
        <div className="carousel">
            <div className="carousel-wrapper">
                <CarouselImages />
                <CarouselTitles />
            </div>
            <div className="carousel-buttons">
                <BackButton />
                <ForwardButton />
            </div>
        </div>
    );
}

export default Carusel;