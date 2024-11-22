import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loader, errorMessage, successMessage } = useSelector((state) => state.auth);

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    console.log(state);
  };

  const overrideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    height: "24px",
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);
  return (
    <div className="min-w-screen min-h-screen bg-soap flex justify-center items-center">
      <div className="w-[350px]  text-white p-2">
        <div className="bg-violetBlue p-4 rounded-md">
          <div className="h-[70px] flex items-center justify-center">
            <div className="w-[180px] h-[50px]">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>
          </div>

          <form onSubmit={submitHandler}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="p-2 rounded-md px-3 outline-none  border border-slate-400 bg-transparent"
                name="email"
                placeholder="Enter your email"
                required
                onChange={inputHandler}
                value={state.email}
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
                onChange={inputHandler}
                value={state.password}
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="w-full p-2 rounded-md bg-slate-800 text-white font-medium hover:shadow-blue-300 hover:shadow-lg px-7 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
