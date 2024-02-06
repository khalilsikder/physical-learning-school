import { useEffect, useState } from "react";

const useCarts = () =>{
    const [carts, setCarts] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('instdata.json')
            .then(res => res.json())
            .then(data => {
                setCarts(data);
                setLoading(false);
            })
    }, [])
        return [carts,loading];
}

export default useCarts;