import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart(){

    const { cartItems, removeFromCart } = useContext(CartContext);

    if(cartItems.length === 0){
        return(
            <h1 className="font-serif flex justify-center my-40 text-3xl font-bold">
                Your cart is empty 🤷🏻‍♂️
            </h1>
        )
    }
    return(
        <section>

            <h1 className="font-serif mb-8 text-3xl font-bold">
                Shopping Cart 
            </h1>

            <div className="space-y-4">
                {cartItems.map((product) => (

                    <div
                        key={product.id}
                        className="flex items-center gap-4 rounded-xl border p-4"
                    >

                       <img
                            src={product.image}
                            alt={product.title}
                            className="h-20 w-20 object-contain"
                       />
                       <div className="flex-1">
                            <h2 className="font-serif font-bold">
                                {product.title}
                            </h2>
                            <p className="font-bold text-green-500">
                                ${product.price}
                            </p>
                       </div>

                    <button
                        onClick = {() => removeFromCart(product.id)}
                        className="font-serif mt-2 rounded-lg bg-red-500 px-4 py-2 text-white cursor-pointer hover:bg-red-600"
                    >
                        Remove
                    </button>

                    </div>
                ))}


            </div>
        </section>
    );
}
export default Cart;