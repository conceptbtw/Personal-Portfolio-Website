import HeaderNavItem from "./HeaderNavItem";
import HeaderNavList from "./HeaderNavList";

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-center items-center">
      <nav className="">
        <HeaderNavList>
          <HeaderNavItem text="About" link="#about"></HeaderNavItem>
          <HeaderNavItem text="Skills" link="#skills"></HeaderNavItem>
          <HeaderNavItem text="Projects" link="#projects"></HeaderNavItem>
          <HeaderNavItem text="Contact" link="#contact"></HeaderNavItem>
        </HeaderNavList>
      </nav>
    </header>
  );
}
