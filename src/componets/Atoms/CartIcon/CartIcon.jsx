import "./CartIcon.css";
import CartImage from '../../../image/Cart.png';
import Image from "./../Image/ImageAtom";


function CartIcon() {

    return (
        <div>
            <Image imageClass={"cart-icon"} src={CartImage} alt="Cart Image"  />
        </div>
    );
}

export default CartIcon;