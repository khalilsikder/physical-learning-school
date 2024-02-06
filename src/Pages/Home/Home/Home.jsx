
import { Helmet } from "react-helmet-async";
import PopularClass from "../PopularClass/PopularClass";
import Slider from "../Slider/Slider";
import PopularInstructors from "../PopularInstructors/PopularInstructors";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title> physical || Home </title>
            </Helmet>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;