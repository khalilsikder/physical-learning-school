import { useQuery } from "@tanstack/react-query";


const useManageUser = () => {
    const { data:user = [] }= useQuery({
    queryKey:['users'],
    queryFn: async () =>{
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    },
   })
   return [user]
};

export default useManageUser;
