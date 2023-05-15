import React, { useState, useEffect } from 'react'

import './App.css';

import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import DailyTracker from './Components/DailyTracker';
import SurveySchedule from './Components/SurveySchedule';
import ReferenceDetails from './Components/ReferenceDetails';
import LegalDetails from './Components/Legaldetails';
import ProfessionalDetails from './Components/ProfessionalDetails';
import Projects from './Components/Projects';
import Documents from './Components/Documents';
import Mobilizations from './Components/Mobilizations';
import Signout from './Components/Signout';
import RigDetails from './Components/Rigdetails';
import LoginPage from './Components/loginpage'
import ToolsRegister from './Components/Toolsregister';
import ProjectDetails from './Components/Projects';
import ProjectListingPage from './Components/Projectlistingpage';
import CreateProject from './Components/Createproject';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
  }, [isLoggedIn]);
  return (
    <div>
       <BrowserRouter>
       { isLoggedIn   && <Navbar/>}
      
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard"  element={<Dashboard/>}/>
          <Route path="/dailytracker"  element={<DailyTracker/>}/>
          <Route path="/surveyschedule"  element={<SurveySchedule/>}/>
          <Route path="/referencedetails"  element={<ReferenceDetails/>}/>
          <Route path="/rigdetails" element={<RigDetails/>} />
          <Route path="/legaldetails" element={<LegalDetails/>} />
          <Route path="/toolsregister" element={<ToolsRegister/>} />
          <Route path="/professionaldetails"  element={<ProfessionalDetails/>}/>
          <Route path="/projects"  element={<ProjectListingPage/>}/>
          <Route path="/createnew"  element={<ProjectDetails/>}/>
          <Route path="/createproject"  element={<CreateProject/>}/>
          <Route path="/documents"  element={<Documents/>}/>
          <Route path="/mobilizations"  element={<Mobilizations/>}/>
          <Route path="/signout"  element={<Signout/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}


export default App;
