import "./Nav.css";
import NavPanel from "./../../Molecules/NavPanel/NavPanel";
import Logo from "./../../Atoms/Logo/Logo";

function Nav() {
    return (
        <div className="nav-wrapper">
            <div className="nav">
                <Logo logoClass={"nav-logo"} />
                <NavPanel />
            </div>
        </div>
    );
}

export default Nav;