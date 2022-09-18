import { useContext } from "react";
import { Link } from "react-router-dom"; 

// Logo
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

// Services
import { signOutAuthUser } from "../../services/firebase/firebase.service";

// Contexts
import { UserContext } from "../../contexts/user.context";

// Styles
import './navigation.styles.scss';


const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutAuthUser();
  };

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
            (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>)
            : (<Link className="nav-link" to='/auth'>LOGIN</Link>)
        }
      </div>
    </div>
  );
};

export default Navigation;