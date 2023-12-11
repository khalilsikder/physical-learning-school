import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import slider1 from '../../../assets/jogging.jpg'
import slider2 from '../../../assets/walk.jpg'

const Slider = () => {
    return (
        <Carousel>
            <div>
                <img src={slider1} />
            </div>
            <div>
                <img src={slider2} />
            </div>
        </Carousel>
    );
};

export default Slider;