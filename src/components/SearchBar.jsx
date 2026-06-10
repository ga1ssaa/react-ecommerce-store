import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchBar(){
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    return(
        <input 
            type="text"
            placeholder="Search products..."
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-green-500" 
            value={searchTerm}
            onChange={(e) => 
                setSearchTerm(e.target.value)
        }/>   
    );
}
export default SearchBar;