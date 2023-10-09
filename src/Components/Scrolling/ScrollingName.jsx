import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const ScrollingName = () => {


    return (
        <div>
            <Marquee className=" text-gray-500 text-7xl font-bold mt-10  " pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
                <Link className="ml-5" to="/">     Virtual Reality Expo</Link>
                <Link className="ml-5" to="/">    Indie Game Showcase</Link>
                <Link className="ml-5" to="/">     Retro Gaming Revival</Link>
                <Link className="ml-5" to="/">     Fantasy Game Expo</Link>
                <Link className="ml-5" to="/">     GamerCon International</Link>
                <Link className="ml-5" to="/">     GameFest 2023</Link>
                <Link className="ml-5" to="/">     Retro Gaming Revival</Link>
            </Marquee>
        </div>
    );
};

export default ScrollingName;