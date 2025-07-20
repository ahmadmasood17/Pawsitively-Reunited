import Dog from "../../assets/images/dog.png";
import Logo from "../../assets/Images/logo.svg";
import { useState } from "react";
import CloseEye from "../../assets/Images/eye-off.svg";
import OpenEye from "../../assets/Images/eye.svg";
import SMS from "../../assets/Images/sms.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section>
      <div className="flex gap-[20px]">
        <div className="w-[60%] ">
            <img src={Dog} alt="" className="rounded-[15px] w-full" />
        </div>
        <div className="w-[40%]  border border-[#E9EAEB] rounded-[15px] bg-white px-[50px] pt-[80px] pb-[40px]">
          <div className="flex items-center justify-center mb-[30px]">
            <img
              src={Logo}
              alt=""
              className="w-[280px] h-[103px] object-cover"
            />
          </div>
          <div className="mb-[40px]">
            <h4 className="text-[30px] font-medium text-[#252525] text-center">
              Admin Sign In
            </h4>
            <p className="text-[16px] text-center text-[#005C1D]">
              This dashboard is for authorized admin use only
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Email</label>
              <div className="flex items-center border border-gray-300 rounded-[8px] px-3">
                <span className="text-gray-400 mr-2">
                  <img src={SMS} alt="" />
                </span>
                <input
                  type="email"
                  placeholder="Sarah.S@email.com"
                  className="flex-1 py-2 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-gray-700 text-sm">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-[8px] px-3 gap-[10px]">
                <button
                  type="button"
                  onClick={togglePassword}
                  className="text-gray-400 ml-[4px]"
                >
                  {showPassword ? (
                    <img src={OpenEye} />
                  ) : (
                    <img src={CloseEye} />
                  )}
                </button>
                <input
                  type={showPassword ? "text" : "password"}
                  value={"123456789101112"}
                  className="flex py-2 outline-none items-center"
                />
              </div>
              <div className="flex justify-end mt-1">
                <a href="#" className="text-[14px] text-[#005BE0] ">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-[2px] w-[16px] h-[16px] cursor-pointer accent-green-600"
                id="remember"
              />
              <label htmlFor="remember" className="text-sm">
                <span className="font-medium">Remember me</span>
                <br />
                <span className="text-gray-500">
                  Save my login details for next time.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#1FAC4B] text-white py-2 rounded-[8px]  font-bold"
            >
              Sign in
            </button>

            <div className="flex items-center justify-center gap-[5px] mt-[50px]">
              <Link to="/">Terms of Use |</Link>
              <Link to="/">Privacy Policy</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
