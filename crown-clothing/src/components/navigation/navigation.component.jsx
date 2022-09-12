import { Link } from "react-router-dom"; 

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="logo" to='/'>
        <div>Logo</div>
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to='/shop'>Shop</Link>
      </div>
    </div>
  );
};

export default Navigation;