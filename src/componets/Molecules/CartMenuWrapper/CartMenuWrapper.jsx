import "./CartMenuWrapper.css";
import Link from "./../../Atoms/Link/LinkAtom";
import Label from "./../../Atoms/Label/LabelAtom"


function CartMenuWrapper() {
    const LinkElement=[
        {href: "#", text: "View Cart"},
        {href: "#", text: "Checkout"},
    ]

    return(
    
        <div className="cartMenuWrapper">
            <div className="cartMenu">
                <div className="cartMenuButton">
                <Label text="$44.50"/>
                </div>
                {LinkElement.map((item) => <div className="cartMenuButton">
                <Link href={item.href} text={item.text} />
            </div>
        )}
        </div>
        </div>
    )
}

export default CartMenuWrapper;