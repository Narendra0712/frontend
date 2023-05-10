import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

import JPLogin from "./components/Job Provider/JPLogin";
import JPRegistration from "./components/Job Provider/JPRegistration";
import JPHome from "./components/Job Provider/JPHome";
import JPProfile from "./components/Job Provider/JPProfile";
import PostJob from "./components/Job Provider/PostJob";
import ManageJob from "./components/Job Provider/ManageJob";
import UpdateJobDetails from "./components/Job Provider/UpdateJobDetails";
import ViewJob from "./components/Job Provider/ViewJob";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        <Route path="/JPLogin" element={<JPLogin />} />
        <Route path="/JPRegistration" element={<JPRegistration />} />
        <Route path="/JPHome" element={<JPHome />} />
        <Route path="/JPProfile" element={<JPProfile />} />
        <Route path="/PostJob" element={<PostJob />} />
        <Route path="/ManageJob" element={<ManageJob/>} />
        <Route path="/UpdateJobDetails" element={<UpdateJobDetails/>} />
        <Route path="/ViewJob" element={<ViewJob/>} />

      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
