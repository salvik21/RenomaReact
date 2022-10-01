import "./CarouselTitles.css";
import Title from "../../Atoms/Titles/TitleAtom";
import Subtitle from "./../../Atoms/Subtile/SubtitleAtom";

function CarouselTitles() {
    return (
        <div className="titls-carousel-wrapper">
            <div>
                <Title titleClass={"title-carusel"} title="made with love" />
            </div>
            <div>
                <Subtitle subtitleClass={"subtitle-carousel"} subTitle="for you" />
            </div>
        </div>
    );
}

export default CarouselTitles;