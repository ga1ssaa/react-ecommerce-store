import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const SearchContext = createContext();

function SearchProvider({ children }){
    const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm","");

    return(
        <SearchContext.Provider
            value={{
                searchTerm,
                setSearchTerm
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;