import Image from "next/image";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

export default function Home() {
    return (
        <div className="container mx-auto w-full h-screen flex flex-col md:flex-row items-center justify-around">
            <ProductsList />
            <Cart />
        </div>
    );
}
