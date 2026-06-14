import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import Select from "react-select";
import { useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {

    const navigate = useNavigate();
    const { cartItems, clearCart } = useContext(CartContext);
    const { darkMode } = useContext(ThemeContext);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        country: ""
    });

    const countryOptions = useMemo(() => countryList().getData(),[]);

    const handleCountryChange = (selectedOption) => {
        setFormData({
            ...formData,
            country: selectedOption.label,
        });
    };

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();

        clearCart();

        toast.success("Order placed successfully! 🎉");

        navigate("/order-success");
    }

    if (cartItems.length === 0) {
        return (
            <div className="text-center">
                <h2 className="font-serif text-4xl font-bold">
                    Your cart is empty 🛒
                </h2>

                <Link
                    to="/"
                    className="mt-6 inline-block rounded-lg bg-green-500 px-6 py-3 text-white"
                >
                    Go Shopping
                </Link>
            </div>
        );
    }
    
    return (
        <section className="mx-auto max-w-5xl">
            <h1 className="font-serif mb-8 text-4xl font-bold">
                Checkout
            </h1>

            <div className="grid gap-8 md:grid-cols-2">
                <form
                    onSubmit={handleSubmit}
                    className={`rounded-2xl p-8 shadow-lg
                        ${darkMode ? "bg-gray-900 border border-gray-800":"bg-white"}
                        `}
                >
                    <h2 className="font-serif mb-6 text-2xl font-bold">
                        Shipping Details
                    </h2>

                    <div className="font-serif space-y-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            required
                            onChange={handleChange}
                            className={`w-full rounded-lg border py-4 pl-3
                                ${darkMode
                                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                    : "bg-white border-gray-300"}
                            `}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={handleChange}
                            className={`w-full rounded-lg border py-4 pl-3
                                ${darkMode
                                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                    : "bg-white border-gray-300"}
                            `}
                        />
                        <Select
                            options={countryOptions}
                            placeholder="Select Country"
                            onChange={handleCountryChange}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    backgroundColor: darkMode ? "hsla(215, 28%, 17%, 1.00)" : "hsla(0, 0%, 100%, 1.00)",
                                    borderColor: darkMode ? "hsla(217, 19%, 27%, 1.00)" : "hsla(216, 12%, 84%, 1.00)",
                                    color: darkMode ? "hsla(0, 0%, 100%, 1.00)" : "hsla(0, 0%, 0%, 1.00)",
                                    minHeight: "56px",
                                }),

                                singleValue: (base) => ({
                                    ...base,
                                    color: darkMode ? "hsla(0, 0%, 100%, 1.00)" : "hsla(0, 0%, 0%, 1.00)",
                                }),

                                input: (base) => ({
                                    ...base,
                                    color: darkMode ? "hsla(0, 0%, 100%, 1.00)" : "hsla(0, 0%, 0%, 1.00)",
                                }),

                                menu: (base) => ({
                                    ...base,
                                    backgroundColor: darkMode ? "hsla(215, 28%, 17%, 1.00)" : "hsla(0, 0%, 100%, 1.00)",
                                }),

                                option: (base, state) => ({
                                    ...base,
                                    backgroundColor: state.isFocused
                                        ? darkMode
                                            ? "hsla(217, 19%, 27%, 1.00)"
                                            : "hsla(220, 14%, 96%, 1.00)"
                                        : darkMode
                                        ? "hsla(215, 28%, 17%, 1.00)"
                                        : "hsla(0, 0%, 100%, 1.00)",
                                    color: darkMode ? "hsla(0, 0%, 100%, 1.00)" : "hsla(0, 0%, 0%, 1.00)",
                                }),

                                placeholder: (base) => ({
                                    ...base,
                                    color: darkMode ? "hsla(218, 11%, 65%, 1.00)" : "hsla(220, 9%, 46%, 1.00)",
                                }),
                            }}
                        />
                            
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            required
                            onChange={handleChange}
                            className={`w-full rounded-lg border py-4 pl-3
                                ${darkMode
                                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                    : "bg-white border-gray-300"}
                            `}
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            required
                            onChange={handleChange}
                            className={`w-full rounded-lg border py-4 pl-3
                                ${darkMode
                                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                    : "bg-white border-gray-300"}
                            `}
                        />
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-green-500 py-3 font-bold text-white cursor-pointer hover:bg-green-600"
                        >
                            Place Order
                        </button>
                        
                        <Link
                            to="/"
                        >
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-red-500 py-3 font-bold text-white cursor-pointer hover:bg-red-600"
                        >
                            Decline
                        </button>
                        </Link>

                    </div>
                </form>

                <div className={`rounded-2xl p-8 shadow-lg
                    ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"}
                `}
                >
                    <h2 className="font-serif mb-6 text-2xl font-bold">
                        Order Summary
                    </h2>

                    <div className="space-y-3">
                        <p className="font-serif">
                            Products: {cartItems.length}
                        </p>
                        <p className="font-serif">
                            Shipping: Free 🚚
                        </p>
                        <p className="text-2xl font-bold text-green-500">
                            Total: ${total.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checkout;