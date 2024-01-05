import { useEffect, useState } from "react";
import InstInfo from "../InstInfo/InstInfo";
import { Helmet } from "react-helmet-async";



const AllInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('instdata.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
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