import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between px-10 py-7 shadow-xl items-center">
                <h1 className="text-3xl font-bold">Amajhon</h1>
                <ul className="flex text-2xl gap-10 justify-center m-5">
                    <li><NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-400 border border-green-900" : ""}>Home</NavLink></li>
                    <li><NavLink to="/products" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-400 border border-green-900" : ""
                    }
                    >Products</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-400 border border-green-900" : ""
                    }
                    >About</NavLink></li>
                    <li><NavLink to="/dashboard" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-400 border border-green-900" : ""
                    }
                    >Dashboard</NavLink></li>
                </ul>
            </nav>

            <div className="px-5">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Header;