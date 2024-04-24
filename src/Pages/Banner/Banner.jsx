import { useBannerContext } from "../../Contexts/BannerContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import './Banner.css';
import { Link } from "react-router-dom";

const Banner = () => {
    const { bannerData } = useBannerContext();

    // console.log(bannerData[0]);

    return (
        <>
            <div className="lg:w-[1170px] mx-auto flex justify-center ">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    autoplay={{ delay: 2610 }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {bannerData.map((data) => (
                        <SwiperSlide key={data.id}>
                            <div className="relative ">
                                <img className="w-full" src={data.url} alt="" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="p-4 text-center bg-black bg-opacity-40">
                                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                            Find Your Dream Home
                                        </h1>
                                        <p className="text-white text-lg md:text-xl lg:text-2xl">
                                            We are recognized for exceeding client expectations and delivering great results <br /> through dedication, ease of process, and extraordinary services to our worldwide clients.
                                        </p>
                                        <Link to={'/'}><button className="btn my-2 md:my-4 lg:my-6 btn-secondary">Explore</button></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Banner;
