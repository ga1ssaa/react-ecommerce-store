import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext"
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

function ProductCard({product}){

    const { darkMode } = useContext(ThemeContext);

    const { addToCart, cartItems } = useContext(CartContext);

    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

    const isFavorite = favorites.some((item) => item.id === product.id);

    const isInCart = cartItems.some(item => item.id === product.id);

    return(
        <Link
            to={`/product/${product.id}`}
            className={`block rounded-xl border p-4 shadow-sm transition hover:shadow-lg hover:scale-105
                ${darkMode ? "bg-gray-800 text-white" 
                            :"bg-white text-black"
                }`}
        >

        <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="mx-auto h-48 object-contain"
        />

        <h3 className="font-serif mt-4 line-clamp-2 font-semibold">
            {product.title}
        </h3>

        <p className="mt-2 text-xl font-bold text-green-600">
            ${product.price.toFixed(2)}
        </p>

        <div className="mt-4 flex gap-4">
            <button
                onClick = {(e) => {

                    e.preventDefault();
                    e.stopPropagation();
                    if(!isInCart){
                        addToCart(product);
                        toast.success("Product Added to Cart 🛒");
                    }
                    else{
                        toast.warning("Already in Cart!");
                    }
                    
                }}
                
                className="font-serif font-bold flex-1 rounded-lg bg-green-500 px-3 py-2 text-white hover:bg-green-600"
            >
                Add to Cart
            </button>
            <button
                onClick = {(e) => { 
                    e.preventDefault();
                    e.stopPropagation();
                    if(isFavorite){
                        removeFromFavorites(product.id);
                        toast.error("Removed from Favorites 💔")
                    }
                    else{
                        addToFavorites(product);
                        toast.success("Saved to Favorites ❤️")
                    }
                }}
                className={`rounded-lg bg-green-500 p-2 hover:bg-green-600
                    ${
                        isFavorite ? "text-red-500" : "text-white"
                    }
                    `}
            >
                <FaHeart size={20}></FaHeart>
            </button>
        </div>
        </Link>
    );
};
export default ProductCard;