import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
const Register = () => {
  return (
    <div className="min-w-screen min-h-screen bg-soap flex justify-center items-center">
      <div className="w-[350px]  text-white p-2">
        <div className="bg-violetBlue p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to our platform</h2>
          <p className="text-sm mb-3 font-medium">
            Please register to continue
          </p>

          <form>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="p-2 rounded-md px-3 outline-none  border border-slate-400 bg-transparent"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="p-2 rounded-md px-3 outline-none  border border-slate-400 bg-transparent"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="p-2 rounded-md px-3 outline-none  border border-slate-400 bg-transparent"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center w-full gap-3 mb-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                name="checkbox"
                required
              />
              <label htmlFor="checkbox">
                {" "}
                I agree to the terms and conditions.
              </label>
            </div>

            <button className="w-full p-2 rounded-md bg-slate-800 text-white font-medium hover:shadow-blue-300 hover:shadow-lg px-7 py-2 mb-3">
              Sign Up
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account?{" "}
                <Link className="font-bold" to="/login">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] h-[1px] bg-slate-400"></div>
              <div className="w-[10%] h-[1px] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] h-[1px] bg-slate-400"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-[100px] h-[40px] flex rounded-md bg-white shadow-lg hover: shadow-gray-500 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FcGoogle className="text-xl" />
                </span>
              </div>
              <div className="w-[100px] h-[40px] flex rounded-md bg-black shadow-lg hover: shadow-gray-500 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaApple className="text-white text-xl" />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
