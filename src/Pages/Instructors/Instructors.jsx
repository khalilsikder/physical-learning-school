import { Helmet } from "react-helmet-async";
import SingleCart from "../SingleCart/SingleCart";
import useCarts from "../../hooks/useCarts";


const Instructors = () => {
    const [carts] = useCarts()
    // const [carts, setCarts] = useState([])
    // useEffect(() => {
    //     fetch('instdata.json')
    //         .then(res => res.json())
    //         .then(data => setCarts(data))
    // }, [])
    return (
        <>
            <Helmet>
                <title> physical || Instructors </title>
            </Helmet>
            <div className="grid md:grid-cols-3">
                {
                    carts.map((cart) => <SingleCart
                        key={cart.id} cart={cart}
                    ></SingleCart>)
                }
            </div>
        </>

    );
};

export default Instructors;