import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data:cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/instructor?email=${user.email}`)
            return res.json();
        },
    })
    return [refetch,cart]
};

export default useCart;