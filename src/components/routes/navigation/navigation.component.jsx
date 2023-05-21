import { Fragment, useContext } from "react";
import { UserContext } from "../../../contexts/user.contexts";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { CartContext } from "../../../contexts/cart.context";
import "./navigation.style.jsx";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.style.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

//components are all truthy values because they are functions
