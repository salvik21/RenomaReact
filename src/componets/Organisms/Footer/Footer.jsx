import "./Footer.css";
import Title from "../../Atoms/Titles/TitleAtom";
import Logo from "../../Atoms/Logo/Logo";
import SocialNetworksIcons from "../../Molecules/SocialNetworksIcons/SocialNetworksIcons";
import Paragraph from "../../Atoms/Paragraph/ParagraphAtom";

function Footer() {
    return (
        <div className="footer">
            <div>
                <Title titleClass={"footer-title"} title="Follow US:" />
            </div>
            <SocialNetworksIcons />
            <Logo logoClass={"footer-logo"} />
            <div>
                <Paragraph paragraphClass={"footer-copyright"} paragraph="Copyright 2015 Renome by estetiq" />
            </div>
        </div>
    )
}

export default Footer;