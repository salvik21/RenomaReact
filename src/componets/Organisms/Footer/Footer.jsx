import "./Footer.css";
import Title from "../../Atoms/Titles/TitleAtom";
import Logo from "../../Atoms/LogoAtom/LogoAtom";
import SocIcons from "../../Molecules/SocIcons/Socicons";
import Paragraph from "../../Atoms/Paragraph/ParagraphAtom";

function Footer() {
    return(
        <div className="footer">
            <div className="footerTitle">
                <Title  title="Follow US:" />
            </div>
            <SocIcons />
            <Logo />
            <div className="footerCopyright">
                <Paragraph  title="Copyright 2015 Renome by estetiq" />
            </div>
        </div>
    )   
}

export default Footer;