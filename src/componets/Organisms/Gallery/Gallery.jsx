import "./Gallery.css";
import GalleryTitle from "./../../Molecules/GalleryWrapper/GalleryTitlesWrapper/GalleryTitle/GalleryTitle";
import GalerySubtitle from "../../Molecules/GalleryWrapper/GalleryTitlesWrapper/GallerySubtitle/GallerySubtitle";
import GalleryImages from "../../Molecules/GalleryWrapper/GalleryImagesWrapper/GalleryImages";

function Gallery() {
    return(
        <div className="gallery">
            <GalleryTitle />
            <GalerySubtitle />
            <GalleryImages />
        </div>
    );
}

export default Gallery;