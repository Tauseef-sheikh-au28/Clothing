import './cart-item.scss'

export const CartItem = ({cartitemdata})=>{
    const {name,imageUrl, quantity,price} = cartitemdata;
    return (
        <div className="cart-item-container">
           <img src={imageUrl} alt={ `${name}`}/>
           <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity}  X {price}
            </span>
           </div>
        </div>
    )
}