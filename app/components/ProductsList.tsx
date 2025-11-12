import data from "@/data.json";
import ProductCard from "./ProductCard";

function ProductsList({
    cartItems,
    addToCart,
    open,
}: {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    open: boolean;
}) {
    return (
        <div
            className="w-full md:w-2/3 p-4 h-full"
            style={{
                overflowY: open ? "hidden" : "scroll",
                scrollbarWidth: "none",
            }}
        >
            <h1 className="text-4xl font-bold my-5">Desserts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((product: Product) => (
                    <ProductCard
                        key={product.name}
                        product={product}
                        cartItems={cartItems}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
