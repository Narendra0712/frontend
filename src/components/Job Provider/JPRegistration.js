import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const JPRegistration = () => {
  const [employeename, setEmpName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobileno, setMobNo] = useState("");
  const [empemail, setEmpEmail] = useState("");
  const [empaddress, setEmpAddress] = useState("");
  const [jobrole, setJobRole] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [companyaddress, setCompanyAddress] = useState("");
  const [companycontactno, setCompanyContactNo] = useState("");
  const [companywebsite, setCompanyWebsite] = useState("");
  const [companyemail, setCompnayEmail] = useState("");
  const [companyinfo, setCompanyInfo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const jobprovider = {
      employeename,
      gender,
      dob,
      empemail,
      empaddress,
      jobrole,
      companyaddress,
      companycontactno,
      companywebsite,
      companyemail,
      companyinfo,
      mobileno,
      companyname,
      username,
      password,
    };
    if (employeename.length === 0) {
      toast.error("Please Enter Name");
    } else if (gender.length === 0) {
      toast.error("Please Enter Gender");
    } else if (dob.length === 0) {
      toast.error("Please Enter Date of Birth");
    } else if (empemail.length === 0) {
      toast.error("Please Enter Email ID");
    } else if (empaddress.length === 0) {
      toast.error("Please Enter Your Address");
    } else if (jobrole.length === 0) {
      toast.error("Please Enter Your Mobile Number");
    } else if (companyaddress.length === 0) {
      toast.error("Please Enter Company Address");
    } else if (companycontactno.length === 0) {
      toast.error("Please Enter Company Contact Number");
    } else if (companywebsite.length === 0) {
      toast.error("Please Enter Company Website");
    } else if (companyemail.length === 0) {
      toast.error("Please Enter Company Email Id");
    } else if (companyinfo.length === 0) {
      toast.error("Please Enter Company Information");
    } else if (mobileno.length === 0) {
      toast.error("Please Enter Mobile Number");
    } else if (companyname.length === 0) {
      toast.error("Please Enter Company Name");
    } else if (username.length === 0) {
      toast.error("Please Enter User Name");
    } else if (password.length === 0) {
      toast.error("Please Enter Password");
    } else {
      fetch("http://localhost:9009/jobprovider/addjobprovider", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobprovider),
      }).then(() => {
        toast.success("Registration Successful !");
        navigate("/JPLogin");
      });
    }
  };

  return (
    <>
      <div className="contentone">
        <h2 class="fs-3 m-0 py-5 px-5">Job Provider Registration</h2>
      </div>
      <div className="postjob">
        <form className="form-right">
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="input-field"
              value={employeename}
              onChange={(e) => setEmpName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Gender</label>
            <input
              type="text"
              className="input-field"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Date of Birth</label>
            <input
              type="text"
              className="input-field"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Mobile Number</label>
            <input
              type="text"
              className="input-field"
              value={mobileno}
              onChange={(e) => setMobNo(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Email Id</label>
            <input
              type="text"
              className="input-field"
              value={empemail}
              onChange={(e) => setEmpEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="input-field"
              value={empaddress}
              onChange={(e) => setEmpAddress(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Job Role</label>
            <input
              type="text"
              className="input-field"
              value={jobrole}
              onChange={(e) => setJobRole(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Company Name</label>
            <input
              type="text"
              className="input-field"
              value={companyname}
              onChange={(e) => setCompanyName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Company Address</label>
            <input
              type="text"
              className="input-field"
              value={companyaddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Company Contact Number</label>
            <input
              type="text"
              className="input-field"
              value={companycontactno}
              onChange={(e) => setCompanyContactNo(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Company Website</label>
            <input
              type="text"
              className="input-field"
              value={companywebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Company Email Id</label>
            <input
              type="text"
              className="input-field"
              value={companyemail}
              onChange={(e) => setCompnayEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Company Information</label>
            <input
              type="text"
              className="input-field"
              value={companyinfo}
              onChange={(e) => setCompanyInfo(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Set User Name</label>
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Set Password</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="inputbox">
            <input type="submit" value="Register" onClick={handleClick}></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default JPRegistration;
