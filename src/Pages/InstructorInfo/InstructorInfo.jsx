import useInstructors from "../../hooks/useInstructors";
import InstInfo from "../InstInfo/InstInfo";
import InstructorsClass from "../InstructorClass/InstructorsClass";


const InstructorInfo = () => {
    const [instructor] = useInstructors()
    return (
        <div>
            <div className="grid md:grid-cols-3">
                {
                    instructor.map((instructor) => <InstructorsClass
                        key={instructor.id} instructor={instructor}
                    ></InstructorsClass>)
                }
            </div> 
        </div>
    );
};

export default InstructorInfo;