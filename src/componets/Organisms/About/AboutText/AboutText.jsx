import "./AboutText.css"
import Title from "./../../../Molecules/AboutWrapper/AboutTextWrapper/AboutTitle/AboutTitle";
import Subtitle from "./../../../Molecules/AboutWrapper/AboutTextWrapper/AboutSubtitle/AboutSubtitle";
import Text from "./../../../Molecules/AboutWrapper/AboutTextWrapper/AboutText/AboutText";

function About() {
    return(
        <div className="aboutTexts">
            <Title />
            <Subtitle />
            <Text />
       </div>
    );   
}

export default About;