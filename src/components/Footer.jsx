import Logo from "./Logo";
// import iconLocation from "../assets/icon-location.svg"
// import iconEmail from "../assets/icon-email.svg"
// import iconPhone from "../assets/icon-phone.svg"
// import iconFacebook from "../assets/"
import { HiOutlineUser } from "react-icons/hi";
import ToTop from "./ToTop";

function Footer() {
  return (
    <>
      <footer className="bg-[#0C1524]">
        <div className="container">
          <div>
            <Logo />
             <HiOutlineUser size={40} color="red" />
          </div>
        </div>
      </footer>
      <ToTop />
    </>
  );
}

export default Footer;
