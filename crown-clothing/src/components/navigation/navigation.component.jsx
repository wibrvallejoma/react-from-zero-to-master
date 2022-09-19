import { useContext } from "react";
import { Link } from "react-router-dom"; 

// Logo
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

// Components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// Services
import { signOutAuthUser } from "../../services/firebase/firebase.service";

// Contexts
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

// Styles
import './navigation.styles.scss';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="navigation">
      <Link className="logo-container" to='/'>
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to='/'>HOME</Link>
        <Link className="nav-link" to='/shop'>SHOP</Link>
        {
          currentUser ? 
            (<span className="nav-link" onClick={signOutAuthUser}>SIGN OUT</span>)
            : (<Link className="nav-link" to='/auth'>LOGIN</Link>)
        }
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Navigation;