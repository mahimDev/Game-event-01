import Cart from "../Cart/Cart";


const Carts = ({ load }) => {

    return (
        <div>

            <div className="">

                <h1 className="text-5xl font-poppins text-gradient-to-r from-[#000000] to-[#434343]  font-bold text-center my-20 ">Our Gaming Event</h1>


            </div>
            <div className="grid md:grid-cols-3 mb-20 gap-5">
                {
                    load.map(data => <Cart key={data.id} data={data}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;