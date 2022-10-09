import "./SocialNetworksIcons.css";
import TwiterIcon from "./../../../image/twiter.png";
import FacebookIcon from "./../../../image/facebook.png";
import GoogleIcon from "./../../../image/google.png";
import Image from "./../../Atoms/Image/ImageAtom";

function SocIcons() {
    const ImgElement = [
        { id: 7, target: "__blank", href: "https://facebook.com", src: FacebookIcon, alt: 'FacebookIcon' },
        { id: 8, target: "__blank", href: "https://Twiter.com ", src: TwiterIcon, alt: "TwiterIcon" },
        { id: 9, target: "__blank", href: "https://Google.com ", src: GoogleIcon, alt: "GoogleIcon" },
    ]
    return (
        <div className="social-networks-icons">
            {ImgElement.map((item) =>
                <a target={item.target} href={item.href}> <Image imageClass={"icons-image"} src={item.src} alt={item.alt} />
                </a>
            )}
        </div>
    )
}

export default SocIcons;