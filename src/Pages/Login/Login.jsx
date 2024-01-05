
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { app } from "../../firebase/firebase.config";


const Login = () => {
    const auth = getAuth(app);
    const googleprovider = new GoogleAuthProvider()
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.password;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,googleprovider)
        .then (result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <>
        <Helmet>
        <title>physical || Login </title>
      </Helmet>
      <div className="hero min-h-screen bg-white-700">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-blue-700">
                <h2 className="text-center text-2xl text-white mt-6">Please login</h2>
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
                            <input className="btn btn-primary" type="submit" value="login" />
                        </div>
                        <p className="text-center">-------OR-------</p>
                        <div className="flex text-center m-auto">
                             <p>SignIn With</p> 
                            <FaGoogle className="text-purple-900 text-2xl ml-4" onClick={handleGoogleSignIn} />
                        </div>
                         
                    </form>
                    <p className="text-center mb-6 text-lg"><small className="text-white">Donot have an account?<Link className="text-purple-900 text-2xl ml-4" to='/signup'>SignUp</Link></small></p>
                </div>
            </div>
        </>
    );
};

export default Login;