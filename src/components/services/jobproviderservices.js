import axios from "axios";

export const JOBPROVIDERLOGIN = "http://localhost:9009/jobprovider/login";
export const VIEWJOBPROVIDERPROFILE =
  "http://localhost:9009/jobprovider/viewprofile/";
export const VIEWJOB = "http://localhost:9009/job/getjob/";
export const DELETEJOB = "http://localhost:9009/job/deletejob?jobid=";
export const VIEWALLJOBS = "http://localhost:9009/job/viewalljobs";
export const UPDATEJOBDETAILS = "http://localhost:9009/job/updatejob";

class jobproviderservices {
  getJobProviderById(jobproviderid) {
    return axios.get(VIEWJOBPROVIDERPROFILE + jobproviderid);
  }
  
  getJobById(jobid) {
    return axios.get(VIEWJOB + jobid);
  }

  getAllJobs() {
    return axios.get(VIEWALLJOBS);
  }

  deleteJob(jobid) {
    return axios.delete(DELETEJOB + jobid);
  }

  updateJobDetails(jobupdate)
  {
    return axios.put(UPDATEJOBDETAILS, jobupdate)
  }
}
export default new jobproviderservices();
