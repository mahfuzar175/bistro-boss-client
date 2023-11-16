import { Helmet } from "react-helmet-async";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaMailBulk,
  FaSearch,
  FaShopify,
  FaShoppingCart,
  FaVoicemail,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <a className="btn btn-ghost font-serif block">
          <a className="normal-case text-lg">BISTRO BOSS</a>
          <a className="text-[10px] block">R E S T U R E N T</a>
        </a>
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>MY CART
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
              <FaAd></FaAd>ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList> MY BOOKINGS
            </NavLink>
          </li>
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch></FaSearch>MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShopify></FaShopify>SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaMailBulk></FaMailBulk> CONTATC
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
