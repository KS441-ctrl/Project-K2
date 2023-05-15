import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Components/css/adding.css"
import "../Components/css/legaldetails.css"
import EditLegalDetails from '../Components/Editlegaldetails';
const LegalDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRigId, setSelectedRigId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  // const [formData, setFormData] = useState()
  const [formData, setFormData] = useState({
    s_no:'',
   country:'',
   File_name_for_legal_requirements:'',
   Documents:''
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
    fetch('http://localhost:8002/post1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setShowForm(true)
      console.log(data);
      setFormData({
        s_no:'',
        country:'',
        File_name_for_legal_requirements:'',
        Documents:''
       
      });
    })
    .catch(error => console.log(error));
  };

  useEffect(() => {
    async function fetchLegalDetails() {
      try {
        const response = await axios.get("http://localhost:8002/legal_details");
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLegalDetails();
  }, []);

 const handleEditClick = () =>{

 }

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

   //edit functionality
   const [enableEdit,setEnableEdit] = useState(false)

  return (
    <div className=''>
        
        <div className="search-container-Box">
        <h1 className="rig-details-heading">Legal Details</h1>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      
          <div>
            <button className='addnewbutton' onClick={() => setShowForm(true)}>Add New</button>
            <button className="editbutton"onClick={()=>setEnableEdit(preve => !preve)}>Edit</button>
          </div>
        
    <div>
      
      {showForm && (
        <div className='popup-container' onClick={()=>setShowForm(false)}>
         <div className="popup">
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
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </label>
            <label>
            File_name_for_legal_requirements :
              <input
                type="text"
                name="File_name_for_legal_requirements"
                value={formData.File_name_for_legal_requirements}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Documents :
              <input
                type="text"
                name="Documents"
                value={formData.Documents}
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
        
            <th>S. No</th>
            <th>Country</th>
            <th>File_name_for_legal_requirements </th>
            <th>Documents</th>
           
          </tr>
        </thead>
        <tbody>
          {searchResults.map((legal_details, index) => (
            <tr key={index}>
               <td className='EditRadioBtnEnabbled'>
                {enableEdit &&
                <>
                  <EditLegalDetails
                      s_no={index+1}
                      country={legal_details.country}
                      File_name_for_legal_requirements={legal_details.File_name_for_legal_requirements}
                      Documents={legal_details.Documents}
                     

                  />
                </>
                }
             
              {index + 1}</td>
              <td>{legal_details.country}</td>
              <td>{legal_details.File_name_for_legal_requirements}</td>
              <a class="btn" href="https://www.shelfdrilling.com/wp-content/uploads/2021/01/Shelf-Drilling_Compact-Driller_Spec-Sheet-Jan-2021.pdf" target="newtab" title="View documents">View Document<img src="https://seekicon.com/free-icon-download/box-arrow-up-right_1.svg" height="15" width="49"/> </a>
             
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LegalDetails;
