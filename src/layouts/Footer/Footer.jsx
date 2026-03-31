//import style here
import style from "./Footer.module.css";

//import Icons Here
import { FaHome, FaPhone } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

import {
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className={style.footerSection}>
        <div className={style.navIconsSection}>
          <footer className={style.navIcons}>
            <Link to={"/"}>
              <FaHome className={[style.navIcon, style.home].join(" ")} />
            </Link>
            <a href="tel:+01310050878" aria-label="phone" rel="_noreferrer">
              <FaPhone className={[style.navIcon, style.phone].join(" ")} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585149398106"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <FaFacebook
                className={[style.navIcon, style.facebook].join(" ")}
              />
            </a>
            <a
              href="https://m.me/61585149398106"
              target="_blank"
              aria-label="Send me a message on Messenger"
              rel="noreferrer"
            >
              <FaFacebookMessenger
                className={[style.navIcon, style.messenger].join(" ")}
              />
            </a>
          </footer>
          <footer className={style.navIcons}>
            <a
              href="https://wa.me/+01310050878"
              target="_blank"
              aria-label="WhatsApp"
              rel="noreferrer"
            >
              <FaWhatsapp
                className={[style.navIcon, style.whatsApp].join(" ")}
              />
            </a>
            <a href="#">
              <FaInstagram
                className={[style.navIcon, style.instagram].join(" ")}
              />
            </a>
            <a href="#">
              <FaYoutube className={[style.navIcon, style.youtube].join(" ")} />
            </a>
            <a
              href="https://www.fiverr.com/kazitasinhossen"
              target="_blank"
              aria-label="Hire me on Fiverr"
              rel="noreferrer"
            >
              <TbBrandFiverr
                className={[style.navIcon, style.fiverr].join(" ")}
              />
            </a>
          </footer>
        </div>
        <p>Copyright &copy; 2026 KWL. All Right Reserved</p>
      </section>
    </>
  );
}
