import "./CarouselTitles.css";
import Title from "../../Atoms/Titles/TitleAtom";
import Subtitle from "./../../Atoms/Subtile/SubtitleAtom";

function CarouselTitles() {
    return(
        <div className="titlsCarousel">
            <div className="titleCarusel">
                <Title  title="made with love" />
            </div>
            <div className="subtitleCarousel">
            <   Subtitle  subTitle="for you" />
            </div>
        </div>

    );
}

export default CarouselTitles;