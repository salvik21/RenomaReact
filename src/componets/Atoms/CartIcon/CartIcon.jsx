import "./CartIcon.css";
import CartImage from '../../../image/Cart.png';
import Image from "./../Image/ImageAtom";


function CartIcon({ onClickCartIcon, refCartIcon }) {

    return (
        <>
            <Image refImage={refCartIcon} imageClass={"cart-icon"} src={CartImage} alt="Cart Image" onClick={onClickCartIcon} />
        </>
    );
}

export default CartIcon;