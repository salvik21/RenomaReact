import "./CartMenu.css";
import Link from "./../../Atoms/Link/LinkAtom";
import Label from "./../../Atoms/Label/LabelAtom";

function CartMenu({ cartMenuClass, refCartMenu }) {
    const LinkElement = [
        { id: 10, text: "$ 45.52", atvButton: false },
        { id: 11, href: "#", text: "View Cart", atvButton: true },
        { id: 12, href: "#", text: "Checkout", atvButton: true },
    ]

    return (
        <div ref={refCartMenu} className={`cart-menu-wrapper ${cartMenuClass}`} >
            {LinkElement.map((item) =>
                <div key={item.id} className="cart-menu-buttons-lists">
                    {!item.atvButton ?
                        <Label key={item.id} labelClass={"cart-menu-button"} text={item.text} /> :
                        <Link key={item.id} linkClass={"cart-menu-button"} href={item.href} text={item.text} />}
                </div>
            )
            }
        </div>
    )
}

export default CartMenu;