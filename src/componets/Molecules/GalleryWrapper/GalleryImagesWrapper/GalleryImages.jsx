import "./GalleryImages.css";
import ImageAtom from "../../../Atoms/Image/ImageAtom";
import Img1 from "./../../../../image/gallery_img_1.png";
import Img2 from "./../../../../image/gallery_img_2.png";
import Img3 from "./../../../../image/gallery_img_3.png";
import Img4 from "./../../../../image/gallery_img_4.png";
import Img5 from "./../../../../image/gallery_img_5.png";
import Img6 from "./../../../../image/gallery_img_6.png";

function GalleryImages() {
    const ImgElement=[
        {src: Img1, alt: '1'},
        {src: Img2, alt: "2"},
        {src: Img3, alt: "3"},
        {src: Img4, alt: "4"},
        {src: Img5, alt: "5"},
        {src: Img6, alt: "6"}
    ]
    return(
        <ul className="galleryImgWrapper">
        {ImgElement.map((item) => <li className="galleryImg">
        <ImageAtom src={item.src} alt={item.alt} />
        </li>
        )
        }
        </ul>
    );
}

export default GalleryImages;