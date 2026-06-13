import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { ThemeContext } from '../context/ThemeContext';

function SearchBar(){
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const { darkMode } = useContext(ThemeContext);

    return(
        <input 
            type="text"
            placeholder="Search products..."
            className={`w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-green-500
                ${darkMode ? "bg-gray-700 border-gray-700 text-white"
                            :"bg-white text-black"
                }`}
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value);
        }}/>   
    );
}
export default SearchBar;