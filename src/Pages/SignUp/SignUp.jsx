import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const SignUp = () => {
    const {
        register, handleSubmit, formState: { errors } } = useForm()
      const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data);
          createUser(data.email,data.password)
          .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
          })
    }

    return (
        <>
            <Helmet>
                <title>physical || Sign Up </title>
            </Helmet>
            <div className="hero min-h-screen bg-white-700">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-blue-700">
                    <h2 className="text-center text-2xl text-white mt-6">Please SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="Name" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-600">name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === "required" && (
                                <p>password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p>password must be 6 charackter</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p>password must be less than 20 charackter</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6 ">
                            <input className="btn btn-primary" type="submit" value="sign up" />
                        </div>
                    </form>
                    <p className="text-center mb-6 text-lg"><small> Have an account?<Link className="text-red-600" to='/login'>Login</Link></small></p>
                </div>
            </div>
        </>
    );
};

export default SignUp;