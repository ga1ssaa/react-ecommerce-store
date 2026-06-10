import { useState, createContext, useEffect } from 'react';


export const ThemeContext = createContext();

function ThemeProvider({ children }){

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("darkMode");
        return savedTheme === "true";
    })
    useEffect(()=>{
        localStorage.setItem(
            "darkMode",
            darkMode
        );
    },[darkMode])

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