"use client";
import { use, useEffect, useState } from "react";

function ProductCard({
    product,
    cartItems,
    addToCart,
}: {
    product: Product;
    cartItems: CartItem[];
    addToCart: (product: any, quantity: number) => void;
}) {
    const [isAdded, setIsAdded] = useState(false);
    const [productQuantity, setProductQuantity] = useState(0);

    useEffect(() => {
        setIsAdded(productQuantity > 0);
    }, [productQuantity]);

    useEffect(() => {
        const cartItem = cartItems.find((item) => item.product.name === product.name);
        if (cartItem) {
            setProductQuantity(cartItem.quantity);
        } else {
            setProductQuantity(0);
        }
    }, [cartItems, product.name]);
    
    return (
        <div className="pb-2">
            <div className="relative">
                <img
                    src={product.image.thumbnail}
                    alt={product.name}
                    className="w-full rounded-2xl mb-6"
                />
                <div
                    className="absolute -bottom-5 rounded-full bg-rose-50 mx-8 p-2 inset-x-0 cursor-pointer border-rose-400 border flex justify-center gap-2"
                    style={{
                        display: !isAdded ? "flex" : "none",
                    }}
                    onClick={() => {
                        setIsAdded(true);
                        setProductQuantity(1);
                        addToCart(product, 1);
                    }}
                >
                    <img
                        src="assets/images/icon-add-to-cart.svg"
                        alt="cart-icon"
                    />
                    Add to cart
                </div>
                <div
                    className="absolute -bottom-5 rounded-full bg-red-custom mx-8 p-2 inset-x-0 border-rose-400 border items-center justify-between gap-2"
                    style={{
                        display: isAdded ? "flex" : "none",
                    }}
                >
                    <button
                        className="border border-rose-50 text-rose-50 hover:text-red-custom hover:bg-rose-50 rounded-full w-5 h-5 text-xl flex items-center justify-center cursor-pointer"
                        onClick={() => {
                            setProductQuantity((prev) => Math.max(prev - 1, 0));
                            addToCart(product, -1);
                        }}
                    >
                        -
                    </button>
                    <span className="text-rose-50">{productQuantity}</span>
                    <button
                        className="border border-rose-50 text-rose-50 hover:text-red-custom hover:bg-rose-50 rounded-full w-5 h-5 text-xl flex items-center justify-center cursor-pointer"
                        onClick={() => {
                            setProductQuantity((prev) => prev + 1);
                            addToCart(product, 1);
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
            <span className="text-rose-400 font-semibold text-sm">
                {product.category}
            </span>
            <h3 className="text-md font-semibold mb-2">{product.name}</h3>
            <span className="font-semibold text-red-custom">
                ${product.price.toFixed(2)}
            </span>
        </div>
    );
}

export default ProductCard;
