import { useContext } from "react";
import { ProductsContext } from "../context/product.context";
import ProductCard from "../product-card/product-card.component";
import './shop.style.scss'


const Shop = ()=>{
  const  {product}  = useContext(ProductsContext);
  return (
    <div className="product-container">
    {
      product.map((product)=>(
        <ProductCard key={product.id} product={product} />
      ))
    }
    </div>
  )
} 

export default Shop;