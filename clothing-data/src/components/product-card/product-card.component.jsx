import Button from "../button/btn-component"
import './product-card.scss'
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ProductCard = ({product})=>{
    const {name,imageUrl,price } = product;
    const {addItemToCart} = useContext(CartContext);
    const addtocart = ()=> addItemToCart(product);
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonTypes="inverted" onClick={addtocart}> Add to cart</Button>
        </div>
    )
}



export default ProductCard;