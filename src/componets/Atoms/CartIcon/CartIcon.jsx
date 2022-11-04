import "./CartIcon.css";
import CartImage from '../../../image/Cart.png';
import Image from "./../Image/ImageAtom";


function CartIcon({ onClick, refCartIcon, cartClass }) {

    return (
        <div>
            <Image refImage={refCartIcon} imageClass={"cart-icon"} src={CartImage} alt="Cart Image" onClick={onClick} />
        </div>
    );
}

export default CartIcon;