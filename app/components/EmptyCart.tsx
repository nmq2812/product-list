function EmptyCart() {
    return (
        <div className="mt-5 text-gray-500 flex flex-col items-center">
            <img src="assets/images/illustration-empty-cart.svg" alt="Empty cart illustration" className="mb-4" />
            <p className="text-bold text-rose-500">Your added items will appear here</p>
        </div>
    );
}

export default EmptyCart;