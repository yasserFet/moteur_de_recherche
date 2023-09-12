import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/sonatrach.png"

export default function NavBar() {
  return (
    <nav className="px-4 py-3  bg-[#F5F7FB]">
      <div className="container m-auto flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Link to="/" className="w-6 ">
            <img className="w-full" src={Logo} alt="" />
          </Link>
          <h1 className="font-bold text-xl">sonatrach</h1>
        </div>
        <ul className="flex gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-extrabold text-md  bg-slate-900 py-2 px-6 text-white hover:bg-blue-700 rounded-xl hover:rounded-3xl transition "
                : "text-md font-semibold bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 rounded-xl hover:rounded-3xl transition  "
            }
            to="/UploadBart"
          >
            Bert
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-extrabold text-md  bg-slate-900 py-2 px-6 text-white hover:bg-blue-700 rounded-xl hover:rounded-3xl transition"
                : "text-md font-semibold  bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 rounded-xl hover:rounded-3xl transition "
            }
            to="/"
          >
            word2vec
          </NavLink>
          <NavLink
            to="/Search"
            className={({ isActive }) =>
              isActive
                ? "font-extrabold text-md bg-slate-900  py-2 px-6 text-white hover:bg-blue-700 rounded-xl hover:rounded-3xl transition"
                : "text-md font-semibold  bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 rounded-xl hover:rounded-3xl transition"
            }
          >
            Search
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
