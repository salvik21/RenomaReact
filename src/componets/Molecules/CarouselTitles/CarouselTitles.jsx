import "./CarouselTitles.css";
import Title from "../../Atoms/Titles/TitleAtom";
import Subtitle from "./../../Atoms/Subtile/SubtitleAtom";

function CarouselTitles() {
    return(
        <div className="titls-carousel">
            <div className="title-carusel">
                <Title  title="made with love" />
            </div>
            <div className="subtitle-carousel">
            <   Subtitle  subTitle="for you" />
            </div>
        </div>
    );
}

export default CarouselTitles;