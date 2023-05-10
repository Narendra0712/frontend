import React, { useEffect, useState } from "react";
import jobproviderservices from "../../services/jobproviderservices";
import Sidebar from "../Sidebar";

export const JPProfile = () => {
  const [jobproviderid, setJobProviderId] = useState("");
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

  const id = window.sessionStorage.getItem("JobProviderId");

  useEffect(() => {
    jobproviderservices
      .getJobProviderById(id)
      .then((response) => {
        setJobProviderId(response.data.jobproviderid);
        setEmpName(response.data.employeename);
        setGender(response.data.gender);
        setDob(response.data.dob);
        setMobNo(response.data.mobileno);
        setEmpEmail(response.data.empemail);
        setEmpAddress(response.data.empaddress);
        setJobRole(response.data.jobrole);
        setCompanyName(response.data.companyname);
        setCompanyAddress(response.data.companyaddress);
        setCompanyContactNo(response.data.companycontactno);
        setCompnayEmail(response.data.companyemail);
        setCompanyInfo(response.data.companyinfo);
        setCompanyWebsite(response.data.companywebsite);
        setUsername(response.data.username);
        setPassword(response.data.password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Sidebar />
      <div className="content py-4 px-5 fs-3">Welcome {employeename}</div>
      <div class="contentone px-5">
        <div class="col-xxl-11 mb-5 mb-xxl-0">
          <div class="row g-3 mt-4">
            <h4 className="px-5">Personal Information</h4>
            <div className="px-5">
              <label class="form-label mt-4">Job Provider Id</label>
              <br></br>
              <div class="col-sm-9 fs-5">{jobproviderid}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label mb-3">Employee Name</label>
              <br></br>
              <div class="col-sm-9 fs-5">{employeename}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Gender</label>
              <br></br>
              <div class="col-sm-9 fs-5">{gender}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Date of Birth</label>
              <br></br>
              <div class="col-sm-9 fs-5">{dob}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Mobile Number</label>
              <br></br>
              <div class="col-sm-9 fs-5">{mobileno}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Email Id</label>
              <br></br>
              <div class="col-sm-9 fs-5">{empemail}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Address</label>
              <br></br>
              <div class="col-sm-9 fs-5">{empaddress}</div>
              <hr></hr>
            </div>
            <div className="px-5 mb-5">
              <label class="form-label">Job Role</label>
              <br></br>
              <div class="col-sm-9 fs-5">{jobrole}</div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
      <div class="contentone px-5">
        <div class="col-xxl-11 mb-5 mb-xxl-0">
          <div class="row g-3 mt-4">
            <h4 className="px-5">Company Information</h4>
            <div className="px-5">
              <label class="form-label">Company Name</label>
              <br></br>
              <div class="col-sm-9 fs-5">{companyname}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Comapny Address</label>
              <br></br>
              <div class="col-sm-9 fs-5">{companyaddress}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Contact Number</label>
              <br></br>
              <div class="col-sm-9 fs-5">{companycontactno}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Company Website</label>
              <br></br>
              <div class="col-sm-9 fs-5">{companywebsite}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Comapny Email Id</label>
              <br></br>
              <div class="col-sm-9 fs-5">{companyemail}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Comapny Information</label>
              <br></br>
              <div class="col-sm-9 fs-5s">{companyinfo}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Username</label>
              <br></br>
              <div class="col-sm-9 fs-5s">{username}</div>
              <hr></hr>
            </div>
            <div className="px-5 mb-5">
              <label class="form-label">Password</label>
              <br></br>
              <div class="col-sm-9 fs-5s">{password}</div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JPProfile;
