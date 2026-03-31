//import style Here
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={style.navSection}>
        <NavLink to={"/"} className={style.navLink}>
          Home
        </NavLink>
        <NavLink to={"/about-us"} className={style.navLink}>
          About Us
        </NavLink>
        <NavLink to={"/contact-us"} className={style.navLink}>
          Contact Us
        </NavLink>
      </nav>
    </>
  );
}
