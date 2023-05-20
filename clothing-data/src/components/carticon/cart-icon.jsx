import {ReactComponent as Shoppingbag} from './shopping.svg'
import {useContext} from 'react';
import { CartContext } from '../context/cartContext';
import './carticon.scss'
const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleCart = ()=>{
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className='cart-icon-container' onClick={toggleCart}>
        <Shoppingbag className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default CartIcon;