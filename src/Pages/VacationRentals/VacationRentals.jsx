import { useBannerContext } from "../../Contexts/BannerContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import 'animate.css';


const VacationRentals = () => {
    const {vacationData} = useBannerContext();
    console.log(vacationData);
    return (
        <div className="lg:w-[1170px] mx-auto my-12 p-5 ">
            <h1  className="text-center text-3xl tracking-wider text-[#222222] font-medium  animate__animated animate__bounce animate__delay-2s">Vacation Rentals Property</h1>
            <p className="text-[#5C727D] my-6 text-center leading-6 animate__animated animate__bounce animate__delay-2s ">These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.</p>
            
            <div className=" flex justify-center ">
                
                <Swiper
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay = {{delay : 2610}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {vacationData.map((data) => (
                    <SwiperSlide className=" w-full h-full  flex flex-col md:flex md:flex-row lg:flex lg:flex-row rounded-xl border border-[#afb3b5]" key={data.id}>
                        <div className=" w-full h-full flex flex-col justify-evenly lg:p-2 ">
                            <div className="rounded-lg">
                                <img className=" rounded-lg" src={data.imgUrl} alt="" />
                            </div>
                            <div className="flex flex-col justify-between p-4">
                                <h1 className="text-lg font-semibold my-4 ">{data.title}</h1>
                                <p className="font-medium text-blue-400 mb-3 ">{data.price}</p>
                                <p className="font-medium text-gray-400 mb-3 ">{data.description}</p>
                                <button className="btn btn-success bg-[#aea] text-black hover:text-white ">Check Now</button>
                            </div>
                        
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                
            </div>
        </div>
    );
};

export default VacationRentals;