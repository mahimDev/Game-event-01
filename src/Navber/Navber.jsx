import { NavLink } from "react-router-dom";
import img from '../../public/3.png';
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProveider";
import Swal from "sweetalert2";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Sing out successful',
                    'success'
                )
            })
            .catch(err => {
                console.log(err)
            })
    }



    console.log(user)
    const navBer =
        <>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline font-semibold" : ""
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline font-semibold" : ""
                }
            >
                About
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline font-semibold" : ""
                }
            >
                Blog
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline font-semibold" : ""
                }
            >
                Login
            </NavLink>



        </>



    return (

        <div className='text-white flex justify-between py-4 px-10 bg-gradient-to-r from-[#000000] to-[#434343] shadow-md items-center '>
            <div className=" hidden md:block">
                <img className='w-16  ' src="https://i.ibb.co/2h4Nvj6/Logo1.png" alt="" />
            </div>
            <div className="md:hidden block">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary  glass drawer-button text-white">VR Console</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            {navBer}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hidden md:block" >
                <ul className='flex gap-4 text-lg font-normal'>
                    {navBer}
                </ul>
            </div>

            <div className='flex items-center gap-5'>
                <p className='hidden md:block'>{user?.displayName}</p>
                <img className='w-10 rounded-full border border-black ' src={img} alt="" />
                {
                    user ? <button onClick={handleLogOut} className="btn btn-sm glass lg:btn-md font-bold">Sign Out</button>
                        :
                        <button className="btn btn-sm lg:btn-md glass  font-bold">Sign in</button>
                }

            </div>
        </div>


    );
};

export default Navber;