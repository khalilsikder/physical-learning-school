
import { Link } from "react-router-dom";
import Container from "../Container";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{

        })
        .catch(error => console.log(error))
    }
    return (
        <div className="fixed w-full z-10 bg-slate-700 text-white shadow-sm">
            <div className="py-4 border-b-[1px]">
             <Container>
                <div className="flex flex-row items-center justify-between">
                    <div><Logo></Logo></div>
                    <div>
                        <p>Instructors</p>
                    </div>
                    <div className="flex flex-row  items-center">
                    { user? <>
                    <Link className="mr-80" to='/dashboard'>Dashboard</Link>
                    <span><img src={user.photoURL} alt="" /></span>
                    <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                    </> : <>
                    <Link to='/login'>Login</Link>
                    </>
                   }
                    </div>
                </div>
             </Container>
            </div>
            
        </div>
    );
};

export default Navbar;