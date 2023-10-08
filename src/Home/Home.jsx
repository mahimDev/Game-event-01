import { useLoaderData } from "react-router-dom";
import Carts from "../Components/Carts/Carts";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Home = () => {
    const load = useLoaderData()

    return (
        <div>

            <Banner></Banner>
            <Carts load={load}></Carts>

            <Footer></Footer>
        </div>
    );
};

export default Home;