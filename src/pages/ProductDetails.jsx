import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { getProduct, getProducts } from "../services/api";
import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

function ProductDetails(){

    const [product, setProduct] = useState(null);
    const [allProducts, setAllProducts] = useState([]);

    const [selectedImage, setSelectedImage] = useState("");

    const { id } = useParams();

    const { cartItems, addToCart } = useContext(CartContext);

    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

    const isFavorite = product && favorites.some(item => item.id === product.id);

    const isInCart = product && cartItems.some(item => item.id === product.id);

    const relatedProducts = allProducts.filter(
                            (item) => product && item.category === product.category && item.id !== product.id).slice(0, 4);

    useEffect(() => {
        async function fetchProduct() {
            const data = await getProduct(id);
            const allData = await getProducts();

            setProduct(data);
            setAllProducts(allData);

            setSelectedImage(data.thumbnail);
        }

        fetchProduct();
    }, [id]);

    if (!product) {
        return (
            <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>

                <p className="font-serif text-lg text-gray-600">
                    Loading product details...
                </p>
            </div>
        );
    }

    return(
        <>
            <section className="mx-auto max-w-5xl mt-15 grid gap-10 md:grid-cols-2">

                <div className="rounded-xl bg-white p-8 shadow">

                    <img
                        src={selectedImage}
                        alt={product.title}
                        className={`h-96 w-full rounded-xl object-contain transition duration-300 hover:scale-103 ${
                        product.images?.length > 1 ? "border" : ""
                    }`}
                    />
                    {product.images?.length > 1 && (
                        <div className="mt-4 flex flex-wrap gap-3">
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={product.title}
                                    onClick={() => setSelectedImage(image)}
                                    className={`h-20 w-20 cursor-pointer rounded-lg border-2 object-contain p-1 transition hover:scale-103
                                        ${
                                            selectedImage === image
                                                ? "border-green-500"
                                                : "border-gray-300"
                                        }
                                    `}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h1 className="font-serif text-3xl font-bold">
                        {product.title}
                    </h1>
                    <p className="font-serif mt-4 text-gray-500">
                        {product.category}
                    </p>
                    <p className="mt-6 text-3xl font-bold text-green-500">  
                        ${product.price.toFixed(2)}
                    </p>
                    <p className="font-serif mt-6 leading-relaxed">
                        {product.description}
                    </p>
                    <p className="font-bold mt-4">
                        ⭐ {product.rating}/5
                    </p>

                    <div className="font-serif mt-8 flex flex-col gap-4">

                        <Link to="/cart">
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full font-bold rounded-lg bg-green-500 px-6 py-3 text-white cursor-pointer hover:bg-green-600 transition hover:scale-101"
                                >
                                Buy Now
                            </button>
                        </Link>
                        <button
                            onClick = {() => {


                            if(!isInCart){
                                addToCart(product);
                                toast.success("Product Added to Cart 🛒");
                            }
                            else{
                                toast.warning("Already in Cart!");
                            }
                        
                        }}
                            className="rounded-lg font-bold border border-green-500 px-6 py-3 text-green-500 cursor-pointer hover:bg-green-50 transition hover:scale-101"
                        >
                            🛒 Add to Cart
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (isFavorite) {
                                    removeFromFavorites(product.id);
                                    toast.error("Removed from Favorites 💔");
                                } else {
                                    addToFavorites(product);
                                    toast.success("Saved to Favorites ❤️");
                                }
                            }}
                            className="rounded-lg font-bold border-2 border-red-500 px-6 py-3 text-red-500 flex items-center justify-center gap-2 cursor-pointer hover:bg-red-50 transition hover:scale-101"
                        >
                            <FaHeart size={20} 
                                className={isFavorite ? "text-red-500" : "text-gray-400"}
                            />

                            {isFavorite
                                ? "Remove Favorite"
                                : "Add to Favorites"}
                        </button>
                    </div>

                </div>

            </section>

            <section className="mx-auto mt-16 max-w-5xl">
                <h2 className="font-serif mb-6 text-3xl font-bold">
                    Related Products
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {relatedProducts.map((item) => (
                        <ProductCard 
                            key={item.id}
                            product={item}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
export default ProductDetails;