import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorites(){

    const {favorites, removeFromFavorites} = useContext(FavoritesContext);

    if(favorites.length === 0){
        return(
            <div className="font-serif my-50 text-center">
                <h1 className="text-4xl font-bold">
                    No favorites yet 💔
                </h1>
                <p className="mt-3 text-gray-500">
                    Start adding products you love
                </p>
                <Link
                    to="/"
                    className="font-serif font-semibold mt-6 inline-block rounded-lg bg-green-500 px-6 py-3 text-white cursor-pointer transition hover:scale-102 hover:bg-green-600"
                >
                    Back to Home
                </Link>
            </div>
        )
    }

    return(
        <section>

            <h1 className="font-serif mb-8 text-3xl font-bold">
                Favorites
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {favorites.map((product) => (

                    <div
                        key={product.id}
                        className="rounded-xl border p-4"
                    >
                        <img 
                            src={product.thumbnail}
                            alt={product.title}
                            className="mx-auto h-48 object-contain"
                        />

                        <h2 className="font-serif mt-4 font-bold">
                            {product.title}
                            
                        </h2>

                        <h2 className="mt-2 font-bold text-green-500">
                            ${product.price.toFixed(2)}
                        </h2>

                        <div className="mt-4 flex gap-2">

                            <Link
                                to={`/product/${product.id}`}
                                className="font-serif rounded-lg bg-green-500 px-4 py-2 text-white cursor-pointer transition hover:scale-101 hover:bg-green-600"
                            >
                                View
                            </Link>

                            <button
                                onClick = {() => {
                                    removeFromFavorites(product.id);
                                    toast.error("Removed from Favorites💔");
                                }}
                                className="font-serif rounded-lg bg-red-500 px-4 py-2 text-white cursor-pointer transition hover:scale-101 hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Favorites;