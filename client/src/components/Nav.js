import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Nav() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
          <li id='user-name'>
          <h3>
          {JSON.parse(auth).name}
          </h3>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
