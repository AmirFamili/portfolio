import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

import '../styles/navbar.scss';



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
        setColorchange(true);
    } else {
        setColorchange(false);
    }
};
window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={`${styles.paddingX
        } ${colorChange ? 'bg-slate-950' : 'bg-transparent'} bg-black w-full flex items-center py-5 fixed top-0 z-20 `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Amir
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <label className="hamburger-menu flex flex-col absolute gapr-2 top-8 ">
            <input className=' object-contain appearance-none checked:w-0 opacity-0...' checked={!toggle ? false : true} type="checkbox" onClick={() => setToggle(!toggle)} />
          </label>


          <div
            className={`sidebar ${!toggle ? "hidden" : "flex"
              } p-6 h-screen black-gradient absolute top-0 right-0  min-w-[160px] z-5 rounded-xl`}
          >
            <ul className='list-none items-start mt-10 flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins p-4 font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 