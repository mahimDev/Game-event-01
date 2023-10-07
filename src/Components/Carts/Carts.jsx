import Cart from "../Cart/Cart";


const Carts = ({ load }) => {

    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    load.map(data => <Cart key={data.id} data={data}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;