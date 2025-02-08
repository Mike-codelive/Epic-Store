import { MainMotionSection } from "./MainMotionSection";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { InputField } from "./InputField";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleBlur = (value, setError) => {
    if (!value.trim()) {
      setError(true);
    }
  };

  const handleFocus = (setError) => {
    setError(false);
  };

  return (
    <MainMotionSection>
      <div className="signup w-[400px] mx-auto my-16">
        <div className="flex justify-center flex-col items-center mb-16 text-[#40354e]">
          <h1 className="font-medium text-[2em]">Join Epic Store</h1>
          <p className="text-center">
            Sign up as a customer for 20% off your first order. Your coupon will
            be emailed after sign up.
          </p>
        </div>
        <div className="flex mb-4">
          <div>
            <input
              className="hidden"
              id="signup_artist"
              type="radio"
              name="signup"
              onChange={() => setRole("artist")}
            />
            <label
              className="block cursor-pointer relative py-6 px-4 text-[#666E7D] border-[2px] border-[#d6dadf]"
              htmlFor="signup_artist"
            >
              <div className="hidden signup_check absolute top-[-15px]">
                <CheckIcon className="bg-white p-1" />
              </div>
              <AutoAwesomeIcon />
              <h3>Artist signup</h3>
              <p className="text-[14px]">
                Set up shop and start selling your designs
              </p>
            </label>
          </div>
          <div>
            <input
              className="hidden"
              id="signup_user"
              type="radio"
              name="signup"
              defaultChecked
              onChange={() => setRole("user")}
            />
            <label
              className="block cursor-pointer relative py-6 px-4 text-[#666E7D] border-[2px] border-[#d6dadf]"
              htmlFor="signup_user"
            >
              <div className="hidden signup_check absolute top-[-15px]">
                <CheckIcon className="bg-white p-1" />
              </div>
              <AddShoppingCartIcon />
              <h3>Customer signup</h3>
              <p className="text-[14px]">
                Browse the marketplace and find your thing
              </p>
            </label>
          </div>
        </div>
        <div>
          <InputField
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            onFocus={() => handleFocus(setEmailError)}
            onBlur={() => handleBlur(email, setEmailError)}
          />
          <InputField
            id="username"
            label={role === "artist" ? "Shop name" : "Username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={usernameError}
            onFocus={() => handleFocus(setUsernameError)}
            onBlur={() => handleBlur(username, setUsernameError)}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            onFocus={() => handleFocus(setPasswordError)}
            onBlur={() => handleBlur(password, setPasswordError)}
          />
        </div>
        <div>
          <input
            className="hidden"
            id="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label
            className="select-none flex items-center justify-start cursor-pointer text-[0.875rem] text-[#8c95a5]"
            htmlFor="checkbox"
          >
            <div
              className={`flex justify-center items-center relative mr-2 h-5 w-5 border rounded-sm border-[#4292e3] transition-all duration-300 ease-in-out ${
                isChecked ? "bg-[#4292e3]" : "bg-transparent"
              }`}
            >
              <span
                className={`transform transition-transform duration-300 ease-in-out ${
                  isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <CheckIcon className="w-3 h-3 text-white" />
              </span>
            </div>
            Email me special offers and artist news.
          </label>
        </div>
        <div className="flex justify-center my-4">
          <motion.button
            whileTap={{
              translateY: 2.0,
              backgroundColor: "#d9475b",
            }}
            className="bg-[#ff596f] p-3 text-white rounded-[1.75rem] flex-1"
          >
            Sign Up
          </motion.button>
        </div>
        <div className="mb-3">
          <p className="text-center">
            Already have an account?{" "}
            <Link className="font-medium" to="/login">
              Log In
            </Link>
          </p>
        </div>
        <div className="mb-3">
          <p className="text-center text-[0.875rem] text-[#8c95a5]">
            By <i>clicking Sign Up</i>, you agree to our{" "}
            <span className="font-semibold">User Agreement</span> and{" "}
            <span className="font-semibold">Privacy Policy.</span>
          </p>
        </div>
        <div>
          <p className="text-center text-[0.875rem] text-[#8c95a5]">
            This site is protected by reCAPTCHA and the Google
            <span className="font-semibold"> Privacy Policy</span> and{" "}
            <span className="font-semibold">Terms of Service</span> apply
          </p>
        </div>
      </div>
    </MainMotionSection>
  );
};
