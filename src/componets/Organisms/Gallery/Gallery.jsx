import "./Gallery.css";
import GalleryImages from "./../../Molecules/GalleryImages/GalleryImages";
import Title from "./../../Atoms/Titles/TitleAtom";
import Subtitle from "./../../Atoms/Subtile/SubtitleAtom";

function Gallery() {
    return(
        <div className="gallery">
            <div className="gallery-title">
                <Title title="gallery"/>
            </div>
            <div className="gallery-subtitle">
                <Subtitle  subTitle="more about us via photos" />
            </div>
            <GalleryImages />
        </div>
    );
}

export default Gallery;