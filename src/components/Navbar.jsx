import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaMoon, FaBars } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

function Navbar(){

    const {darkMode, setDarkMode} = useContext(ThemeContext);
        return(
            <nav className={`sticky top-0 z-50 shadow-md
                            ${darkMode? "bg-gray-800 text-white" : "bg-white text-black"}
                            `}>

                <div className="container mx-auto px-4">

                    <div className="flex h-16 justify-between items-center">

                        {/* 1. Logo */}
                        <Link
                            to="/"
                            className="font-serif text-2xl font-bold text-green-600"
                        >
                            ShopHub
                        </Link>

                        {/* 2. Search */}

                        <div className="hidden md:block w-full max-w-md mx-8">
                            <SearchBar />
                        </div>

                        {/* 3. Right Side */}

                        <div className="flex items-center gap-5">
                        
                            {/* 4. Moon */}
                                <button
                                    onClick={() =>
                                        setDarkMode(!darkMode)
                                    }
                                >
                                    <FaMoon size={20} />
                                </button>

                            {/* 5. Favorites */}
                            <Link 
                                to="/favorites"
                                className="relative"
                            >
                                <FaHeart size={22} />
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                                    0
                                </span>
                            </Link>

                            {/* 6. Cart */}

                            <Link 
                                to="/cart"
                                className="relative"
                            >
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                                    0
                                </span>
                                <FaShoppingCart size={22} />
                            </Link>

                            {/* 7. Mobile Menu */}
                            <button className="md:hidden">
                                <FaBars size={22} />
                            </button>
                        </div>
                    </div>

                        {/* 8. Mobile Search */}
                    <div className="pb-4 md:hidden">
                        <SearchBar />
                    </div>
                </div>
            </nav>
        );
    }
export default Navbar