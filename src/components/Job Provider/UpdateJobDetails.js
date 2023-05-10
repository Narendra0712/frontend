import React, { useEffect,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jobproviderservices from "../services/jobproviderservices";
import Sidebar from "../Sidebar";

export const UpdateJobDetails = () => {
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
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    jobproviderservices.getJobById(id).then((response) => {
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
    .catch((error)=>{
      console.log(error);
    });
  },[]);

  const UpdateJobDetails=(e)=>{
    e.preventDefault();
    const updatejob = {
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
    if(id){
      jobproviderservices.updateJobDetails(updatejob)
      .then((response)=>{
        console.log(response.data);
        toast.success("Job Details Updated Successfully !");
        navigate("/ManageJob");
      })
      .catch((error)=>{
        console.log(error);
        toast.error("Job Details Updation Fails !")
      })
    }
  }

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
            <input type="submit" value="Save" onClick={UpdateJobDetails}></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateJobDetails;
