import { NavLink, Outlet } from "react-router-dom";
import { FaSchool } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full">
      <li><NavLink to='/dashboard/myphysicalclass'><FaSchool></FaSchool>My Physical Class</NavLink></li>
      <li><NavLink><FaSchool></FaSchool>My Selected Classes</NavLink></li>  
    </ul>
  </div>
</div>
    );
};

export default Dashboard;