import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from '@tanstack/react-query'

const useTablecarts = () => {
const {user} = useContext(AuthContext);
const { refetch, data:cart = [] } = useQuery({
    queryKey: ['users',user?.email],
    queryFn: async () =>{
        const res = await fetch(`http://localhost:5000/users?email=$(user.email)`)
        return res.json()
    },
  })
    return [cart,refetch]
}
export default useTablecarts