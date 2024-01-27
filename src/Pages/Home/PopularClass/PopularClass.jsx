import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/jogging.jpg'
import img2 from '../../../assets/class2.jpg'
import img3 from '../../../assets/walk.jpg'
import img4 from '../../../assets/class6.jpg'
import img5 from '../../../assets/class4.jpg'
import img6 from '../../../assets/class5.jpg'

const PopularClass = () => {
    return (
            <Swiper className='mt-5 mb-5'
                spaceBetween={10}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" />
                </SwiperSlide>
            </Swiper>
    );
};

export default PopularClass;