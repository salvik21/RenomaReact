import "./CartIcon.css";
import CartImage from '../../../image/Cart.png';


function CartIcon({onClick}) {

    return(
        <div className="cartIcon" >
            <img src={CartImage} alt="Cart Image" onClick={onClick} />
        </div>
    );
}

export default CartIcon;