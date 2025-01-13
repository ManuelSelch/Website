import React, { useState } from "react"
import { Link, useLocation } from 'react-router-dom';

// images
import selch_logo from "../images/selch_logo.jpg";

// contexts
import { useThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const theme = useThemeContext();

  if(!theme)
    return <p></p>

  return (
    <>
       {/*<!-- Component: Top Bar --> */}
      <div className="border-b border-slate-200 bg-slate-100 flex gap-5 p-5">
        
        <a href="javascript:void(0)" className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-500">
          <i className="fa-solid fa-phone"></i>
          {theme.phone}
        </a>

        <a href="javascript:void(0)" className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-500">
          <i className="fa-solid fa-envelope"></i>
          {theme.email}
        </a>

      </div>

      {/*<!-- Component: Basic Navbar --> */}
      <header className="sticky top-0 border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 ">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] justify-between font-medium text-slate-700 items-center"
            role="navigation"
          >


            <Link className="flex items-center" to="/">
              <img src={selch_logo} alt=""  style={{height: 50}}/>
              <strong className="px-5">{theme.title}</strong>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
                <Menu name="Projekte" to="/#projects" setToggle={setIsToggleOpen}/>
                
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  )
};

const Menu = ({name, to, setToggle}) => {
  const location = useLocation();
  const theme = useThemeContext();

  return (
      <li role="none" className="flex items-stretch">
          <p
              role="menuitem"
              aria-haspopup="false"
              style={{color: to === location.pathname ? theme.contrastColor: theme.textColor}}
              className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8`}
          >
              <Link className='btn btn-ghost text-xl' to={to}>
                <span onClick={() => setToggle(false)}>{name}</span>
              </Link>
          </p>
      </li>
  );
};


export default Header;