import "./NavPanel.css";
import Cart from "../../Atoms/CartIcon/CartIcon";
import HamburgerMenuIcons from "../../Atoms/HamburgerIcon/HamburgeMenurIcons";
import Divider from "../../Atoms/Divider/VerticalDivider";
import CountLabel from "../../Atoms/CountLabel/CountLabel";
import CartMenu from "./../../Molecules/CartMenu/CartMenu";
import { useState, useRef, useEffect } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import SubMenu from "../HamburgerSubmenu/HamburgerSubmenu";

function NavPanel() {
    const cartMenuRef = useRef(null);
    const cartIconRef = useRef(null);

    const hamburgerMenuRef = useRef(null);
    const hamburgerIconRef = useRef(null);

    const submenuRef = useRef(null);

    const [showCartMenu, setShowCartMenu] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

    function useOutsideClick(refIcon, refMenu, setShowMenu) {
        useEffect(() => {
            function handleClickOutside(event) {
                if ((refIcon.current && !refIcon.current.contains(event.target)) && (refMenu.current && !refMenu.current.contains(event.target))) {
                    setShowMenu(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [refMenu]);
    }

    useOutsideClick(cartIconRef, cartMenuRef, setShowCartMenu);
    useOutsideClick(hamburgerIconRef, hamburgerMenuRef, setShowHamburgerMenu)
    useOutsideClick(hamburgerIconRef, submenuRef, setShowSubmenu);

    return (
        <>
            <div className="navigation-bar">
                <Cart refCartIcon={cartIconRef} onClickCartIcon={() => setShowCartMenu(!showCartMenu)} />
                <CountLabel />
                <Divider />
                <HamburgerMenuIcons hamburgerMenuIcons={!(showHamburgerMenu || showSubmenu)} refHamburgerMenuIcons={hamburgerIconRef} onClickHamburgerMenuIcons={() => {
                   !showSubmenu && setShowHamburgerMenu(!showHamburgerMenu)
                    setShowSubmenu(false)
                }
                } />
            </div>
            <CartMenu refCartMenu={cartMenuRef} cartMenuClass={showCartMenu ? "" : "hidden"} />
            <HamburgerMenu refHamburgerMenu={hamburgerMenuRef} hamburgerMenuClass={showHamburgerMenu ? "" : "hidden"} onClickForwardButton={() => { setShowHamburgerMenu(!showHamburgerMenu); setShowSubmenu(!showSubmenu); }} />
            <SubMenu refSubmenu={submenuRef} HamburgerSubmenuClass={showSubmenu ? "" : "hidden"} onClickBackButton={() => { setShowHamburgerMenu(!showHamburgerMenu); setShowSubmenu(!showSubmenu) }} />
        </>
    );
}

export default NavPanel;