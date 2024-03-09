import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { Children } from "react";


const AdminRoute = ({Children}) => {
    const {user,loading}= useAuth()
    const [isAdmin,isAdminLoading] = useAdmin() 
    const location = useLocation()
    if(loading || isAdminLoading){
        return <progress></progress>
    }
    if(user && isAdmin){
        return Children;
    }
    return <Navigate to='/' state={{from:location}} replace></Navigate>  
};

export default AdminRoute;