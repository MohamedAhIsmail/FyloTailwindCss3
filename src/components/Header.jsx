import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const navLinks = [
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
    <header className=" flex items-center justify-between px-20 py-10">
      <Logo />
      <nav>
        <ul className="flex gap-5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} className="text-white">
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
