
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">

        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i class="topIcon fa-brands fa-linkedin-in"></i>
        <i className="topIcon fa-brands fa-github"></i>
        </div>

        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/"> Home</Link></li>
          <li className="topListItem"><Link className="link" to="/">About</Link></li>
         <li className="topListItem"><Link className="link" to="/">Contact</Link></li>
         <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
         <li className="topListItem">
         {user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/278660811_115736457765235_8622607382048431541_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3Ik5pUhkW_4AX8G0Oxm&_nc_ht=scontent-sjc3-1.xx&oh=00_AT-wlCuYqQF3SXuEdt_KkbopuFq1VHcwrLGP6GIXxjgexA&oe=6261661A"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
