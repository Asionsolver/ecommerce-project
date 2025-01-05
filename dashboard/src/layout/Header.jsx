import { FaList } from "react-icons/fa";
import adminLogo from "../assets/images/admin.jpg";

/* eslint-disable react/prop-types */
const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-violet-300 px-5 transition-all">
        <div
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50  justify-center items-center"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <span>
            <FaList />
          </span>
        </div>

        <div className="hidden md:block">
          <input
            className="px-2 py-3 outline-none border bg-transparent border-slate-700 rounded-md text-[#fff] focus:border-indigo-300 overflow-hidden"
            type="text"
            placeholder="search"
            name="search"
          />
        </div>

        <div className="flex items-center justify-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="text-md font-bold">Ashis kumar</h2>
                <span className="text-[14px] w-full font-normal">Admin</span>
              </div>
              <img
                src={adminLogo}
                className="w-[45px] h-[45] rounded-full overflow-hidden"
                alt="admin-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
