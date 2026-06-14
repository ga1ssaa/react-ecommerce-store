import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <h1 className="text-8xl font-bold">
                404
            </h1>

            <p className="font-serif mt-4 text-2xl text-gray-500">
                Oops! Page not found 😔
            </p>

            <p className="font-serif mt-2 text-gray-400">
                The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="font-serif mt-8 rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600 hover:scale-105"
            >
                🏠 Back to Home
            </Link>
        </div>
    );
}

export default NotFound;