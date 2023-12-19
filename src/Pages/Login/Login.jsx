
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
    const {signIn} = useContext(AuthContext)
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
        })
    }
    return (
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p><small>Donot have an account?<Link to='/signup'>SignUp</Link></small></p>
                </div>
            </div>
    );
};

export default Login;