import React, { useState } from "react";
import insta from "../Images/insta.png";
import facebookicon from "../Images/facebookicon.png";
import fbwhite from "../Images/fbwhiteandBlue.png";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [mobNo, setMobNo] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isvalidate = () => {
    let isProceed = true;
    if (mobNo === "" || mobNo === null) {
      isProceed = false;
      toast.warning("Mobile number  is required.");
      if (email === null || email === "") {
        isProceed = false;
        toast.warning("Email is required.");
      }
    }

    if (fullname === null || fullname === "") {
      isProceed = false;
      toast.warning("Name or Email is required.");
    }

    if (username === null || username === "") {
      isProceed = false;
      toast.warning("Username is required.");
    }
    if (password === null || password === "") {
      isProceed = false;
      toast.warning("Password is required.");
    } else {
      if (!validateIndianPhoneNumber(mobNo)) {
        isProceed = false;
        toast.warning("Not a valid Phone Number..!");
        if (!validateEmail(email)) {
          isProceed = false;
          toast.warning("Not a valid email Address..!");
        }
      }

      if (!validateName(fullname)) {
        isProceed = false;
        toast.warning("Not a valid Name..!");
      }
      if (!validatePassword(password)) {
        isProceed = false;
        toast.warning("Not a Valid Password..!");
      }
    }
    return isProceed;
  };
  const handleInputs = (e) => {
    e.preventDefault();
    let regObj = { mobNo, email, fullname, username, password };
    if (isvalidate()) {
      console.log("Submitted");
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered Successfully");
          setTimeout(() => {
            navigate("/Login");
          }, 2000);
        })
        .catch((err) => {
          toast.error("Failed:" + err.message);
        });
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
  function validateName(name) {
    // Regular expression for validating a name
    const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

    // Test the provided name against the regex
    return regex.test(name);
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
        <div className="box1">
          <div className="heading">
            <img src={insta} alt="instaHead" />
          </div>

          <p className="signtxt">
            Sign up to see photos and videos
            <br />
            from your friends.
          </p>
          <div className="fbbutton">
            <button>
              <img src={fbwhite} alt="fbicon" width={28} height={28} />
              Log in with Facebook
            </button>
          </div>
          <div className="lines">
            <div className="line"></div>
            <span className="or">OR</span> <div className="line"></div>
          </div>

          <div className="inputs">
            <input
              type="text"
              name="mobileNoOrEmail"
              placeholder="Mobile Number or email address"
              value={mobNo || email}
              onChange={(event) => {
                event.target.value.includes("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
                  ? setEmail(event.target.value)
                  : setMobNo(event.target.value);
              }}
              autoComplete="on"
            />
            <input
              type="text"
              name="Fullname"
              value={fullname}
              id="fullName"
              placeholder="Full Name"
              onChange={(event) => {
                setFullname(event.target.value);
              }}
              autoComplete="on"
            />
            <input
              type="text"
              name="username"
              id="uname"
              value={username}
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              autoComplete="on"
            />
            <input
              type="password"
              name="password"
              id="pass"
              value={password}
              placeholder="Password"
              autoComplete="on"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <p className="content">
              People who use our service may have uploaded
              <br /> your contact information to Instagram.{" "}
              <span className="blcontent">Learn more</span>{" "}
            </p>
            <p className="content">
              By signing up, you agree to our
              <span className="blcontent">
                Learn more Terms, Privacy <br /> Policy
              </span>{" "}
              and <span className="blcontent">Cookies Policy.</span>
            </p>

            <button className="signupb" onClick={handleInputs}>
              Sign up
            </button>
          </div>
        </div>
        <div className="box2">
          <p>
            Have an account?{" "}
            <Link to="/Login">
              <span className="signup"> Log in </span>
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

export default Register;
