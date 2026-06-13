import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx'


import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: "product/:id",
                element: <ProductDetails/>,
            },
            {
                path: "cart",
                element: <Cart/>,
            },
            {
                path: "favorites",
                element: <Favorites/>,
            },
            {
                path: "checkout",
                element: <Checkout/>
            },
        ],
    },
]);

function App(){
    return(
        <RouterProvider router={router} />
    );
}
export default App;