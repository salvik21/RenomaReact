import "./Nav.css";
import Icons from "./Icons/Icons";
import Renoma from "./../../Molecules/TitleLogo/TitleLogo";
import CartMenu from "./../../Molecules/CartMenuWrapper/CartMenuWrapper"

function Nav() {
    return(
        <div className="navwrapper">
            <div className="nav">
                <Renoma />
                <Icons />
            </div>
            <CartMenu />
        </div>  
    );
}

export default Nav;