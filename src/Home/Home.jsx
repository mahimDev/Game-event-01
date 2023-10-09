import { useLoaderData } from "react-router-dom";
import Carts from "../Components/Carts/Carts";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import ScrollingName from "../Components/Scrolling/ScrollingName";
import Hero from "../Components/Hero/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init();
    const load = useLoaderData()

    return (
        <div>

            <Banner></Banner>
            <ScrollingName></ScrollingName>
            <Carts load={load}></Carts>
            <h1 className="text-4xl font-bold text-center">Our Sarvis</h1>
            <Hero></Hero>
            <Footer></Footer>
        </div>
    );
};

export default Home;