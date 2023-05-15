import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Components/css/toolsregister.css'
import '../Components/css/adding.css'
import EditToolsComponent from '../Components/EditTools';
const ToolsRegister = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRig, setSelectedRig] = useState(null);
  const [showForm, setShowForm] = useState(false);
  // const [formData, setFormData] = useState()
  const [formData, setFormData] = useState({
    Item_No:"",
Description :"",
Manufacturer :"",
Model :"",
Serial_No :"",
Cal_Date :"",
Due_Date :"",
Range_Value :"",
Nominal_Value  :"",
Measured_Value :"",
Acceptance_Criteria :"",
Frequency  :"",
Cert_No :"",
Status :"",
Remarks:""
  });
  //adding button functionality
  const handleInputChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      s_no:formData.length+1
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8002/post3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setShowForm(false)
      console.log(data);
      setFormData({
        Item_No:'',
Description :'',
Manufacturer :'',
Model :'',
Serial_No :'',
Cal_Date :'',
Due_Date :'',
Range_Value :'',
Nominal_Value  :'',
Measured_Value :'',
Acceptance_Criteria :'',
Frequency  :'',
Cert_No :'',
Status :'',
Remarks:''
      });
    })
    .catch(error => console.log(error));
  };

  useEffect(() => {
    async function fetchToolsRegister() {
      try {
        const response = await axios.get("http://localhost:8002/tools_register");
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchToolsRegister();
  }, []);


  const handleListClick = () => {
    // Render a list view of the rigs
  };

  const handleMapViewClick = () => {
    // Render a map view of the rigs
  };

  const handleHandbookClick = () => {
    // Render a handbook of the rigs
  };

  const handleDetailsClick = (rig) => {
    console.log(rig);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStopClose = (e)=>{
    e.stopPropagation()
  }

  const handleEditClick = (rig) => {
    setSelectedRig(rig);
    setShowForm(true);
  };
//edition functionality
const [enableEdit,setEnableEdit] = useState(false)

  return (
    <div className='rig'>
        
        <div className="search-container-Box">
        <h1 className="tools-register-heading">Tools Register</h1>
          <input
            type="text"
            placeholder="Search by Item No."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        
          <div>
            <button className='addnewbutton' onClick={() => setShowForm(true)}>Add New</button>
            <button className="editbutton"onClick={()=>setEnableEdit(preve => !preve)}>Edit</button>
          </div>
        
    <div>
      {/* add new */}
      {showForm && (
      <div className='popup-container'  onClick={(e)=>{
        e.stopPropagation()
        setShowForm(false)
      }} > 
        <div className="popup" onClick={handleStopClose}>
          <form onSubmit={handleSubmit}>
          {/* <label>
              S.NO
              <input
                type="text"
                name="s_no"
                value={formData.rig_name}
                onChange={handleInputChange}
              />
            </label> */}
            <label>
            Item No:
              <input
                type="text"
                name="Item_No"
                value={formData.Item_No}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Description :
              <input
                type="text"
                name="Description"
                value={formData.Description}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Manufacturer :
              <input
                type="text"
                name="Manufacturer"
                value={formData.Manufacturer}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Model :
              <input
                type="text"
                name="Model"
                value={formData.Model}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Serial No :
              <input
                type="text"
                name="Serial_No"
                value={formData.Serial_No}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Cal Date :
              <input
                type="text"
                name="Cal_Date"
                value={formData.Cal_Date}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Manufacturer :
              <input
                type="text"
                name="Manufacturer"
                value={formData.Manufacturer}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Due Date :
              <input
                type="text"
                name="Due_Date"
                value={formData.Due_Date}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Range Value :
              <input
                type="text"
                name="Range_Value"
                value={formData.Range_Value}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Nominal Value  :
              <input
                type="text"
                name="Nominal_Value"
                value={formData.Nominal_Value}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Range Value :
              <input
                type="text"
                name="Range_Value"
                value={formData.Range_Value}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Measured Value  :
              <input
                type="text"
                name="Measured_Value"
                value={formData.Measured_Value}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Acceptance Criteria  :
              <input
                type="text"
                name="Acceptance_Criteria"
                value={formData.Acceptance_Criteria}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Frequency   :
              <input
                type="text"
                name="Frequency"
                value={formData.Frequency}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Cert No   :
              <input
                type="text"
                name="Cert_No"
                value={formData.Cert_No}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Status    :
              <input
                type="text"
                name="Status"
                value={formData.Status}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Remarks    :
              <input
                type="text"
                name="Remarks"
                value={formData.Remarks}
                onChange={handleInputChange}
              />
            </label>
        
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      )}
    </div>

      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Item No</th>
            <th>Description</th>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Serial No</th>
            <th>Cal Date</th>
            <th>Range Value</th>
            <th>Nominal Value</th>
            <th>Measured Value</th>
            <th>Acceptance Criteria</th>
            <th>Frequency</th>
            <th>Cert No</th>
            <th>Status</th>
            <th>Remarks</th>
           
          </tr>
        </thead>
        <tbody>
          {searchResults.map((tools_register, index) => (
            <tr key={index}>
               <td className='EditRadioBtnEnabbled'>
                {enableEdit &&
                <>
                  <EditToolsComponent
                      s_no={index+1}
                      Item_No={tools_register.Item_No}
                      Description={tools_register.Description}
                      Manufacturer={tools_register.Manufacturer}
                      Model={tools_register.Model}
                      Serial_No={tools_register.Serial_No}
                      Cal_Date={tools_register.Cal_Date}
                      Range_Value={tools_register.Range_Value}
                      Nominal_Value={tools_register.Nominal_Value}
                      Measured_Value={tools_register.Measured_Value}
                      Acceptance_Criteria={tools_register.Acceptance_Criteria}
                      Frequency={tools_register.Frequency}
                      Cert_No={tools_register.Cert_No}
                      Status={tools_register.Status}
                      Remarks={tools_register.Remarks}
                  />
                </>
                }
             
              {index + 1}</td>
              <td>{tools_register.Item_No}</td>
              <td>{tools_register.Description}</td>
              <td>{tools_register.Manufacturer}</td>
              <td>{tools_register.Model}</td>
              <td>{tools_register.Serial_No}</td>
              <td>{tools_register.Cal_Date}</td>
              <td>{tools_register.Range_Value}</td>
              <td>{tools_register.Nominal_Value}</td>
              <td>{tools_register.Measured_Value}</td>
              <td>{tools_register.Acceptance_Criteria}</td>
              <td>{tools_register.Frequency}</td>
              <td>{tools_register.Cert_No}</td>
              <td>{tools_register.Status}</td>
              <td>{tools_register.Remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToolsRegister;
