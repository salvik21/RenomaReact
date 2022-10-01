import "./NavPanel.css";
import Cart from "../../Atoms/CartIcon/CartIcon";
import Hamburger from "../../Atoms/HamburgerIcon/HamburgerIcon";
import Close from "../../Atoms/CloseIcon/CloseIcon";
import Divider from "../../Atoms/Divider/VerticalDivider";
import CountLabel from "../../Atoms/CountLabel/CountLabel";

function Icons() {
    return (
        <div className="icons">
            <Cart />
            <CountLabel />
            <Divider />
            <Hamburger />
        </div>
    );
}

export default Icons;