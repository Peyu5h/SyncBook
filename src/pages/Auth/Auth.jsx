import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdError } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import DotLoader from "react-spinners/DotLoader";

//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Store
import { useSelector, useDispatch } from "react-redux";

//cookies
import Cookies from "js-cookie";

//for validation lable
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  //toastify function

  const notify = (message, type) => {
    toast(message, {
      type: type,
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const [LogUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  //validationTxt
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      mobileAndEmail: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email")
        .max(50, "Email must be max upto 50 characters"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),

      first_name: Yup.string()
        .required("What's your first name?")
        .max(25, "First name must be max upto 25 characters")
        .matches(
          /^[aA-zZ\s]+$/,
          "Numbers and special characters are not allowed"
        ),
      last_name: Yup.string()
        .required("What is your last name?")
        .max(25, "Surname must be max upto 25 characters")
        .matches(
          /^[aA-zZ\s]+$/,
          "Numbers and special characters are not allowed"
        ),
      mobileAndEmail: Yup.string()
        .required("Mobile or email is required")
        .max(50, "Mobile or email must be max upto 50 characters"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  // ====================================================
  // signup
  const [signup, setSignup] = useState(false);
  const SignUp = (e) => {
    e.preventDefault();
    setSignup(!signup);
  };

  //store
  const dispatch = useDispatch();

  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };

  const [user, setUser] = useState(userInfos);
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;

  const resetForm = () => {
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      bYear: new Date().getFullYear(),
      bMonth: new Date().getMonth() + 1,
      bDay: new Date().getDate(),
      gender: "",
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(`${backendUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);

      //managing state
      const { message, ...rest } = data;
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: rest });
        Cookies.set("user", JSON.stringify(rest));
      }, 2000);

      {
        data.message ==
        "Registration successful! Please check your email for verification"
          ? (notify(data.message, "success"),
            resetForm(),
            setTimeout(() => {
              navigate("/home");
            }, 2000))
          : setError(data.message);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  //login Submit

  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const [successLogin, setSuccessLogin] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoadingLogin(true);
      setErrorLogin("");

      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LogUser),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      const { message, ...rest } = data;

      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: rest });
        Cookies.set("user", JSON.stringify(rest));
      }, 2000);

      if (data.message === "Login successful!") {
        notify(data.message, "success");
      } else {
        setErrorLogin(data.message);
      }

      setIsLoadingLogin(false);

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      setIsLoadingLogin(false);
      setErrorLogin(error.message);
    }
  };

  //option for DOB
  const yearTemp = new Date().getFullYear();
  const years = Array.from(new Array(100), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => index + 1);

  const getDays = (bYear, bMonth) => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(
    new Array(getDays(bYear, bMonth)),
    (val, index) => index + 1
  );

  console.log(user);
  console.log(LogUser);
  return (
    <div className=" bg-blue-50">
      {/* ========================= SIGN UP ======================================== */}
      {signup && (
        <div className="signup absolute top-0 left-0 w-full h-screen bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="sigUpForm mx-4 w-[26rem] :h-[82%] bg-white rounded-lg shadow-lg p-4 font-hel">
            <div className="header flex justify-between text-gray-800">
              <div className="text">
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <h1 className="text-md">It&apos;s quick and easy.</h1>
              </div>
              <div
                onClick={() => setSignup(false)}
                className="cross cursor-pointer"
              >
                <RxCross2 className="text-2xl text-gray-700 m-2" />
              </div>
            </div>
            <div className="divider h-[0.05rem] mt-4 rounded-full bg-gray-200 w-full"></div>

            <form action="">
              <div className="FirstName_LastName mt-4 flex gap-x-2">
                {/* ======== First Name ============== */}
                <div className="FirstName">
                  <div className="first_name relative w-full">
                    {formik.touched.first_name && formik.errors.first_name ? (
                      <div className="text-red-500 text-sm mb-0">
                        {formik.errors.first_name}
                      </div>
                    ) : null}
                    <input
                      onChange={(e) => {
                        formik.handleChange(e);
                        setUser({ ...user, first_name: e.target.value });
                      }}
                      onBlur={formik.handleBlur}
                      value={first_name}
                      name="first_name"
                      className={`w-full outline-none border-gray-200 border-2 rounded-md p-3 mb-2 ${
                        formik.touched.first_name && formik.errors.first_name
                          ? "border-red-500"
                          : ""
                      } ${
                        formik.touched.last_name && formik.errors.last_name
                          ? "mt-5"
                          : ""
                      }`}
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                {/* ======== Last Name ============== */}
                <div className="last_name relative">
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.last_name}
                    </div>
                  ) : null}
                  <input
                    onChange={(e) => {
                      formik.handleChange(e);
                      setUser({ ...user, last_name: e.target.value });
                    }}
                    onBlur={formik.handleBlur}
                    value={last_name}
                    name="last_name"
                    className={`w-full outline-none border-gray-200 border-2 rounded-md p-3 mb-2 ${
                      formik.touched.last_name && formik.errors.last_name
                        ? "border-red-500"
                        : ""
                    } ${
                      formik.touched.first_name && formik.errors.first_name
                        ? "mt-5"
                        : ""
                    }`} // Apply mt-5 if first name has an error
                    type="text"
                    placeholder="Surname"
                  />
                </div>
              </div>

              {/* ========== Mobile or email ============================ */}
              <div className="mobileAndEmail relative">
                {formik.touched.mobileAndEmail &&
                formik.errors.mobileAndEmail ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.mobileAndEmail}
                  </div>
                ) : null}
                <input
                  onChange={(e) => {
                    formik.handleChange(e);
                    setUser({ ...user, email: e.target.value });
                  }}
                  onBlur={formik.handleBlur}
                  value={email}
                  name="mobileAndEmail"
                  className={`w-full outline-none border-gray-200 border-2 rounded-md p-3 mb-2 mt-4${
                    formik.touched.mobileAndEmail &&
                    formik.errors.mobileAndEmail
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  placeholder="Mobile number or email address"
                />
                <span
                  className="toggle-password absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {formik.touched.mobileAndEmail &&
                  formik.errors.mobileAndEmail ? (
                    <MdError className="text-red-500 mt-4" />
                  ) : null}
                </span>
              </div>

              {/* ========== NEW Password ============================ */}

              <div className="password relative">
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm mt-2">
                    {formik.errors.password}
                  </div>
                ) : null}
                <input
                  onChange={(e) => {
                    formik.handleChange(e),
                      setUser({ ...user, password: e.target.value });
                  }}
                  onBlur={formik.handleBlur}
                  value={password}
                  name="password"
                  className={`w-full outline-none border-gray-200 border-2 rounded-md p-3 mb-2 mt-4${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }`}
                  type={newPasswordVisible ? "text" : "password"}
                  placeholder="New Password"
                />
                <span
                  className="toggle-password absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                >
                  {formik.touched.password && formik.errors.password ? (
                    <MdError className="text-red-500 mt-4" />
                  ) : newPasswordVisible ? (
                    <IoMdEye />
                  ) : (
                    <IoMdEyeOff />
                  )}
                </span>
              </div>

              {/* ======================= DOB ===================================== */}
              <div className="DOB">
                <h1 className="flex text-sm mt-3 mx-1 text-gray-700 font-light">
                  Date of birth
                  <BsFillQuestionCircleFill className="my-auto ml-2" />
                </h1>
                <div className="optionContainer flex flex-row flex-rows-3 justify-between">
                  <select
                    className="border-2 w-[30%] border-gray-200 rounded-md px-3 py-2 outline-none"
                    name="bDay"
                    value={bDay}
                    onChange={(e) => setUser({ ...user, bDay: e.target.value })}
                  >
                    {days.map((day, index) => (
                      <option key={index} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border-2 w-[30%] border-gray-200 rounded-md px-3 py-2 outline-none"
                    name="bMonth"
                    value={bMonth}
                    onChange={(e) =>
                      setUser({ ...user, bMonth: e.target.value })
                    }
                  >
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>

                  <select
                    className="border-2 border-gray-200  w-[30%] rounded-md px-3 py-2 outline-none"
                    name="bYear"
                    value={bYear}
                    onChange={(e) =>
                      setUser({ ...user, bYear: e.target.value })
                    }
                  >
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* =================== GENDER ========================= */}
              <div className="DOB">
                <h1 className="flex text-sm mt-4 mx-1 text-gray-700 font-light">
                  Gender
                  <BsFillQuestionCircleFill className="my-auto ml-2" />
                </h1>
                <div className=" optionContainer flex flex-row flex-rows-3 justify-between items-center">
                  <div className="male flex items-center   border-2 border-gray-200  w-[30%] rounded-md px-3 py-2 outline-none">
                    <label htmlFor="">Male</label>
                    <input
                      className="my-auto ml-4 "
                      type="radio"
                      value={"male"}
                      name="gender"
                      checked={gender === "male"}
                      onChange={(e) =>
                        setUser({ ...user, gender: e.target.value })
                      }
                    />
                  </div>
                  <div className="female  border-2 border-gray-200  w-[30%] rounded-md px-3 py-2 outline-none">
                    <label htmlFor="">Female</label>
                    <input
                      className="my-auto ml-4 "
                      type="radio"
                      value={"female"}
                      name="gender"
                      checked={gender === "female"}
                      onChange={(e) =>
                        setUser({ ...user, gender: e.target.value })
                      }
                    />
                  </div>
                  <div className="LGBTQ  border-2 font-sans border-gray-200  w-[30%] rounded-md px-3 py-2 outline-none">
                    <label htmlFor="">LGBTQ</label>
                    <input
                      className="my-auto ml-4 "
                      type="radio"
                      value={"lgbtq"}
                      name="gender"
                      checked={gender === "lgbtq"}
                      onChange={(e) =>
                        setUser({ ...user, gender: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <p className="mt-6 font-seg leading-2 text-[0.65rem]">
                By clicking Sign Up, you agree to our{" "}
                <span className="text-blue-500">Terms</span>,{" "}
                <span className="text-blue-500">Privacy Policy</span> and
                <span className="text-blue-500"> Cookies Policy</span>. You may
                receive SMS notifications from us and can opt out at any time.
              </p>
              <div
                onClick={registerSubmit}
                className="btn flex items-center justify-center my-4"
              >
                <button className="text-white bg-green-500  px-12 rounded-lg py-2">
                  Sign Up
                </button>
              </div>

              <div className="mess flex justify-center items-center">
                {isLoading ? (
                  <DotLoader color="#3B5998" loading={isLoading} size={30} />
                ) : (
                  <>
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}
                    {success && (
                      <div className="text-green-500 text-sm">{success}</div>
                    )}
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {/* --------------------------------------------------------------------------- */}

      {/* ================================  LOGIN  ================================== */}

      <div className="px-6 h-screen lg:w-[75%] lg:flex justify-between lg:space-x-4 mx-auto items-center">
        <div className="logoAndTxt flex flex-col justify-center  items-center lg:items-start lg:w-1/2  lg:h-screen mb-8 lg:mb-32 ">
          <div className="Logo">
            <img
              className="lg:w-[22rem] w-[14rem] mt-6 lg:mt-0"
              src="../../public/icons/facebook.svg"
              alt="logo"
            />
          </div>
          <div className="xl:hidden lg:text-2xl font-seg lg:px-8 px-4 text-center text-nowrap flex flex-col text-lg ">
            <span>Facebook helps you connect and</span>
            <span> share with the people in your life.</span>
          </div>
          <div className="hidden xl:block text-2xl font-seg lg:px-10 px-5  flex flex-col ">
            Facebook helps you connect and share with the people in your life.
          </div>
        </div>

        <div className="login_form bg-white p-4 h-auto my-auto lg:w-[40%] w-full shadow-lg rounded-lg font-arial">
          <form action="">
            <div className="email relative">
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm ">
                  {formik.errors.email}
                </div>
              ) : null}
              <input
                onChange={(e) => {
                  formik.handleChange(e);
                  setLogUser({ ...LogUser, email: e.target.value });
                }}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                className={`w-full outline-none border-gray-200 border-2 rounded-md p-3 mb-2 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                type="text"
                placeholder="Email address or phone number"
              />
              <span
                className="toggle-password absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {formik.touched.email && formik.errors.email ? (
                  <MdError className="text-red-500 mt-4" />
                ) : null}
              </span>
            </div>
            <div className="password relative">
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm mt-2">
                  {formik.errors.password}
                </div>
              ) : null}
              <input
                onChange={(e) => {
                  formik.handleChange(e);
                  setLogUser({ ...LogUser, password: e.target.value });
                }}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
                className={`w-full outline-none border-gray-200 border-2 rounded-md p-3 my-2 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500 mt-0"
                    : ""
                }`}
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="toggle-password absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {formik.touched.password && formik.errors.password ? (
                  <MdError className="text-red-500 mt-4" />
                ) : passwordVisible ? (
                  <IoMdEye />
                ) : (
                  <IoMdEyeOff />
                )}
              </span>
            </div>

            <div onClick={loginSubmit} className="login_btn">
              <button className="w-full hover:bg-blue-600 transition-all bg-blue-500 text-white p-3 rounded-md my-2">
                Log In
              </button>
            </div>
            <div className="forgetPass">
              <a
                className="text-blue-500 flex items-center justify-center my-2"
                href="#"
              >
                Forgotten password?
              </a>
            </div>
            <div className="mess flex justify-center items-center">
              {isLoading ? (
                <DotLoader color="#3B5998" loading={isLoading} size={30} />
              ) : (
                <>
                  {errorLogin && (
                    <div className="text-red-500 text-sm">{errorLogin}</div>
                  )}
                  {successLogin && (
                    <div className="text-green-500 text-sm">{successLogin}</div>
                  )}
                </>
              )}
            </div>
            <div className="divider h-[0.05rem] mt-4 rounded-full bg-gray-200 w-full"></div>
            <div className="createAcc flex item-center justify-center mt-4 text-semibold">
              <button
                onClick={(e) => SignUp(e)}
                className="w-auto hover:bg-green-600 transition-all bg-green-500 text-white p-3 rounded-md my-2 px-4 "
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
