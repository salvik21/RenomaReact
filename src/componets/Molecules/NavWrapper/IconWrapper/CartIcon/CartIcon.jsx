import "./CartIcon.css";
import IconAtom from "../../../../Atoms/Icon/IconAtom";
import CartImage from '../../../../../image/Cart.png';
import React, { useState } from "react";
import CartMenu from "./../../../CartMenuWrapper/CartMenuWrapper"


function CartIcon() {

    return(
        <div className="cartIcon" >
            <IconAtom  src={CartImage} alt="Cart"  />
        </div>
    );
}

export default CartIcon;