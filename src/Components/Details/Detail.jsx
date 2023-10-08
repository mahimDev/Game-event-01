
const Detail = ({ value }) => {
    const { name, image } = value;
    // console.log(value)
    return (
        <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Detail;