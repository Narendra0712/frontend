import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jobproviderservices from "../services/jobproviderservices";
import Sidebar from "../Sidebar";

export const ManageJob = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    jobproviderservices
      .getAllJobs()
      .then((response) => {
        setJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ViewJob = (jobid) =>{
    navigate("/ViewJob",{state:{id:jobid}});
  }

  const UpdateJob = (jobid)=>{
    navigate("/UpdateJobDetails",{state:{id:jobid}});
  };

  const delJob = (jobid) => {
    jobproviderservices
      .deleteJob(jobid)
      .then((response) => {
        getAllJobs();
        console.log("Geting All Jobs !");
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="content py-4 px-5 fs-3">Manage Jobs</div>
      <div className="tablecontent px-5 py-5">
        <div class="container">
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th>Job Id</th>
                  <th>Job Title</th>
                  <th>View</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((jobs) => (
                  <tr key={jobs.id}>
                    <td>{jobs.jobid}</td>
                    <td>{jobs.jobtitle}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning btn-sm px-4"
                        onClick={()=>ViewJob(jobs.jobid)}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info btn-sm px-4"
                        onClick={()=>UpdateJob(jobs.jobid)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm px-4"
                        onClick={() => delJob(jobs.jobid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageJob;
