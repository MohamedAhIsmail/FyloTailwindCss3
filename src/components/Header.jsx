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
    <header>
      <Logo />
      <nav>
        <ul></ul>
      </nav>
    </header>
  );
}

export default Header;
