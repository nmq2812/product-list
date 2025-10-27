function ProductCard({ product }: { product: Product }) {
    return (
        <div className="pb-2">
            <div className="relative">
                <img
                    src={product.image.thumbnail}
                    alt={product.name}
                    className="w-full rounded-2xl mb-6"
                />
                <div className="absolute -bottom-5 rounded-full bg-rose-50 mx-8 p-2 inset-x-0 cursor-pointer border-rose-400 border flex justify-center gap-2">
                    <img src="assets/images/icon-add-to-cart.svg" alt="cart-icon" />
                    Add to cart
                </div>
            </div>
            <span className="text-rose-400 font-semibold text-sm">{product.category}</span>
            <h3 className="text-md font-semibold mb-2">{product.name}</h3>   
            <span className="font-semibold text-red-custom">${product.price.toFixed(2)}</span>
        </div>
    );
}

export default ProductCard;
