import Logo from "./Logo";
import ToTop from "./ToTop";
import iconLocation from "../assets/icon-location.svg";
import iconEmail from "../assets/icon-email.svg";
import iconPhone from "../assets/icon-phone.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#0C1524] text-white pt-72 pb-40">
        <div className="container grid grid-cols-1 gap-10 place-items-center md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <div className="flex items-start gap-5 mt-8">
              <img src={iconLocation} alt="Location" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                labore quis ea nam totam corrupti amet, ipsam nesciunt
                teneturfacilis sit
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <img src={iconPhone} alt="Phone" className="" />
              <p>+1-543-123-4567</p>
            </div>

            <div className="flex gap-5 items-center">
              <img src={iconEmail} alt="Email" />
              <p>example@email.com</p>
            </div>
          </div>

          <div className="flex justify-between gap-20">
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex gap-5">
              <li className="w-10 h-10 rounded-full flex items-center justify-center border-[1px]">
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center border-[1px]">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="w-10 h-10 rounded-full flex items-center justify-center border-[1px]">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <ToTop />
    </>
  );
}

export default Footer;
