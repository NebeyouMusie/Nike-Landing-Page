import { headerLogo } from "../assets/images";
import { arrowRight, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-50 w-full fixed">
      <nav className="flex justify-between items-center max-container">
        <a href="#home">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <Button label="Sign Up" iconURL={arrowRight}/> */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
