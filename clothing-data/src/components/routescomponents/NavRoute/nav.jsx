import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../NavRoute/asset/083 crown.svg";
import {ReactComponent as LOgo1} from '../../carticon/S_A.svg'
import DropDown from "../../drop-down/drop-down-component";
// import {NavigationContainer} from './nav.styled'
import './nav.styled.scss'
import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";
import { signOutUser } from "../../../utils/firebase/firebase.components";
import CartIcon from "../../carticon/cart-icon";
const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h1 className="logo">S & A</h1>
          <p className="sub-logo">Fashion</p>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Signout
            </span>
          ) : (
            <Link to="/sign-in">Sign-in</Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <DropDown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};


export default Nav;



