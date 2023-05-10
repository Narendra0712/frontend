import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Sidebar from "../Sidebar";

export const PostJob = () => {
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

  const handleClick = (e) => {
    e.preventDefault();
    const job = {
      jobtitle,
      jobdescription,
      jobtype,
      jobcategory,
      qualificationsrequired,
      vacancies,
      salary,
      joblocation,
      skillsrequired,
    };
    if (jobtitle.length === 0) {
      toast.error("Enter Job Title");
    } else if (jobdescription.length === 0) {
      toast.error("Enter Job Description");
    } else if (jobtype.length === 0) {
      toast.error("Enter Job Type");
    } else if (jobcategory.length === 0) {
      toast.error("Enter Job Category");
    } else if (qualificationsrequired.length === 0) {
      toast.error("Enter Qulifications Required");
    } else if (vacancies.length === 0) {
      toast.error("Enter Vacancies Avilable");
    } else if (salary.length === 0) {
      toast.error("Enter Job Salary Offered");
    } else if (joblocation.length === 0) {
      toast.error("Enter Job Locations");
    } else if (skillsrequired.length === 0) {
      toast.error("Enter Skills Required For Job");
    } else {
      fetch("http://localhost:9009/job/addjob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
      }).then(() => {
        toast.success("Job Posted Successfully !");
        navigate("/JPHome");
      });
    }
  };
  return (
    <>
      <Sidebar />
      <div className="content py-4 px-5 fs-3">Post New Job</div>
      <div className="postjob">
        <form className="form-right">
          <div className="mb-3">
            <label>Job Title</label>
            <input
              type="text"
              className="input-field"
              value={jobtitle}
              onChange={(e) => setJobTitle(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Job Description</label>
            <input
              type="text"
              className="input-field"
              value={jobdescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Job Type</label>
            <input
              type="text"
              className="input-field"
              value={jobtype}
              onChange={(e) => setJobType(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Job Category</label>
            <input
              type="text"
              className="input-field"
              value={jobcategory}
              onChange={(e) => setJobCategory(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Required Qulifications</label>
            <input
              type="text"
              className="input-field"
              value={qualificationsrequired}
              onChange={(e) => setQulifications(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Vacancies Avilable</label>
            <input
              type="text"
              className="input-field"
              value={vacancies}
              onChange={(e) => setVacancies(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Salary Offered</label>
            <input
              type="text"
              className="input-field"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Job Locations</label>
            <input
              type="text"
              className="input-field"
              value={joblocation}
              onChange={(e) => setJoLobcation(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Skills Required</label>
            <input
              type="text"
              className="input-field"
              value={skillsrequired}
              onChange={(e) => setSkills(e.target.value)}
            ></input>
          </div>
          <div className="inputbox">
            <input type="submit" value="Post Job" onClick={handleClick}></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostJob;
