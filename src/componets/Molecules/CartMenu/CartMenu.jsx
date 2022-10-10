import "./CartMenu.css";
import Link from "./../../Atoms/Link/LinkAtom";
import Label from "./../../Atoms/Label/LabelAtom"

function CartMenu() {
    const LinkElement = [
        { id: 10, text: "$ 45.52", atvButton: true },
        { id: 11, href: "#", text: "View Cart", atvButton: false },
        { id: 12, href: "#", text: "Checkout", atvButton: false },
    ]

    const LabelElm = (text) => {
        return <Label labelClass={"cart-menu-button"} text={text} />
    }

    const LinkElm = (href, text) => {
        return <Link linkClass={"cart-menu-button"} href={href} text={text} />
    }

    return (
        <div className="cart-menu-wrapper">
            {LinkElement.map((item) =>
                <div className="cart-menu-buttons-lists">
                    {item.atvButton ? LabelElm(item.text) : LinkElm(item.href, item.text)}
                </div>
            )
            }
        </div>
    )
}

export default CartMenu;