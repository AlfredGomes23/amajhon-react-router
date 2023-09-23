import { Link, Outlet } from "react-router-dom";



const DashboardHome = () => {
    return (
        <div className="flex gap-5">
           <div className="text-2xl ">
            <ul className="flex-1 shadow-lg">
                <li><Link to='/dashboard/dashboard'>Dashboard</Link></li>
                <li><Link to='/dashboard/profile'>Profile</Link></li>
                <li><Link to='/dashboard/editProfile'>Edit Profile</Link></li>
            </ul>
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default DashboardHome;