import { useContext } from "react";
import { CartContext } from "../context/cartContext";
export const Checkout = ()=>{

    const {CartItems, addItemToCart, removeItemToCart, clearCartItem, totalItem} = useContext(CartContext);
    return (
        <div>
            <h1>This is CHeckout Page</h1>
            {
                CartItems.map((cartItem) => {
                    const {name, imageUrl, id, quantity} = cartItem;
                    return <div key={id}>
                    <img src={imageUrl}/>
                        <h1>{name}</h1>
                        <h1>{quantity}</h1>
                        <span onClick={()=> removeItemToCart(cartItem)}>Decrement</span>
                        <br></br>
                        <span onClick={()=> addItemToCart(cartItem)}>Increment</span>
                        <br/>
                        <span onClick={()=> clearCartItem(cartItem)} > Remove Item </span>
                        <h1> Total ${totalItem}</h1>
                    </div>
                })
            }
        </div>
    )
}