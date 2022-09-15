import "./FooterIcon.css";
import TwiterIcon from "./../../../../image/twiter.png";
import FacebookIcon from "./../../../../image/facebook.png";
import GoogleIcon from "./../../../../image/google.png";
import Image from "../../../Atoms/Icon/IconAtom";

function FooterIcons() {
    const ImgElement=[
        {target: "__blank", href: "https://facebook.com", src: FacebookIcon, alt: '1'},
        {target: "__blank", href: "https://Twiter.com ", src: TwiterIcon, alt: "2"},
        {target: "__blank", href: "https://Google.com ", src: GoogleIcon, alt: "3"},
    ]
    return(
        <div className="footerIcons">
        {ImgElement.map((item) => 
        <a target={item.target} href={item.href}> <Image src={item.src} alt={item.alt} />
        </a> 
        )}
        </div>
    )
}

export default FooterIcons;