import { Helmet } from "react-helmet-async";
import useCarts from "../../hooks/useCarts";
import InstructorItem from "../InstructorItem/InstructorItem";



const InstructorsClass = () => {
    const [carts] = useCarts()
    return (
        <div>
            <Helmet>
                <title> physical || Instructorsclass </title>
            </Helmet>
            <div className="grid md:grid-cols-3">
                {
                    carts.map((cart) => <InstructorItem
                   key={cart.id} cart={cart}
                   >
                    </InstructorItem>)
                }
            </div> 
        </div>
    );
};

export default InstructorsClass;