
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const {signIn,logOut} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            if(user?.email){
                navigate('/')
            }
            Swal.fire({
                title: "User login successfull",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        })
    }
    logOut()
    .then(() => {
      })
    .catch((error) =>console.log(error));

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then (result=>{
            const user = result.user;
            console.log(user);       
                navigate('/')
        })
        .catch(error=>{
            console.log(error.message);
            toast.error(error.message)
        })
    }
    return (
        <>
        <Helmet>
        <title>physical || Login </title>
      </Helmet>
      <div className="hero min-h-screen bg-white-700">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-600">
                <h2 className="text-center text-2xl text-white mt-6">Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name = 'email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name = 'password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 ">
                            <input className="btn btn-white" type="submit" value="Login" />
                        </div>
                        <p className="text-center">-------OR-------</p>
                        <div className="flex text-center m-auto">
                             <p>SignIn With</p> 
                            <FaGoogle className="text-2xl text-white ml-4" onClick={handleGoogleSignIn} />
                        </div>
                         
                    </form>
                    <p className="text-center mb-6 text-lg"><small>Donot have an account?<Link className="text-white text-2xl ml-4" to='/signup'>SignUp</Link></small></p>
                </div>
            </div>
        </>
    );
};

export default Login;