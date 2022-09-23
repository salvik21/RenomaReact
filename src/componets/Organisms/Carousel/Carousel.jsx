import "./Carousel.css";
import CarouselImages from "../../Molecules/CarouselImage/CarouselImage";
import ForwardButton from "../../Molecules/Button/ForwardButton/ForwardButton";
import BackButton from "../../Molecules/Button/BackButton/BackButton";
import CarouselTitles from "../../Molecules/CarouselTitles/CarouselTitles"

function Carusel() {
    return(
        <div className="carousel">
            
            <CarouselImages />
            <CarouselTitles />
            <div className="carouselButton">
                <BackButton />
                <ForwardButton />
            </div>
        </div>  
    );
}

export default Carusel;