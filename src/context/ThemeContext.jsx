import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
export const ThemeContext = createContext();

function ThemeProvider({ children }){

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    return(
        <ThemeContext.Provider
            value={{
                darkMode,
                setDarkMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;