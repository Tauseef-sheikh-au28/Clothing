import Button from "../button/btn-component"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { CartItem } from "../cart-component/cart-item";
import { useNavigate } from "react-router-dom";
import './dropdown.scss'
const DropDown =()=>{
    const {CartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const tocheckout = ()=>{
        navigate('checkout');
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {
                CartItems.map((item)=>(
                    <CartItem key={item.id} cartitemdata={item}/>
                ))
            }
            <Button onClick={tocheckout}>Checkout</Button>
            </div>
        </div>
    )
}

export default DropDown;