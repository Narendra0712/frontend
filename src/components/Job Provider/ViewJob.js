import React, { useEffect, useState } from "react";
import jobproviderservices from "../../services/jobproviderservices";
import Sidebar from "../Sidebar";

import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ViewJob = () => {
  const [jobid, setJobid] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [jobdescription, setJobDescription] = useState("");
  const [jobtype, setJobType] = useState("");
  const [jobcategory, setJobCategory] = useState("");
  const [qualificationsrequired, setQulifications] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [salary, setSalary] = useState("");
  const [joblocation, setJoLobcation] = useState("");
  const [skillsrequired, setSkills] = useState("");

  const navigate = useNavigate();
  const location =useLocation();
  const id =location.state.id;

  useEffect(() => {
    jobproviderservices
      .getJobById(id)
      .then((response) => {
        setJobid(response.data.jobid);
        setJobTitle(response.data.jobtitle);
        setJobDescription(response.data.jobdescription);
        setJobType(response.data.jobtype);
        setJobCategory(response.data.jobcategory);
        setQulifications(response.data.qualificationsrequired);
        setVacancies(response.data.vacancies);
        setSalary(response.data.salary);
        setJoLobcation(response.data.joblocation);
        setSkills(response.data.skillsrequired);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Jobs Details Not Found");
      });
  }, []);
  return (
    <>
      <Sidebar />
      <div class="contentone px-5">
        <div class="col-xxl-11 mb-5 mb-xxl-0">
          <div class="row g-3 mt-4">
            <h4 className="px-5">Job Information</h4>
            <div className="px-5">
              <label class="form-label mt-4">Job Id</label>
              <br></br>
              <div class="col-sm-9 fs-5">{jobid}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label mb-3">Job Title</label>
              <br></br>
              <div class="col-sm-9 fs-5">{jobtitle}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Job Description</label>
              <br></br>
              <div class="col-sm-9 fs-5">{jobdescription}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Job Type</label>
              <br></br>
              <div class="col-sm-9 fs-5">{jobtype}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Job Category</label>
              <br></br>
              <div class="col-sm-9 fs-5">{jobcategory}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Qualifications Required</label>
              <br></br>
              <div class="col-sm-9 fs-5">{qualificationsrequired}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Vacancies</label>
              <br></br>
              <div class="col-sm-9 fs-5">{vacancies}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Salary Offered</label>
              <br></br>
              <div class="col-sm-9 fs-5">{salary}</div>
              <hr></hr>
            </div>
            <div className="px-5">
              <label class="form-label">Job Locations</label>
              <br></br>
              <div class="col-sm-9 fs-5">{joblocation}</div>
              <hr></hr>
            </div>
            <div className="px-5 mb-5">
              <label class="form-label">Skills Required</label>
              <br></br>
              <div class="col-sm-9 fs-5">{skillsrequired}</div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewJob;
