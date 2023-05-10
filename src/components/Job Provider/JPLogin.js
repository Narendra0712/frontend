import axios from "axios";
import React, { useState } from "react";
import { JOBPROVIDERLOGIN } from "../../services/jobproviderservices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const JPLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    if (username.length === 0) {
      toast.warning("Enter User Name");
    } else if (password.length === 0) {
      toast.warning("Enter Password");
    } else {
      const postdata = {
        username,
        password,
      };
      axios.post(JOBPROVIDERLOGIN, postdata).then((response) => {
        const result = response.data;
        console.log(result["data"]);

        if (result["status"] === "success") {
          toast.success("Login Succesfull !");

          const { jobproviderid, username, password } = result["data"];

          sessionStorage["JobProviderId"] = jobproviderid;
          sessionStorage["JobProvider UserName"] = username;
          sessionStorage["JobProvider Password"] = password;

          navigate("/JPHome");
        } else {
          toast.error("Login Failed !");
        }
      });
    }
  }
  return (
    <>
      <div id="bg">
        <div className="cardbody">
          <form>
            <h2>Login</h2>
            <div className="inputbox">
              <input
                type="text"
                required="required"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
              <span>Username</span>
            </div>
            <div className="inputbox">
              <input
                type="password"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <span>Password</span>
            </div>
            <p className="text-left">
              Click
              <a href="JPRegistration"> Here </a>
              to Register
            </p>
            <div className="inputbox">
              <input type="submit" value="Login" onClick={handleClick}></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JPLogin;
