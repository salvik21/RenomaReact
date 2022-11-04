import "./NavPanel.css";
import Cart from "../../Atoms/CartIcon/CartIcon";
import Hamburger from "../../Atoms/HamburgerIcon/HamburgerIcon";
import Close from "../../Atoms/CloseIcon/CloseIcon";
import Divider from "../../Atoms/Divider/VerticalDivider";
import CountLabel from "../../Atoms/CountLabel/CountLabel";
import CartMenu from "./../../Molecules/CartMenu/CartMenu";
import { useState, useRef, useEffect } from "react";


function NavPanel() {
    const menuRef = useRef(null);
    const cartIconRef = useRef(null);

    const [showCartMenu, setShowCartMenu] = useState(false);
    function hideMenu() { setShowCartMenu(false) }
    function useOutsideClick(refIcon, refMenu) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (refIcon.current && !refIcon.current.contains(event.target)) {
                    if (refMenu.current && !refMenu.current.contains(event.target)) {
                        hideMenu();
                    }
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [refMenu]);
    }


    useOutsideClick(menuRef, cartIconRef);
    return (
        <div>
            <div className="navigation-bar">
                <Cart refCartIcon={cartIconRef} onClick={() => setShowCartMenu(!showCartMenu)} />
                <CountLabel />
                <Divider />
                <Hamburger />
            </div>
            <CartMenu refCartMenu={menuRef} cartMenuClass={showCartMenu ? "" : "-hidden"} />
        </div>
    );
}

export default NavPanel;