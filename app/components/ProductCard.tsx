function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <div className="relative">
                <img
                    src={product.image.thumbnail}
                    alt={product.name}
                    className="w-full rounded-2xl mb-4"
                />
                <div className="absolute -bottom-5 rounded-full bg-rose-50 mx-8 p-2 inset-x-0 text-center cursor-pointer">Add to cart</div>
            </div>
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
