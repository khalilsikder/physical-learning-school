import InstInfo from "../InstInfo/InstInfo";
import { Helmet } from "react-helmet-async";
import useInstructors from "../../hooks/useInstructors";



const AllInstructors = () => {
    const [instructors] = useInstructors()
    // const [instructors, setInstructors] = useState([])
    // useEffect(() => {
    //     fetch('instdata.json')
    //         .then(res => res.json())
    //         .then(data => setInstructors(data))
    // }, [])
    return (
        <>
            <Helmet>
                <title> physical || Instructors </title>
            </Helmet>
            <div className="grid md:grid-cols-3">
                {
                    instructors.map((instructor) => <InstInfo
                        key={instructor.id} instructor={instructor}
                    ></InstInfo>)
                }
            </div>
        </>

    );
};

export default AllInstructors;