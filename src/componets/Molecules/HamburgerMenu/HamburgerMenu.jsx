import "./HamburgerMenu.css";
import Link from "./../../Atoms/Link/LinkAtom";
import Label from "./../../Atoms/Label/LabelAtom";
import ForwardBlackButton from "./../../../image/forward_black.png";
import Image from "./../../Atoms/Image/ImageAtom";
import Input from "../../Atoms/Input/Input";
import SerchImage from "./../../../image/search_icon.png"


function HamburgerMenu() {
    const LinkElement = [
        { id: 13, href: "#", text: "HOME", isSubMenu: false },
        { id: 14, href: "#", text: "ABOUT", isSubMenu: false },
        { id: 15, href: "#", text: "MENU", isSubMenu: false },
        { id: 16, href: "#", text: "RESERVATIONS", isSubMenu: false },
        { id: 17, href: "#", text: "BLOG", isSubMenu: false },
        { id: 18, href: "#", text: "FEATURES", isSubMenu: true },
        { id: 19, href: "#", text: "SHOP", isSubMenu: false },
        { id: 20, href: "#", text: "CONTACT", isSubMenu: false },
    ]

    return (
        <div className={`hamburger-menu-wrapper`} >
            <div className="hamburger-menu-search-bar-wrapper">
                <div className="hamburger-menu-search-bar-input-field">
                    <Input className={"input-field"} type={"text"} name={"search"} placeholderText={"Search"} />
                </div>
                <div className="hamburger-menu-search-bar-image-wrapper">
                    <Image imageClass={"search-button-image"} src={SerchImage} alt="Search icon image" />
                </div>
            </div>
            {LinkElement.map((item) =>
                <>
                    {item.isSubMenu ?
                        <div className="hamburger-submenu-button">
                            <Label labelClass={"hamburger-menu-subbutton"} text={item.text} />
                            <div className="hamburger-submenu-button-image">
                                <Image imageClass={"forward-button-image"} src={ForwardBlackButton} alt="Forward Image Black" />
                            </div>
                        </div>
                        :
                        <div className="hamburger-menu-buttons">
                            <Link linkClass={"hamburger-menu-button"} href={item.href} text={item.text} />
                        </div>
                    }
                </>
            )
            }
        </div>
    )
}

export default HamburgerMenu;