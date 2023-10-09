import { useLoaderData } from "react-router-dom";
import Carts from "../Components/Carts/Carts";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import ScrollingName from "../Components/Scrolling/ScrollingName";

const Home = () => {
    const load = useLoaderData()

    return (
        <div>

            <Banner></Banner>
            <ScrollingName></ScrollingName>
            <Carts load={load}></Carts>

            <Footer></Footer>
        </div>
    );
};

export default Home;