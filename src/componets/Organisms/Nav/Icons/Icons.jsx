import "./Icons.css";
import Cart from "./../../../Molecules/NavWrapper/IconWrapper/CartIcon/CartIcon";
import Hamburger from "./../../../Molecules/NavWrapper/IconWrapper/HamburgerIcon/HamburgerIcon";
import Close from "./../../../Molecules/NavWrapper/IconWrapper/CloseIcon/CloseIcon";
import Divider from "./../../../Molecules/NavWrapper/Divaider/VerticalDivider";
import CountLabel from "./../../../Molecules/NavWrapper/CountLabel/CountLabel";

function Icons () {
    return(
        <div className="icons">
            <Cart />
            <CountLabel />
            <Divider />
            <Hamburger />
        </div>
    );
}

export default Icons;