import React from 'react';
import ergonlogo from '../Components/ergonlogo.png'
import signout from '../../src/Components/signout-icon.png'
import '../App.css';
import ".././Components/css/nav.css"
import RigDetails from '../Components/Rigdetails';
import {Link} from 'react-router-dom';

function Navbar() {

  
  return (
    <div>

      <div className="App">
        <left ></left>
      </div>
      <div>
        <div div className="logo"><b>Jupiter</b>


          <img src={ergonlogo} className="ergonlogo" height="59" width="49" position="absolute" top="76686" left="1275" />



          <nav>
            <ul className='horizontal-list' style={{ display: 'flex', justifyContent: 'space-between'  }} >
              
              <li><Link to = "/dashboard" class="text-dark">Dashboard</Link></li>
              <li><Link to = "/dailytracker" class="text-dark">Daily Tracker</Link></li>
              <li><Link to = "/surveyschedule" class="text-dark">Survey Schedule</Link></li>






              <div>
                <div class="dropdown">
                  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Reference details
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                    <li>
                      <Link to="/rigdetails" class="dropdown-item">
                        Rig Details
                      </Link>
                    </li>
                    <li><Link to="/toolsregister" class="dropdown-item" >Tools Register</Link></li>
                    <li><Link to="/legaldetails" class="dropdown-item" >Legal Details</Link></li>
                    <li><Link to="Templates" class="dropdown-item" >Templates</Link></li>
                  </ul>
                </div>

                {/* Render other components */}
              </div>












              <li><Link to = "/professionaldetails" class="text-dark">Professionals Details</Link></li>
              <li><Link to = "/projects" class="text-dark">Projects</Link></li>
              <li><Link to ="/documents" class="text-dark">Documents</Link></li>
              <li><Link to = "/mobilizations" class="text-dark">Mobilizations</Link></li>
              <li><Link to ="/signout" class="text-dark">Signout<img src={signout} alt="Sign out" /></Link></li>
              {/* <li><button>Signout<img src={signout} alt="Sign out" /></button></li> */}
            </ul>

          </nav>

        </div>




      </div>



    </div>
  );
}


export default Navbar;
