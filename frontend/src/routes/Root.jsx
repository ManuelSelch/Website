import { Outlet } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer"
import ScrollToTop from '../components/ScrollToTop';

// contexts
import {useThemeContext} from "../contexts/ThemeContext";

export default function Root({ children }) {
    const theme = useThemeContext();

    if (!theme) 
      return <p></p>;

    return (
      <div 
        style= {{ 
          backgroundColor: theme.backgroundColor,
          color: theme.textColor
        }}
      >
        <ScrollToTop />
          <Header />
            <main className="min-h-[100vh] px-8 py-8">
            {children ?? <Outlet />}
            </main>
          <Footer />
      </div>
    );
}