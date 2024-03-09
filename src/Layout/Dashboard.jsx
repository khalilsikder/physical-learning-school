import { NavLink, Outlet } from "react-router-dom";
import { FaTable,FaWallet,FaHome,FaUser } from "react-icons/fa";



const Dashboard = () => {
  
  const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">


       {
        isAdmin ?<>
        <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
       <li><NavLink to='/dashboard/allusers'><FaTable></FaTable>Manage user</NavLink></li>
      <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet>Manage class</NavLink></li>
        </> 
        :
         <>
         <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
       <li><NavLink to='/dashboard/studentcart'><FaTable></FaTable>StudentDashboard</NavLink></li>
      <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet>Payment</NavLink></li>
         </>
       }
      
      
      <div className="divider"></div>
      <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
      <li><NavLink to='/instructorsclass'><FaUser></FaUser>Instructorsclass</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;