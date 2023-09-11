import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/sonatrach.png"

export default function NavBar() {
  return (
    <nav className="p-4 bg-[#F5F7FB]">
      <div className="container m-auto flex justify-between items-center">
        <Link to="/" className="w-8 ">
          <img className="w-full" src={Logo} alt="" />
        </Link>
        <ul className="flex gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-extrabold text-md text-indigo-500"
                : "text-md font-semibold "
            }
            to="/UploadBart"
          >
            Bert
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-extrabold text-md text-indigo-500"
                : "text-md font-semibold "
            }
            to="/"
          >
            word2vec
          </NavLink>
          <NavLink
            to="/Search"
            className={({ isActive }) =>
              isActive
                ? "font-extrabold text-md text-indigo-500"
                : "text-md font-semibold "
            }
          >
            Search
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
