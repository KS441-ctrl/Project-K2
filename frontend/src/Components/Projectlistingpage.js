import React, { useEffect, useState } from "react";
import '../Components/css/projectlistingpage.css'
import plus from '../Components/plus.png'
import sort from '../Components/sort.png'
import {Link} from "react-router-dom"
import axios from "axios";
const ProjectListingPage = () => {
  const [projectList,setProjectList] = useState([])
  
  useEffect(()=>{
  const fetchProject = async()=>{
    const res = await axios.get("http://localhost:8002/project_details")
    setProjectList(res.data.data)
  }
  fetchProject()
  },[])

  console.log(projectList)
  return (
    <>
    <div >
        <div >
      <h1 className="heading">Projects</h1>
      </div>
      <div>
      <div className="searchbar"    style={{display: "flex"}}>
        <input className="inputtext"
          type="text"
          placeholder="Search by Customer name, Rig short name"
        />
        </div>
        <div>
        <button className="btn-filter">Filter         <img src={sort}height="29" width="19" left="10500"/></button>
        </div>
        <div>
          <Link to="/createnew">
        <button className="btn-Createnew"><img src={plus} height="15" width="15"  position="absolute" />  Create New</button>
        </Link>
        </div>
      </div>

      {

          projectList.map(el =>{
            return(
              
              <div className="projectList">
                <div className="top">
                
                  <h5>SO : <span>{el.Sales_Order_NO}</span></h5>
                  {/* <button>SEction</button> */}
                </div>
                <div className="content">
                  <div className="">{el.Rig_Name}</div>
                  <div className="">{el.Rig_Location}</div>
                  <div className="">{el.Service_Component}</div>
                  <div className="">{el.Po_No}</div>
                  <div className="">Team 3</div>
                </div>
               
             </div>
            )
          })

      }

     

    </div>
    </>
  );
};

export default ProjectListingPage;
