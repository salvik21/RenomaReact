import "./CartMenuWrapper.css";
import Link from "./../../Atoms/Link/LinkAtom";
import Label from "./../../Atoms/Label/LabelAtom"
import React, { useRef, useEffect } from "react";

function CartMenuWrapper({displayState }) {
    var setDisplay='none';
        if ( !displayState ) {
            setDisplay='none';
        } 
        else {
            setDisplay="block"; 
        }

    const LinkElement=[
        {href: "#", text: "View Cart"},
        {href: "#", text: "Checkout"},
    ]

   

    /**
     * Hook that alerts clicks outside of the passed ref
     */
    function useOutsideAlerter(ref) {
      useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            alert("You clicked outside of me!");
            setDisplay='none';
            console.log(setDisplay);
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
    }
    
    /**
     * Component that alerts if you click outside of it
     */
    // export default function OutsideAlerter(props) {
    //   const wrapperRef = useRef(null);
    //   useOutsideAlerter(wrapperRef);
    
    //   return <div ref={wrapperRef}>{props.children}</div>;

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    console.log(setDisplay);
    return(

        <div className="cartMenuWrapper" ref={wrapperRef} style={{display:setDisplay}}>
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

CartMenuWrapper.defaultProps = {
    displayState: "false",
}
export default CartMenuWrapper;