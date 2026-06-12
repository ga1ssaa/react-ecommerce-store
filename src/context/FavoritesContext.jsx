import { createContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

export const FavoritesContext = createContext();

function FavoritesProvider( { children }){
    const [favorites, setFavorites ] = useLocalStorage("favorites", []);

    const addToFavorites = (product) => {
        const exists = favorites.find(item => item.id === product.id);
        
        if(exists) return;

        setFavorites([
            ...favorites,
            product
        ]);
    };

    const removeFromFavorites = (id) => {
        setFavorites(
            favorites.filter((item) => item.id !== id)
        );
    };

    return(
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}
export default FavoritesProvider;