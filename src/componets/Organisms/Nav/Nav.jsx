import "./Nav.css";
import Icons from "./../../Molecules/Icons/Icons";
import Renoma from "./../../Atoms/LogoAtom/LogoAtom";

function Nav() {
   return(

        <div className="navwrapper">
            <div className="nav">
                <Renoma />
                <Icons  />
            </div>
        </div>  
    );
}

export default Nav;