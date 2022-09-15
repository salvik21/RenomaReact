import "./Footer.css";
import FooterTitle from "../../Molecules/FooterWrapper/FooterTitlesWrapper/FooterTitle/FooterTitle";
import FooterCoryright from "./../../Molecules/FooterWrapper/FooterTitlesWrapper/FooterCopyright/FooterCopyright";
import Logo from "./../../Molecules/TitleLogo/TitleLogo";
import SocIcons from "./../../Molecules/FooterWrapper/FooterIconWrapper/FooterIcon";

function Footer() {
    return(
        <div className="footer">
            < FooterTitle />
            <SocIcons />
            <Logo />
            <FooterCoryright />
        </div>
    )   
}

export default Footer;