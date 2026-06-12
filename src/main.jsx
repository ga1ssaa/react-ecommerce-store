import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import SearchProvider from './context/SearchContext.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import CartProvider from './context/CartContext.jsx'
import FavoritesProvider from './context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <ThemeProvider>
        <SearchProvider>
            <CartProvider>
            <App />
            </CartProvider>
        </SearchProvider>
      </ThemeProvider>
    </FavoritesProvider>
  </StrictMode>,
)
