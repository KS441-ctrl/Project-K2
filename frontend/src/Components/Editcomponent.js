import React, { useState } from 'react'
import '../Components/css/editcomponent.css'
import axios from 'axios';
import UploadDocument from './Uploaddocument';


const Editcomponent = ({
  s_no,
  rig_name,
  short_name,
  customer_name,
  details,
  design,
  location,
  hull_no,
  design_2,
  new_group,
}) => {
    const [checked,setChecked] = useState(false)
   
    const [formData, setFormData] = useState({
      s_no:s_no,
      rig_name: rig_name,
      short_name: short_name,
      customer_name: customer_name,
      details: details,
      design: design,
      location:location,
      hull_no: hull_no,
      design_2: design_2,
      new_group:new_group
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
        const res = await axios.put("http://localhost:8002/post/"+formData.s_no,formData)
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
              Rig Name:
              <input
                type="text"
                name="rig_name"
                value={formData.rig_name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Short Name:
              <input
                type="text"
                name="short_name"
                value={formData.short_name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Customer Name:
              <input
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Details:<br/>(Upload Document)
              {/* <input
                type="text"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              /> */}
              <UploadDocument handleFileUpload={(file) => setFormData({ ...formData, details: file })} />
            </label>
            <label>
             Design
             
              <input
                type="text"
                name="design"
                value={formData.design}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Hull Number:
              <input
                type="text"
                name="hull_no"
                value={formData.hull_no}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Design 2:
              <input
                type="text"
                name="design_2"
                value={formData.design_2}
                onChange={handleInputChange}
              />
            </label>
            <label>
              New Group:
              <input
                type="text"
                name="new_group"
                value={formData.new_group}
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

export default Editcomponent;