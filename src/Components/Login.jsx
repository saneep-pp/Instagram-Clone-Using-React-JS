import React, { useState, useEffect } from "react";
import insta from "../Images/insta.png";
import facebookicon from "../Images/facebookicon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const usenavigate = useNavigate();

  useEffect(() => {
    // sessionStorage.clear();
    localStorage.clear();
  }, []);

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem("username");

    if (loggedInUser) {
      // If logged in, redirect to the home page
      console.log(loggedInUser);
      navigate("/");
    }
  }, [usenavigate]);

  const Validate = () => {
    let result = true;
    if (uname === null || uname === "") {
      result = false;
      toast.warning("username is required.");
    }
    if (pass === null || pass === "") {
      result = false;
      toast.warning("Password is required.");
    } else {
      if (validateIndianPhoneNumber(uname) || validateEmail(uname)) {
        result = false;
        toast.warning("Enter a valid username..!");
      }
    }
    return result;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (Validate) {
        const response = await fetch("http://localhost:8000/user");
        const users = await response.json();

        const user = users.find(
          (u) => u.username === uname && u.password === pass
        );

        if (user) {
          toast.success("Success.!");

          sessionStorage.setItem("username", uname);
          setTimeout(() => {
            usenavigate("/");
          }, 2000);
        } else {
          toast.warning("Invalid credentials. Please try again.");
        }
        // if (user) {
        //   // If the user is found, redirect to the home page
        //   history.push("/home");
        // } else {
        //   // If the user is not found, display an error message
        //   setError("Invalid username or password");
        // }
      }
    } catch (error) {
      toast.error("Error during login:", error);
    }
  };
  function validateIndianPhoneNumber(phoneNumber) {
    // Regular expression for Indian phone numbers
    const regex = /^[789]\d{9}$/;

    // Test the provided phone number against the regex
    return regex.test(phoneNumber);
  }
  function validateEmail(email) {
    // Regular expression for validating an Email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the provided email against the regex
    return regex.test(email);
  }

  function validatePassword(password) {
    // Minimum length is 8 characters, and it must contain at least one uppercase letter, one lowercase letter, one digit, and one special character
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    // Test the provided password against the regex
    return regex.test(password);
  }
  return (
    <div>
      <div className="main1">
        <ToastContainer />
        <div className="box">
          <div className="heading">
            <img src={insta} alt="instaHead" />
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Phone number,username or email address"
              name="username"
              value={uname}
              onChange={(event) => {
                setUname(event.target.value);
              }}
              autoComplete="on"
            />
            <input
              type="password"
              name="passwoprd"
              id="pass"
              placeholder="Password"
              value={pass}
              onChange={(event) => {
                setPass(event.target.value);
              }}
              autoComplete="on"
            />
            <button className="login" onClick={handleLogin}>
              Log In
            </button>
          </div>
          <div className="lines">
            <div className="line"></div>
            <span className="or">OR</span> <div className="line"></div>
          </div>
          <div className="loginFacebook">
            <img src={facebookicon} alt="" width={25} height={25} />
            <span className="logtext">Log in with Facebook</span>
          </div>
          <p className="forgotPass">Forgotten your password?</p>
        </div>
        <div className="box2">
          <p>
            Don't have an account?{" "}
            <Link to="/Signup">
              {" "}
              <span className="signup"> Sign up</span>
            </Link>
          </p>
        </div>
        <p style={{ fontSize: "14px" }}>Get the app.</p>
        <div className="apps">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
            alt="appleStore"
            width={136}
            height={40}
          />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt="playStore"
            width={134.28}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
