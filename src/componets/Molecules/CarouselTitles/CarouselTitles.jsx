import "./CarouselTitles.css";
import Title from "../../Atoms/Titles/TitleAtom";
import Subtitle from "./../../Atoms/Subtile/SubtitleAtom";

function CarouselTitles({ index }) {
    const TitleElement = [
        { id: 40, title: "made with love", subtitle: "for you" },
        { id: 41, title: "Made with hate", subtitle: "for myself" },
        { id: 42, title: "Oranges and laptops", subtitle: "for everyone" },
    ]

    return (
        <div className="carousel-titls-wrapper">
            {TitleElement.map((item) =>
            <div key={item.id} className={TitleElement[index].id === item.id ? 'dissolution' : 'slide dissolution'} >
                <div key={item.id + 100} className="carousel-titles-line">
                    <Title key={item.id + 200} titleClass={"carousel-title"} title={item.title} />
                    <Subtitle key={item.id + 300} subtitleClass={"carousel-subtitle"} subTitle={item.subtitle} />
                </div>
                </div>
            )
            }
        </div>
    );
}

export default CarouselTitles;