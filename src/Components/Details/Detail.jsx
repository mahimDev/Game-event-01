
const Detail = ({ value }) => {
    const { name, image, description } = value;
    // console.log(value)
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">Event Details</h1>
            <div className="grid md:grid-cols-2 mt-10 items-center gap-5 mx-10">
                <div>
                    <img className="rounded-full col-span-1" src={image} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold my-5">{name}</h1>
                    <p className="text-lg font-medium">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;