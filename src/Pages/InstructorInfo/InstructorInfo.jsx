import useCarts from "../../hooks/useCarts";
import InstructorsClass from "../InstructorClass/InstructorsClass";


const InstructorInfo = () => {
    const [carts] = useCarts()
    return (
        <div>
            <div className="grid md:grid-cols-3">
                {
                    carts.map((cart) => <InstructorsClass
                        key={cart.id} cart={cart}
                    ></InstructorsClass>)
                }
            </div> 
        </div>
    );
};

export default InstructorInfo;