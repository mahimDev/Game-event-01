

const BlogCart = ({ cart }) => {
    const { image, name, description } = cart;
    console.log(cart)
    return (
        <div>
            <div className="hero gap-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;