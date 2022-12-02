import "./HamburgerSubmenu.css";
import Link from "./../../Atoms/Link/LinkAtom";
import Label from "./../../Atoms/Label/LabelAtom";
import BackBlackButton from "./../../../image/forward_black.png";
import Image from "./../../Atoms/Image/ImageAtom";

function HamburgerSubenu({ onClickBackButton, HamburgerSubmenuClass, refSubmenu, refBackButton }) {
    const LinkElement = [
        { id: 21, href: "#", text: "One page" },
        { id: 22, href: "#", text: "Portfolio" },
        { id: 23, href: "#", text: "Shortcodes" },
    ]

    return (
        <div ref={refSubmenu} className={`hamburger-submenu-wrapper ${HamburgerSubmenuClass}`} >
            <div className="hamburger-submenu-back-button-wrapper">
                <div className="hamburger-submenu-image-wrapper">
                    <Image imageClass={"back-black-image"} src={BackBlackButton} alt={"Back button"} onClick={onClickBackButton} />
                </div>
                <Label labelClass={"submenu-back-button-title"} text={"BACK"} />
            </div>
            {LinkElement.map((item) =>
                <div key={item.id} className="hamburger-menu-buttons-wrapper">
                    <Link key={item.id} linkClass={"submenu-button"} href={item.href} text={item.text} />
                </div>
            )
            }
        </div>
    )
}

export default HamburgerSubenu;