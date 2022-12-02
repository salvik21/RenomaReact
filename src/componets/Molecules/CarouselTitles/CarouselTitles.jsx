import "./CarouselTitles.css";
import Title from "../../Atoms/Titles/TitleAtom";
import Subtitle from "./../../Atoms/Subtile/SubtitleAtom";

function CarouselTitles() {
    const TitleElement = [
        { id: 25, title: "made with love", subtitle: "for you" },
        { id: 26, title: "Made with hate", subtitle: "for myself" },
        { id: 27, title: "Oranges and laptops", subtitle: "for everyone" },
    ]

    return (
        <div className="carousel-titls-wrapper">
            {TitleElement.map((item) =>
                <div key={item.id + 100} className="carousel-titles-line">
                    <Title key={item.id + 200} titleClass={"carousel-title"} title={item.title} />
                    <Subtitle key={item.id} subtitleClass={"carousel-subtitle"} subTitle={item.subtitle} />
                </div>
            )
            }
        </div>
    );
}

export default CarouselTitles;