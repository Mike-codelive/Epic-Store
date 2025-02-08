import { useState } from "react";
import { Link } from "react-router-dom";
import { MainMotionSection } from "./MainMotionSection";
import { InputField } from "./InputField";

import { motion } from "framer-motion";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
      <div className="w-[400px] mx-auto my-16">
        <div className="flex justify-center flex-col items-center mb-16 text-[#40354e]">
          <h1 className="font-medium text-[2em]">Log In</h1>
          <p>
            Need an account?{" "}
            <Link className="font-medium" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
        <InputField
          id="username"
          label="Email or Username"
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
        <div className="flex w-full justify-end mb-4">
          <p className="cursor-pointer">lost password?</p>
        </div>
        <div className="flex justify-center text-gray-400 mb-4">
          <p>By clicking Log In, you agree to our User Agreement</p>
        </div>
        <div className="flex justify-center mb-4">
          <motion.button
            whileTap={{
              translateY: 2.0,
              backgroundColor: "#d9475b",
            }}
            className="bg-[#ff596f] p-3 text-white rounded-[1.75rem] flex-1"
          >
            Log In
          </motion.button>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-400 text-center">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </MainMotionSection>
  );
};
