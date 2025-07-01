import Logo from "./Logo";
import ToTop from "./ToTop";
import iconLocation from "../assets/icon-location.svg";
import iconEmail from "../assets/icon-email.svg";
import iconPhone from "../assets/icon-phone.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const social = [
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <FaTwitter />,
  },
  {
    icon: <FaInstagram />,
  },
];
const linksOne = ["About us", "Jobs", "Press", "Blog"];
const linksTwo = ["Contact us", "Terms", "Privacy"];
const info = [
  {
    image: iconPhone,
    name: "+1-543-123-4567",
  },
  {
    image: iconEmail,
    name: "example@email.com",
  },
];

function Footer() {
  return (
    <>
      <footer className="bg-[#0C1524] text-white pt-72 pb-40">
        <div className="container grid grid-cols-1 gap-10 place-items-start md:place-items-center md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <div className="flex items-start gap-5 mt-8">
              <img src={iconLocation} alt="Location" />
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                labore quis ea nam totam corrupti amet, ipsam nesciunt
                teneturfacilis sit
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {info.map((item, i) => (
              <div key={i} className="flex gap-5 items-center">
                <img src={item.image} alt="Phone" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:gap-20">
            <ul>
              {linksOne.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            <ul>
              {linksTwo.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto">
            <ul className="flex gap-5">
              {social.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center border-[1px] hover:text-[#4EC6D4] transition-all duration-200"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <ToTop />
    </>
  );
}

export default Footer;
