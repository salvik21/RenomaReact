import "./Nav.css";
import Icons from "./../../Molecules/Icons/Icons";
import Renoma from "./../../Atoms/LogoAtom/LogoAtom";
// import CartMenu from "./../../Molecules/CartMenuWrapper/CartMenuWrapper";

function Nav() {
   return(

        <div className="navwrapper">
            <div className="nav">
                <Renoma />
                <Icons  />
            </div>
            {/* <CartMenu /> */}
        </div>  
    );
}

export default Nav;