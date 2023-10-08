import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProveider";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";




const Register = () => {

    const { createUser, googleLogin, userName } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        createUser(email, password)
            .then(() => {
                userName({
                    displayName: name
                })

                Swal.fire(
                    'Good job!',
                    'Register successful',
                    'success'
                )
            })
            .catch(() => {

            })
        console.log(name, email, password);
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary  text-white bg-gradient-to-r from-[#000000] to-[#434343]">Register</button>
                            <button onClick={() => googleLogin()} className=" mt-2 btn btn-primary  text-white bg-gradient-to-r from-[#000000] to-[#434343]"><FcGoogle></FcGoogle>   Google</button>
                            <p className="text-base font-poppins ">Already you have an account <Link to="/login" className="text-lg font-semibold text-blue-600">Please Login</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default Register;