import data from "@/data.json"
import ProductCard from "./ProductCard";

function ProductsList() {
    return (
        <div className="w-2/3 p-2 h-full">
            <h1 className="text-4xl font-bold my-5">Desserts</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.map(product => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
