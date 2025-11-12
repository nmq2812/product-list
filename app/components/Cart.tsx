"use client";
import EmptyCart from "./EmptyCart";

function Cart({
    cartItems,
    removeFromCart,
    open,
    setOpen,
}: {
    cartItems: CartItem[];
    removeFromCart: (productName: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}) {
    const parsedItems = cartItems;
    return (
        <>
            <div className="grow">
                <div className="fixed lg:min-w-97 bg-white p-6 mt-10 ms-4 rounded-xl">
                    <h2 className="text-2xl font-bold text-red-custom">{`Your cart (${parsedItems.length})`}</h2>
                    {parsedItems.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        <>
                            <ul
                                className="max-h-[50vh] w-full mt-5 space-y-4 overflow-y-auto small-scrollbar"
                                style={{
                                    scrollbarWidth: "none",
                                }}
                            >
                                {parsedItems.map(
                                    (item: CartItem, index: number) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center pb-2"
                                        >
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={
                                                        item?.product.image
                                                            ?.thumbnail
                                                    }
                                                    alt={item?.product.name}
                                                    className="w-16 h-16 rounded-lg"
                                                />
                                                <div>
                                                    <h3 className="font-semibold">
                                                        {item.product.name}
                                                    </h3>
                                                    <span className="text-red-custom font-semibold">
                                                        $
                                                        {item.product.price?.toFixed(
                                                            2,
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="font-semibold">
                                                    x{item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        removeFromCart(
                                                            item.product.name,
                                                        )
                                                    }
                                                >
                                                    <img
                                                        src="assets/images/icon-remove-item.svg"
                                                        alt=""
                                                    />
                                                </button>
                                            </div>
                                        </li>
                                    ),
                                )}
                            </ul>
                            <div className="mt-5 p-3 border-t border-rose-900/30 flex justify-between items-center">
                                <span className="text-rose-500">
                                    Order total:{" "}
                                </span>
                                <span className="font-bold text-2xl">
                                    $
                                    {parsedItems
                                        .reduce(
                                            (total, item) =>
                                                total +
                                                item.product.price *
                                                    item.quantity,
                                            0,
                                        )
                                        .toFixed(2)}
                                </span>
                            </div>
                            <div className="bg-rose-50 p-2 flex justify-center items-center gap-2">
                                <img
                                    src="assets/images/icon-carbon-neutral.svg"
                                    alt=""
                                />
                                <p className="text-rose-500">
                                    This is a{" "}
                                    <span className="font-bold">
                                        carbon-neutral
                                    </span>{" "}
                                    delivery
                                </p>
                            </div>
                            <button
                                className="cursor-pointer mt-3 p-3 bg-red-custom text-rose-100 text-xl w-full rounded-2xl"
                                onClick={() => setOpen(true)}
                            >
                                Confirm Order
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div
                className="absolute bg-black/50 p-10 inset-0 justify-center items-center"
                style={{
                    display: open ? "flex" : "none",
                }}
                onClick={() => {
                    setOpen(false);
                }}
            >
                <div
                    className="bg-rose-50 w-2/5 flex flex-col p-10 rounded-xl gap-6"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <img
                        className="w-12 h-12"
                        src="assets/images/icon-order-confirmed.svg"
                        alt=""
                    />
                    <h1 className="text-4xl text-rose-900 font-bold">
                        Order Confirm
                    </h1>
                    <ul
                        className="max-h-[50vh] w-full mt-5 space-y-4 overflow-y-auto small-scrollbar bg-rose-100 p-5 rounded-lg"
                        style={{
                            scrollbarWidth: "none",
                        }}
                    >
                        {parsedItems.map((item: CartItem, index: number) => (
                            <li
                                key={index}
                                className="flex justify-between items-center pb-2"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item?.product.image?.thumbnail}
                                        alt={item?.product.name}
                                        className="w-16 h-16 rounded-lg"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {item.product.name}
                                        </h3>
                                        <span className="text-red-custom font-semibold">
                                            ${item.product.price?.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold">
                                        x{item.quantity}
                                    </span>
                                </div>
                            </li>
                        ))}
                        <div className="mt-5 p-3 flex justify-between items-center">
                            <span className="text-rose-500">Order total: </span>
                            <span className="font-bold text-2xl">
                                $
                                {parsedItems
                                    .reduce(
                                        (total, item) =>
                                            total +
                                            item.product.price * item.quantity,
                                        0,
                                    )
                                    .toFixed(2)}
                            </span>
                        </div>
                    </ul>

                    <button
                        className="cursor-pointer w-full p-2 bg-red-custom rounded-3xl text-rose-50 text-xl"
                        onClick={() => {
                            setOpen(false);
                            window.location.reload();
                        }}
                    >
                        Start New Order
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cart;
