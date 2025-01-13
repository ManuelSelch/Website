import React from "react"
import { Link } from 'react-router-dom';

// contexts
import { useThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const theme = useThemeContext();

  if(!theme)
    return <p></p>


  return (
    <>
      {/*    <!-- Component: Three Columns Footer --> */}
      <footer className="w-full text-slate-500">
        {/*      <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-product-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-3"
                >
                  {theme.title}
                </h3>
                <a
                    href=""
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                >
                  {theme.email}
                </a>
                <br/>
                <a
                  href=""
                  className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                >
                  95447 Bayreuth, Ludwig-Thoma-Str. 56
                </a>


              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-about-3"
              >
                <Link className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600" to="/impressum">Impressum</Link>
              </nav>
              
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Three Columns Footer --> */}
    </>
  )
}