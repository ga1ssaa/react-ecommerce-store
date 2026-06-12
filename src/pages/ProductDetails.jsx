import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { getProduct } from "../services/api";
import { CartContext } from "../context/CartContext";

function ProductDetails(){

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        async function fetchProduct() {
            const data = await getProduct(id);

            setProduct(data);
        }

        fetchProduct();
    }, [id]);

    if(!product){
        return (<h2>Loading...</h2>);
    }

    return(
        <section className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">

            <div className="rounded-xl bg-white p-8 shadow">
                <img 
                    src={product.thumbnail} 
                    alt={product.title}
                    className="h-96 w-full object-contain"
                />
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

                <div className="font-serif mt-8 flex gap-4">
                    <button
                        onClick={() => addToCart(product)}
                        className="rounded-lg bg-green-500 px-6 py-3 text-white cursor-pointer hover:bg-green-600 transition hover:scale-101"
                    >
                        Add to Cart
                    </button>
                    <button
                        className="rounded-lg border border-green-500 px-6 py-3 text-green-500 cursor-pointer hover:bg-green-50 transition hover:scale-101"
                    >
                        Add to Favorites
                    </button>
                </div>

            </div>

        </section>
    );
}
export default ProductDetails;