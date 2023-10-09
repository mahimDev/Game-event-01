import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <div className="h-[95vh] mx-auto overflow-hidden">

            <Slider {...settings}>
                <div>
                    <img src="https://i.ibb.co/QJhfNSM/game2.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/s3vCsQd/game1.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/mJPLzTy/game3.jpg" alt="" />
                </div>

            </Slider>
        </div>
    );
};

export default Banner;