import "./Nav.css";
import NavPanel from "./../../Molecules/NavPanel/NavPanel";
import Logo from "./../../Atoms/Logo/Logo";

function Nav() {
    return (
        <>
            <div className="nav">
                <Logo logoClass={"nav-logo"} />
                <NavPanel />
            </div>
        </>
    );
}

export default Nav;