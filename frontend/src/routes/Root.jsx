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
          backgroundColor: theme.background,
          color: theme.text
        }}
      >
        <ScrollToTop />
          <Header />
            <main className="min-h-[100vh]">
            {children ?? <Outlet />}
            </main>
          <Footer />
      </div>
    );
}