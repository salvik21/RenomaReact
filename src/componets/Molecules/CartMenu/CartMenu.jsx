import "./CartMenu.css";
import Link from "./../../Atoms/Link/LinkAtom";
import Label from "./../../Atoms/Label/LabelAtom"

function CartMenu({ cartMenuClass, refCartMenu }) {
    const LinkElement = [
        { id: 10, text: "$ 45.52", atvButton: false },
        { id: 11, href: "#", text: "View Cart", atvButton: true },
        { id: 12, href: "#", text: "Checkout", atvButton: true },
    ]

    return (
        <div ref={refCartMenu} className={cartMenuClass} >
            {LinkElement.map((item) =>
                <div className="cart-menu-buttons-lists">
                    {!item.atvButton ?
                        <Label labelClass={"cart-menu-button"} text={item.text} /> :
                        <Link linkClass={"cart-menu-button"} href={item.href} text={item.text} />}
                </div>
            )
            }
        </div>
    )
}

export default CartMenu;