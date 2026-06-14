import { Link } from "react-router-dom";

function OrderSuccess() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <div className="text-7xl">
                🎉
            </div>

            <h1 className="font-serif mt-6 text-5xl font-bold">
                Order Placed!
            </h1>

            <p className="font-serif mt-4 max-w-md text-gray-500">
                Thank you for shopping with ShopHub.
                Your order has been successfully placed.
            </p>

            <Link
                to="/"
                className="font-serif mt-8 rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
            >
                Continue Shopping
            </Link>
        </div>
    );
}

export default OrderSuccess;