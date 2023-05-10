import React, { useEffect, useState } from "react";
import jobproviderservices from "../../services/jobproviderservices";
import Sidebar from "../Sidebar";


export const JPHome = () => {
  const [employeename, setEmployeeName] = useState("");

  const id = window.sessionStorage.getItem("JobProviderId");

  useEffect(() => {
    jobproviderservices.getJobProviderById(id).then((response) => {
      setEmployeeName(response.data.employeename);
    });
  });
  return (
    <>
      <Sidebar />
      <>
        <div className="content">
          <h3>Welcome {employeename}</h3>
          <div className="row">
            <div className="col-4">
              <div className="row border mx-3 my-5 p-4 ">
                <h3>Posted Jobs</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="row border mx-3 my-5 p-4">
                <h3>Applications Received</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="row border mx-3 my-5 p-4">
                <h3>Shorlisted Candidates</h3>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-4">
              <div className="row border mx-3 p-4">
                <h3>Dashboard</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="row border mx-3 p-4">
                <h3>Dashboard</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="row border mx-3 p-4">
                <h3>Dashboard</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default JPHome;
