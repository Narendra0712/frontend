import React from "react";
import { useState, useEffect } from "react";
import jobproviderservices from "../services/jobproviderservices";

export const Sidebar = () => {
  const [companyname, setCompanyName] = useState("");
  const id = window.sessionStorage.getItem("JobProviderId");
  useEffect(() => {
    jobproviderservices.getJobProviderById(id).then((response) => {
      setCompanyName(response.data.companyname);
    });
  });
  return (
    <>
      <div className="sidebar">
        <h2 className="fs-3">{companyname}</h2>
        <ul>
          <li>
            <a href="JPHome">Home</a>
          </li>
          <li>
            <a href="JPProfile">Profile</a>
          </li>
          <li>
            <a href="PostJob">Post New Job</a>
          </li>
          <li>
            <a href="ManageJob">Manage Jobs</a>
          </li>
          <li>
            <a href="JPProfileEdit">Edit Profile</a>
          </li>
          <li>
            <a href="/">Log Out</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
