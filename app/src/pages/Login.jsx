import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginIMG } from "../assets";
import Modal from "../components/Modal";

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState("");
  const [showResetPassword, setshowResetPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const login = (e) => {
    e.preventDefault();

    if (!user.email) {
      setError("Email is Required!");
      return;
    } else if (!user.pass) {
      setError("Password is Required!");
      return;
    }
    setError("");

    signInWithEmailAndPassword(auth, user.email, user.pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="mt-16 m-10 flex">
      {/* Login Form */}
      <form className="md:w-1/2 flex flex-col items-start p-4 px-6 mx-auto gap-6 text-lg">
        <h2 className="mx-auto text-2xl md:text-3xl font-bold dark:text-cyan-100">
          Login to our platform
        </h2>
        <div className="text-red-600"> {error && <p>{error}</p>}</div>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="email" className="dark:text-cyan-300">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500 dark:bg-slate-700 dark:text-cyan-50"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="pass" className="dark:text-cyan-300">
            Your Password
          </label>
          <input
            type="password"
            name="pass"
            value={user.pass}
            onChange={handleChange}
            placeholder="*********"
            className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500 dark:bg-slate-700 dark:text-cyan-50"
          />
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center">
            <input type="checkbox" name="checkbox" className="h-4 w-4" />
            <label className="px-2 dark:text-cyan-400" htmlFor="checkbox">
              {" "}
              Remember Me
            </label>
          </div>
          <a
            href="#"
            className="text-blue-700 hover:underline duration-300 ease-out"
            onClick={() => setshowResetPassword(true)}
          >
            Forgot password?
          </a>
        </div>
        <button
          className="w-full bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out "
          onClick={login}
        >
          Login to your account
        </button>
        <div className="mx-auto">
          <p className="dark:text-cyan-400">
            Not Registered?{" "}
            <Link
              to="/SignUp"
              className="text-blue-700 hover:underline duration-200 ease-out"
            >
              Create Account
            </Link>{" "}
          </p>
        </div>
      </form>
      <div className="hidden md:block md:w-1/2">
        <img src={loginIMG} alt="" />
      </div>

      {/* Reset Password Modal */}
      <Modal
        isOpen={showResetPassword}
        closeModal={() => {
          setshowResetPassword(false);
        }}
      >
        <form className="flex flex-col items-start p-4 px-6 gap-6 text-lg dark:bg-slate-900">
          <h2 className="mx-auto text-2xl md:text-2xl font-semibold dark:text-cyan-100">
            Reset Password
          </h2>
          <div className="w-full flex flex-col items-start gap-2">
            <label for="email" className="dark:text-cyan-300">
              Your Email
            </label>
            <input
              name="email"
              placeholder="jhon@xyz.com"
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500 dark:bg-slate-800 dark:text-cyan-50"
            />
          </div>
          <div className="w-full items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <label for="pass" className="dark:text-cyan-300">
                Create Password
              </label>
              <input
                name="pass"
                type="password"
                placeholder="********"
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500 dark:bg-slate-800 dark:text-cyan-50"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label for="confirmPass" className="dark:text-cyan-300">
                Confirm Password
              </label>
              <input
                name="confirmPass"
                type="password"
                placeholder="********"
                className={
                  !user.pass.length == 0
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500 dark:bg-slate-800 dark:text-cyan-50"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500 dark:bg-slate-800 dark:text-cyan-50"
                }
              />
            </div>
          </div>
          <button className="w-full bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out ">
            Reset Password
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
