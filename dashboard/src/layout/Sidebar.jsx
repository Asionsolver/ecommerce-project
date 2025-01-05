/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { getNav } from "../navigation";
import { MdLogout } from "react-icons/md";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [allNav, setAllNav] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#7a8684] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-lavender z-50 top-0 h-screen shadow-[0_0_15px_0_rgba(34_41_47_/5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex items-center justify-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>
        </div>

        <div className="px-[16px]">
          <ul>
            {allNav.map((item, id) => (
              <li key={id}>
                <Link
                  to={item.path}
                  className={`${
                    pathname === item.path
                      ? "bg-blue-600 shadow-indigo-500/50 text-white duration-500 "
                      : " text-richBlack font-bold duration-200"
                  } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}

            <li>
              <button
                className="text-richBlack font-bold duration-200
                   px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mt-44"
              >
                <span>
                  <MdLogout />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
