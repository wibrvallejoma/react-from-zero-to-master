import { useContext } from "react";
import { Link } from "react-router-dom"; 
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

// Contexts
import { UserContext } from "../../contexts/user.context";

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div className="navigation">
      <Link className="logo-container" to='/'>
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/shop'>Shop</Link>
        <Link className="nav-link" to='/auth'>Login</Link>
      </div>
    </div>
  );
};

export default Navigation;