import { useEffect, useState } from "react";
import BlogCart from "./BlogCart";


const Blog = () => {
    const [value, setvalue] = useState([])
    useEffect(() => {
        fetch('Game.json')
            .then(res => res.json())
            .then(data => setvalue(data))
    }, [])

    console.log(value)
    return (
        <div>
            {
                value.map(cart => <BlogCart key={cart.id} cart={cart}></BlogCart>)
            }
        </div >
    );
};

export default Blog;