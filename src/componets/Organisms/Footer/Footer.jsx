import "./Footer.css";
import Title from "../../Atoms/Titles/TitleAtom";
import Logo from "../../Atoms/LogoAtom/LogoAtom";
import SocialNetworksIcons from "../../Molecules/SocialNetworksIcons/SocialNetworksIcons";
import Paragraph from "../../Atoms/Paragraph/ParagraphAtom";

function Footer() {
    return(
        <div className="footer">
            <div className="footer-title">
                <Title  title="Follow US:" />
            </div>
            <SocialNetworksIcons />
            <Logo />
            <div className="footer-copyright">
                <Paragraph  title="Copyright 2015 Renome by estetiq" />
            </div>
        </div>
    )   
}

export default Footer;