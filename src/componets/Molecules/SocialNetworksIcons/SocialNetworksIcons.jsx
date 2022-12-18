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
                <a key={item.id+100} target={item.target} href={item.href}> <Image key={item.id} imageClass={"icons-image"} imageSrc={item.src} imageAlt={item.alt} />
                </a>
            )}
        </div>
    )
}

export default SocIcons;