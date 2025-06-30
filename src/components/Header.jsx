import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useEffect, useRef } from "react";

function Header() {
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0C1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Featres",
      path: "#features",
    },
    {
      name: "Team",
      path: "#team",
    },
    {
      name: "Sign In",
      path: "#signin",
    },
  ];

  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="container flex flex-col items-center justify-between gap-[30px] md:flex-row">
        <Logo />
        <nav>
          <ul className="flex gap-5 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-white opacity-[.8] hover:opacity-[1] hover:underline transition-opacity duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
