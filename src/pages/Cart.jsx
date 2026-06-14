import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Cart(){

    const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart } = useContext(CartContext);

    if(cartItems.length === 0){
        return(
            <div className="font-serif my-50 text-center">
                <h1 className="text-4xl font-bold">
                    Your cart is empty 🛒
                </h1>
                <p className="mt-3 text-gray-500">
                    Add some products and come back 
                </p>
                <Link
                    to="/"
                    className="font-serif font-semibold mt-6 inline-block rounded-lg bg-green-500 px-6 py-3 text-white cursor-pointer transition hover:scale-102 hover:bg-green-600"
                >
                    Continue Shopping
                </Link>
            </div>
        )
    }

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity, 
        0
    );
    return(
        <section>

            <h1 className="font-serif mb-8 text-3xl font-bold">
                Shopping Cart 
            </h1>

            <div className="space-y-4">
                {cartItems.map((product) => (

                    <div
                        key={product.id}
                        className="flex flex-col gap-4 rounded-xl border p-4 md:flex-row md:items-center"
                    >

                       <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="h-20 w-20 object-contain"
                       />
                       <div className="flex-1">
                            <h2 className="font-serif font-bold">
                                {product.title}
                            </h2>

                            <p className="font-serif font-semibold text-gray-500">
                                Quantity: {product.quantity}
                            </p>

                            <p className="font-bold text-green-500">
                                ${product.price.toFixed(2)}
                            </p>
                       </div>

                    <div className="mt-2 flex items-center gap-3">
                        <button 
                            onClick = {() => decreaseQty(product.id)}
                            className="rounded border px-3 py-1 cursor-pointer transition hover:scale-101"
                        >
                            -
                        </button>

                        <span className="font-serif font-semibold">
                            {product.quantity}
                        </span>

                        <button
                            onClick = {() => increaseQty(product.id)}
                            className="rounded border px-3 py-1 cursor-pointer transition hover:scale-101"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick = {() => { 
                            removeFromCart(product.id);
                            toast.error("Item Removed 🗑️")
                        }}

                        className="font-serif mt-2 rounded-lg bg-red-500 px-4 py-2 text-white cursor-pointer hover:bg-red-600 transition hover:scale-101"
                    >
                        Remove
                    </button>

                    </div>

                ))}

                <div className="mt-6 flex justify-end">
                    <div className="rounded-3xl border p-5 w-full max-w-[280px]">

                        <h2 className="text-3xl font-bold">
                            Total: ${totalPrice.toFixed(2)}
                        </h2>

                    <button
                        onClick = {() => {
                            clearCart();
                            toast.error("Cart Emptied 🧹");
                        }}
                        className="font-serif mt-4 w-full font-bold rounded-lg border cursor-pointer px-4 py-2 transition hover:scale-101"
                    >
                        Clear Cart
                    </button>
                    </div>
                </div>
                <Link
                    to="/checkout"
                    className="font-serif block rounded-lg bg-green-500 py-3 text-center font-bold text-white hover:bg-green-600"
                >
                    Proceed to Checkout
                </Link>

            </div>
        </section>
    );
}
export default Cart;