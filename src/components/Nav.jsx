import { headerLogo } from "../assets/images";
import { arrowRight, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 z-50 w-full absolute">
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
        <div className="hidden md:block">
          <Button label="Sign Up" />
        </div>
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>

      {toggle && (
        <ul className="flex-1 flex flex-col justify-center items-center gap-6 bg-gray-50 shadow-lg py-4 mt-4 rounded-xl md:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              onClick={() => {
                setToggle(false);
              }}
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <Button label="Sign Up" />
        </ul>
      )}
    </header>
  );
};

export default Nav;
