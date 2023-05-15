import React, { useState } from 'react'
import '../Components/css/editcomponent.css'
import axios from 'axios';
import UploadDocument from './Uploaddocument';


const EditToolsComponent = ({
    Item_No,
    Description ,
    Manufacturer,
    Model,
    Serial_No ,
    Cal_Date ,
    Due_Date,
    Range_Value ,
    Nominal_Value ,
    Measured_Value ,
    Acceptance_Criteria ,
    Frequency  ,
    Cert_No ,
    Status ,
    Remarks,
}) => {
    const [checked,setChecked] = useState(false)
   
    const [formData, setFormData] = useState({
        Item_No:Item_No,
        Description: Description,
        Manufacturer: Manufacturer,
        Model: Model,
        Serial_No: Serial_No,
        Cal_Date: Cal_Date,
        Due_Date:Due_Date,
        Range_Value: Range_Value,
        Nominal_Value: Nominal_Value,
        Measured_Value:Measured_Value,
        Acceptance_Criteria:Acceptance_Criteria,
        Frequency:Frequency,
        Cert_No:Cert_No,
        Status:Status,
        Remarks:Remarks
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
        const res = await axios.put("http://localhost:8002/post3/"+formData.s_no,formData)
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
            ItemNo :
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
            Model:
              <input
                type="text"
                name="Model"
                value={formData.Model}
                onChange={handleInputChange}
              />
              
            </label>
            <label>
            Serial No
             
              <input
                type="text"
                name="Serial_No"
                value={formData.Serial_No}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Cal Date:
              <input
                type="text"
                name="Cal_Date"
                value={formData.Cal_Date}
                onChange={handleInputChange}
              />
            </label>
          
            <label>
            Range Value:
              <input
                type="text"
                name="Range_Value"
                value={formData.Range_Value}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Nominal Value:
              <input
                type="text"
                name="Nominal_Value"
                value={formData.Nominal_Value}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Measured Value :
              <input
                type="text"
                name="Measured_Value"
                value={formData.Measured_Value}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Acceptance Criteria:
              <input
                type="text"
                name="Acceptance_Criteria"
                value={formData.Acceptance_Criteria}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Frequency:
              <input
                type="text"
                name="Frequency"
                value={formData.Frequency}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Cert No:
              <input
                type="text"
                name="Cert_No"
                value={formData.Cert_No}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Status:
              <input
                type="text"
                name="Nominal_Value"
                value={formData.Nominal_Value}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Remarks:
              <input
                type="text"
                name="Nominal_Value"
                value={formData.Nominal_Value}
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

export default EditToolsComponent;