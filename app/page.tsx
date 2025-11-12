"use client";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import React from "react";

export default function Home() {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
    const [open, setOpen] = React.useState(false);

    const addToCart = (product: Product, quantity: number) => {
        const itemIndex = cartItems.findIndex(
            (item: CartItem) => item.product.name === product.name,
        );

        if (itemIndex > -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].quantity += quantity;

            if (updatedCartItems[itemIndex].quantity <= 0) {
                updatedCartItems.splice(itemIndex, 1);
            }

            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { product: { ...product }, quantity }]);
        }
    };

    const removeFromCart = (productName: string) => {
        const updatedCartItems = cartItems.filter(
            (item: CartItem) => item.product.name !== productName,
        );
        setCartItems(updatedCartItems);
    }

    return (
        <div className="container mx-auto w-full h-screen flex flex-col md:flex-row items-top justify-around">
            <ProductsList cartItems={cartItems} addToCart={addToCart} open={open} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} open={open} setOpen={setOpen} />
        </div>
    );
}
