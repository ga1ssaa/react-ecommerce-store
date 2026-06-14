import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

function CartProvider({ children }){

    const [cartItems, setCartItems] = useLocalStorage("cart", []);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existingItem = prev.find(
                (item) => item.id === product.id
            );

            if(existingItem){
                return prev.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity+1,} : item);
            }
            return [
                ...prev,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    const increaseQty = (id) => {
        setCartItems((prev) => prev.map((item) => 
            item.id === id ? {...item, quantity: item.quantity + 1,} : item)
        );
    }

    const decreaseQty = (id) => {
        setCartItems((prev) => 
            prev.map((item) => item.id === id ? {...item, quantity: item.quantity -1,} : item)
                .filter((item) => item.quantity > 0)
        );
    }
    
    const removeFromCart = (id) => {
        setCartItems((prev) => 
            prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    }

    

    return(
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseQty,
                decreaseQty,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
