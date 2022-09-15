import "./CaruselTitles.css";
import TitleCarusel from "../../../Molecules/CaruselWraper/CaruselTitlesWrapper/TitleCarusel/TitelCarusel";
import SubtitleCarusel from "../../../Molecules/CaruselWraper/CaruselTitlesWrapper/SubtitleCArusel/SubtitleCarusel";

function CaruselButton() {
    return(
        <div className="caruselTitles">
            <TitleCarusel />
            <SubtitleCarusel />
        </div>
    );
}

export default CaruselButton;