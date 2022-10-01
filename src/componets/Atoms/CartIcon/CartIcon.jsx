import "./CartIcon.css";
import CartImage from '../../../image/Cart.png';


function CartIcon({ onClick }) {

    return (
        <div className="cart-icon-wrapper" >
            <img className="cart-icon" src={CartImage} alt="Cart Image" onClick={onClick} />
        </div>
    );
}

export default CartIcon;