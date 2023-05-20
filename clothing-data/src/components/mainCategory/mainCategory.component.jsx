import Category from "../category-items/categoryContainer";
import './maincont.scss'
const MainCont = ({productData})=>{
    return (
        <div className="categories-container">
    {
      productData.map((category) =>(
        <Category key ={category.id} Category ={category} />
      ))
    };
    </div>

    );
}
export default MainCont;