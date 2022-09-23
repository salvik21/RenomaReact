import "./AboutContext.css";
import Paragraph from "./../../Atoms/Paragraph/ParagraphAtom";
import Subtitle from "./../../Atoms/Subtile/SubtitleAtom";
import Title from "./../../Atoms/Titles/TitleAtom";

function AboutContext () {
    return(
        <div className="aboutContext">
            <div className="aboutTitle">
                <Title  title="about" />
            </div>
            <div className="aboutSubtitle">
                <Subtitle  subTitle="we create delicious memorie" />
            </div>
            <div className="aboutParagraph">
                <Paragraph title="Renome it is renowned restaurant delights the senses with elegant ambiance, gracious service and delectable menus in the heart of Manhattan’s. The distinctive setting boasts contemporary furnishings and finishes atop the restaurant’s grand modern architecture. Renome offers the room for private dining where guests enjoy creative foods and sumptuous late night desserts. Is one of the few Manhattan restaurants to have a coveted 3-star Michelin rating." />
            </div>
        </div>
    );
}

export default AboutContext;