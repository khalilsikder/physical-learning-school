import { Link } from "react-router-dom";

const InstructorItem = ({ cart }) => {
    const { image, name, instructorName, availableSeats, price } = cart
    return (

        <div className="mt-24 mb-8 mx-auto text-center">
            <img src={image} alt="" />
            <h2 className="mt-4 text-xl">Name: {name}</h2>
            <p className="m-2">InstructorName: {instructorName}</p>
            <p className="m-2">AvailableSeats: {availableSeats}</p>
            <p className="m-2">Price: ${price}</p>
            {
                
            }
            <Link to='/login'><button className="btn btn-active btn-neutral">Select</button></Link>
        </div>
    );
};

export default InstructorItem;