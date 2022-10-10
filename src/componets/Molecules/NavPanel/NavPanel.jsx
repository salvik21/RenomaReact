import "./NavPanel.css";
import Cart from "../../Atoms/CartIcon/CartIcon";
import Hamburger from "../../Atoms/HamburgerIcon/HamburgerIcon";
import Close from "../../Atoms/CloseIcon/CloseIcon";
import Divider from "../../Atoms/Divider/VerticalDivider";
import CountLabel from "../../Atoms/CountLabel/CountLabel";
import CartMenu from "./../../Molecules/CartMenu/CartMenu";


function NavPanel() {
    return (
        <div className="nanavigation-wrapper">
        <div className="navigation-bar">
            <Cart />
            <CountLabel />
            <Divider />
            <Hamburger />
        </div>
            <CartMenu />
        </div>
    );
}

export default NavPanel;