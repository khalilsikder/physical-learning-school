
import { Helmet } from "react-helmet-async";
import Instructors from "../Instructors/Instructors";
import PopularClass from "../PopularClass/PopularClass";
import Slider from "../Slider/Slider";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title> physical || Home </title>
            </Helmet>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;