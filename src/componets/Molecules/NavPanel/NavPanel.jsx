import "./NavPanel.css";
import Cart from "../../Atoms/CartIcon/CartIcon";
import Hamburger from "../../Atoms/HamburgerIcon/HamburgerIcon";
import Close from "../../Atoms/CloseIcon/CloseIcon";
import Divider from "../../Atoms/Divider/VerticalDivider";
import CountLabel from "../../Atoms/CountLabel/CountLabel";
import CartMenu from "./../../Molecules/CartMenu/CartMenu";
import { useState, useRef, useEffect } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function NavPanel() {
    const cartMenuRef = useRef(null);
    const cartIconRef = useRef(null);

    const hamburgerMenuRef = useRef(null);
    const hamburgerIconRef = useRef(null);

    const [showCartMenu, setShowCartMenu] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

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
    useOutsideClick(hamburgerIconRef, hamburgerMenuRef, setShowHamburgerMenu);

    return (
        <>
            <div className="navigation-bar">
                <Cart refCartIcon={cartIconRef} onClickCartIcon={() => setShowCartMenu(!showCartMenu)} />
                <CountLabel />
                <Hamburger refHamburgerIcon={hamburgerIconRef} onClickHamburgerIcon={() => setShowHamburgerMenu(!showHamburgerMenu)} />
            </div>
            <CartMenu refCartMenu={cartMenuRef} cartMenuClass={showCartMenu ? "" : "hidden"} />
            <HamburgerMenu refHamburgerMenu={hamburgerMenuRef} hamburgerMenuClass={showHamburgerMenu ? "" : "hidden"} />
        </>
    );
}

export default NavPanel;