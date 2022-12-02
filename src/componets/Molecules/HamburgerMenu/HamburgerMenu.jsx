import "./HamburgerMenu.css";
import Link from "./../../Atoms/Link/LinkAtom";
import Label from "./../../Atoms/Label/LabelAtom";
import ForwardBlackButton from "./../../../image/forward_black.png";
import Image from "./../../Atoms/Image/ImageAtom";
import Input from "../../Atoms/Input/Input";
import SerchImage from "./../../../image/search_icon.png"


function HamburgerMenu({ refHamburgerMenu, hamburgerMenuClass, onClickForwardButton }) {
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
        <div ref={refHamburgerMenu} className={`hamburger-menu-wrapper ${hamburgerMenuClass}`} >
            <div className="hamburger-menu-search-bar-wrapper">
                <div className="hamburger-menu-search-bar-input-field">
                    <Input className={"input-field"} type={"text"} name={"search"} placeholderText={"Search"} />
                </div>
                <div className="hamburger-menu-search-bar-image-wrapper">
                    <Image imageClass={"search-button-image"} imageSrc={SerchImage} imageAlt="Search icon image" />
                </div>
            </div>
            {LinkElement.map((item) =>
                <>
                    {item.isSubMenu ?
                        <div key={item.id + 100} className="hamburger-submenu-button">
                            <Label key={item.id + 200} labelClass={"hamburger-menu-subbutton"} text={item.text} />
                            <div key={item.id + 300} className="hamburger-submenu-button-image">
                                <Image key={item.id + 400} imageClass={"forward-button-image"} imageSrc={ForwardBlackButton} imageAlt="Forward Image Black" imageOnClick={onClickForwardButton} />
                            </div>
                        </div>
                        :
                        <div key={item.id + 500} className="hamburger-menu-buttons">
                            <Link key={item.id + 600} linkClass={"hamburger-menu-button"} href={item.href} text={item.text} />
                        </div>
                    }
                </>
            )
            }
        </div>
    )
}

export default HamburgerMenu;