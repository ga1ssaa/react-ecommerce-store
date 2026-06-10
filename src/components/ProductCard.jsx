import { Link } from "react-router-dom";

function ProductCard( {product} ){
    return(
        <Link
            to={`/product/${product.id}`}
            className="block rounded-xl border p-4 shadow-sm transition hover:shadow-lg hover:scale-101"
        >

        <img 
            src={product.image} 
            alt={product.title} 
            className="mx-auto h-48 object-contain"
        />

        <h3 className="mt-4 line-clamp-2 font-semibold">
            {product.title}
        </h3>

        <p className="mt-2 text-xl font-bold text-green-600">
            ${product.price}
        </p>



        </Link>
    );
};
export default ProductCard;