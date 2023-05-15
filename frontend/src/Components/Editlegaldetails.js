import React, { useState } from 'react'
import '../Components/css/editcomponent.css'
import axios from 'axios';
import UploadDocument from './Uploaddocument';


const EditLegalDetails = ({
  s_no,
  country,
  File_name_for_legal_requirements,
  Documents
}) => {
    const [checked,setChecked] = useState(false)
   
    const [formData, setFormData] = useState({
      s_no:s_no,
      country:country,
      File_name_for_legal_requirements,
      Documents
    });
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleStopClose = (e)=>{
      e.stopPropagation()
    }

  
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const res = await axios.put("http://localhost:8002/post1/"+formData.s_no,formData)
        const data = await res.json()
        console.log(data)
    }

  return (
    <div>
        <div className='editRadioButton'>
                <input
                    type="radio"
                    name="rig"
                    // checked={selectedRigId === rig.id}
                    onClick={()=>setChecked(true)}
                    />
        </div>
        {
            checked &&
            <>
                <div className='popup-container editComponent'  onClick={(e)=>{
                  e.stopPropagation()
                  setChecked(false)
                }}>
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
            Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </label>
            <label>
            File_name_for_legal_requirements:
              <input
                type="text"
                name="File_name_for_legal_requirements"
                value={formData.File_name_for_legal_requirements}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Documents:
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
            </>
        }
    
        
    </div>
  )
}

export default EditLegalDetails;