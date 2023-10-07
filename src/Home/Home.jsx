import { useLoaderData } from "react-router-dom";
import Carts from "../Components/Carts/Carts";
import Footer from "../Footer/Footer";

const Home = () => {
    const load = useLoaderData()

    return (
        <div>
            <h1>home</h1>
            <Carts load={load}></Carts>

            <Footer></Footer>
        </div>
    );
};

export default Home;