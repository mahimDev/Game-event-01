import { NavLink } from "react-router-dom";
import img from '../../public/3.png';

const Navber = () => {

    const navBer =
        <>
            <NavLink to="/" >     <li>Home</li> </NavLink>
            <NavLink to="/about"> <li>About</li> </NavLink>
            <NavLink to="/blog">  <li>Blog</li> </NavLink>
            <NavLink to="/login">  <li>Login</li> </NavLink>

        </>



    return (

        <div className='flex justify-between py-4 px-10 bg-slate-400 shadow-md items-center '>
            <div>
                <img className='w-10' src={img} alt="" />
            </div>
            <div >
                <ul className='flex gap-4 text-base font-semibold  '>
                    {navBer}
                </ul>
            </div>
            <div className='flex items-center gap-5'>
                <p className='hidden md:block'>Profile</p>
                <img className='w-10 rounded-full border border-black ' src={img} alt="" />

            </div>
        </div>


    );
};

export default Navber;