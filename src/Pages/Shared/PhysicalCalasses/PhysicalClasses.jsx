import { useEffect, useState } from "react";
import Classitem from "../ClassItem/Classitem";

const PhysicalClasses = () => {
    const [Physical,setPhysical] = useState([])
    useEffect(() => {
        fetch('classdata.json')
        .then(res =>res.json())
        .then(data =>setPhysical(data))
    },[])
    return (
        <div>
           {
            Physical.map(item=><Classitem
            key={item.id} item={item}
                 ></Classitem>)
           } 
        </div>
    );
};

export default PhysicalClasses;