import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer(){

    const { darkMode } = useContext(ThemeContext);
    return(
        <footer className={`border-t
            ${darkMode ? "bg-gray-800 border-gray-700 text-white"
                        :"bg-gray-50 border-gray-200 text-black"
            }
        `}>
            <div className="container mx-auto px-4 py-6"> 
                <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                    <h2 className="font-semibold">
                        ShopHub
                    </h2>
                    <p className={`text-sm text-gray-500
                        ${darkMode ? "text-gray-400"
                                    :"text-gray-500"
                    }`}>
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;