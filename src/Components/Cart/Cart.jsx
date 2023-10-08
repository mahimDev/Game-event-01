

const Cart = ({ data }) => {
    const { name, price, description, image } = data;
    return (
        <div style={{ backgroundImage: `${image}` }} className="relative grid  w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center text-gray-700">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 py-14 px-6 md:px-12">
                <h2 className="mb-6 block font-sans text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    {name}
                </h2>
                <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                    ${price}
                </h5>
                <button className="btn glass font-normal">Details</button>

            </div>
        </div>
    );
};

export default Cart;