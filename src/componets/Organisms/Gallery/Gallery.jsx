import "./Gallery.css";
import GalleryImages from "./../../Molecules/GalleryImages/GalleryImages";
import Title from "./../../Atoms/Titles/TitleAtom";
import Subtitle from "./../../Atoms/Subtile/SubtitleAtom";

function Gallery() {
    return (
        <div className="gallery-wrapper">
            <div>
                <Title titleClass={"gallery-title"} title="gallery" />
            </div>
            <div>
                <Subtitle subtitleClass={"gallery-subtitle"} subTitle="more about us via photos" />
            </div>
            <GalleryImages />
        </div>
    );
}

export default Gallery;