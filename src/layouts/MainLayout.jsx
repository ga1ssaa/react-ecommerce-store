import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

function MainLayout(){

    const { darkMode } = useContext(ThemeContext);
    
    return(
        <div 
            className={
                darkMode ? "min-h-screen flex flex-col bg-gray-950 text-white" 
                : "min-h-screen flex flex-col bg-gray-50 text-black"
            }
        >
            <Navbar/>

            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
};
export default MainLayout;