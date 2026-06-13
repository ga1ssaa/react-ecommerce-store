import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SearchProvider from './context/SearchContext.jsx';
import ThemeProvider from './context/ThemeContext.jsx';
import CartProvider from './context/CartContext.jsx';
import FavoritesProvider from './context/FavoritesContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <ThemeProvider>
        <SearchProvider>
          <CartProvider>
            <App />
            <ToastContainer 
              position="top-right"
              autoClose={2000}
              theme="colored"
            />
          </CartProvider>
        </SearchProvider>
      </ThemeProvider>
    </FavoritesProvider>
  </StrictMode>,
)
