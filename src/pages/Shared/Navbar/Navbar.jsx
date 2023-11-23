import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      {
        // user ? 'true' : 'false'
        // user ? condition ?  'double true' : 'one true' 'false'
      }
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">DASHBOARD</NavLink>
        </li>
      )}
      {user && !isAdmin && <li><NavLink to="/dashboard/userHome">SECRET</NavLink></li>}
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">ORDER FOOD</NavLink>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="flex">
            <p className="mr-2">OUR SHOP</p>
            <FaShoppingCart></FaShoppingCart>
            <p className="badge badge-secondary">+{cart.length}</p>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {/*<li><span>{user?.displayName}</span></li>*/}
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost text-sm">
              LOGOUT
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar p-4 fixed z-30 max-w-screen-xl bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-80 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost font-serif block">
            <a className="normal-case text-lg">BISTRO BOSS</a>
            <a className="text-[10px] block">R E S T U R E N T</a>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
