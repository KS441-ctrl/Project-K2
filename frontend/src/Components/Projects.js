import React, { useEffect, useRef, useState } from 'react';
import '../Components/css/projects.css'
import moment from "moment"
import CreateProject from '../Components/Createproject';
import TeamSelection from "./teamselection";
import axios from 'axios';
import {Link} from "react-router-dom";


function ProjectDetails() {
  const [formdata1Display1, setFormData1Display1] = useState(true)
  const [formdata1Display2, setFormData1Display2] = useState(false)
  const [formdata1Display3, setFormData1Display3] = useState(false)

  const [selectedShortName, setSelectedShortName] = useState('');
  const [selectedItem_No, setSelectedItem_No] = useState('');
  const [technicianNames, setTechnicianNames] = useState([]);

  const [Description, setDescription] = useState([false]);
  const [Item_No, setItem_No] = useState([false]);
  const [selectedDescription, setSelectedDescription] = useState();
  const [formdata1, setFormData1] = useState({
    salesOrderNo: "",
    salesOrderDate: "",
    PONO: "",
    POdays: "",
    PODate: "",
    QuoteNO: "",
    EstimatedDateCommencement: "",
    EstimatedProject: "",
    RigName: "",
    CustomerName: "",
    RigLocation: "",
    RigType: "",
    serviceComponent: "",
    documentDate: "",
    short_name: "",

  })
  // const [formdata3,setFormData3]=useState({
  //   Description:"",
  //   Item_No: "",
  //   Manufacturer:"",
  //   Model:"",
  //   SerialNumber:"",
  //   CalibrationDate:"",
  //   CalibrationDueDate:"",
  //   AcceptanceCriteria:""
  // })

  const [formdata3Tool1, setFormData3Tool1] = useState({
    tool1: "",
    itemId1: "",
    make1: "",
    model1: "",
    serialNumber1: "",
    calibrationDate1: "",
    calibrationDueDate1: "",
    acceptanceCriterial1: ""
  })
  const [formdata3Tool2, setFormData3Tool2] = useState({
    tool2: "",
    itemId2: "",
    make2: "",
    model2: "",
    serialNumber2: "",
    calibrationDate2: "",
    calibrationDueDate2: "",
    acceptanceCriterial2: ""
  })

  const handleOnChange3Tool1 = (e) => {
    const { name, value } = e.target;
    setFormData3Tool1(prev => ({ ...prev, [name]: value }));
  };
  const handleOnChange3Tool2 = (e) => {
    const { name, value } = e.target;
    setFormData3Tool2(prev => ({ ...prev, [name]: value }));
  };


 


  // setup for form1
  useEffect(() => {
    if (localStorage.getItem("formdata1")) {
      const form1 = JSON.parse(localStorage.getItem("formdata1"))
      setFormData1({ ...form1 })
    }
    else {
      localStorage.setItem("formdata1", JSON.stringify(formdata1))
    }
  }, [])


  //increment the sales order no.
  useEffect(() => {
    const getFetchData = async () => {
      const res = await fetch("http://localhost:8002/project_details")
      const data = await res.json();
      console.log(data.data.length + 1)

      const count = data.data.length < 9 ? "00" + (data.data.length + 1) : data.data.length < 99 ? "0" + data.data.length : data.data.length

      setFormData1((preve) => {
        return {
          ...preve,
          salesOrderNo: count
        }
      })

    }
    getFetchData()
  }, [])


 


  const [short_name, setshort_name] = useState([false]);

  useEffect(() => {
    fetch('http://localhost:8002/short_name')
      .then(res => res.json())
      .then(data => setshort_name(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8002/get-rig-details-with-shortName?short_name=${formdata1.short_name}`)
      .then(res => res.json())
      .then(data => {
        console.log("get-rig-details-with-shortName", data)
        const { customer_name, design, location } = data[0];
        setFormData1(prev => ({ ...prev, CustomerName: customer_name, RigLocation: location, RigType: design }));
      })
      .catch(err => console.log(err));
  }, [formdata1.short_name]);

  // Update local storage whenever the value of short_name changes
  useEffect(() => {
    localStorage.setItem('short_name', formdata1.short_name); // <-- use localStorage to save the selected value
  }, [formdata1.short_name]);

  // const handleOnChange = e => {
  //   setFormData1({ ...formdata1, short_name: e.target.value });
  // };

  useEffect(() => {
    const storedShortName = localStorage.getItem('selectedShortName');
    if (storedShortName) {
      setSelectedShortName(storedShortName);
    }
  }, []);





  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData1(prev => ({ ...prev, [name]: value }));
    setSelectedShortName(value); // <-- update the selected short name
  };

  // const handleOnChange = (e) => {
  //   setFormData1((preve) => {
  //     return {
  //       ...preve,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }

  const handleSubmitForm1 = (e) => {
    e.preventDefault()
    localStorage.setItem("formdata1", JSON.stringify(formdata1))

    setFormData1Display1(false)
    setFormData1Display2(true)

    console.log(formdata1)
  }


  /****2nd step */
  const [Supervisor, setSupervisorData] = useState({}) //store Supervisor all data
  const [addSupervisor, setAddSupervisor] = useState(["addSupervisor"])

  const [Technician, setTechnicianData] = useState({}) //store Technician all data
  const [addTechnician, setAddTechnician] = useState(["addTechnician"])
  const [supervisorNames, setSupervisorNames] = useState([]);

  const handleAddMoreaddSupervisor = (e) => {
    e.preventDefault()
    setAddSupervisor((preve) => {
      return [
        ...preve,
        "addSupervisor"
      ]
    })
  }

  const handleAddMoreaddTechnician = (e) => {
    e.preventDefault()
    setAddTechnician((preve) => {
      return [
        ...preve,
        "Technician"
      ]
    })
  }

  const handleOnChangeSupervi = (e) => {
    setSupervisorData((preve) => {
      return {
        ...preve,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleOnChangeTechnician = (e) => {
    // Handle technician dropdown change here
    setTechnicianData((preve) => {
      return {
        ...preve,
        [e.target.name]: e.target.value
      }
    })
  }



  //setup for form1
  useEffect(() => {
    if (localStorage.getItem("addSupervisor")) {
      const addSupervisornumber = JSON.parse(localStorage.getItem("addSupervisor"))
      console.log("number of aupper", addSupervisornumber)

      setAddSupervisor(addSupervisornumber)
    }
    else {
      localStorage.setItem("addSupervisor", JSON.stringify(addSupervisor))
    }
  }, [])

  useEffect(() => {
    fetch('http://localhost:8002/supervisor_customer_names')
      .then(res => res.json())
      .then(data => setSupervisorNames(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8002/technician_customer_names')
      .then(res => res.json())
      .then(data => setTechnicianNames(data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmitForm2 = (e) => {
    e.preventDefault()
    setFormData1Display1(false)
    setFormData1Display2(false)
    setFormData1Display3(true)
  }

  useEffect(() => {
    fetch('http://localhost:8002/Description')
      .then(res => res.json())
      .then(data => setDescription(data))
      .catch(err => console.log(err));
  }, []);


  useEffect(() => {
    fetch('http://localhost:8002/Item_No')
      .then(res => res.json())
      .then(data => setItem_No(data))
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:8002/get-tools-details-with-Item_No?Item_No=${formdata1.Item_No}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("get-tools-details-with-Item_No", data)
  //       const {Manufacturer, Model, Serial_No,Cal_Date,Due_Date,Acceptance_Criteria } = data[0];
  //       setFormData1(prev => ({ ...prev, Make: Manufacturer, Model: Model, SerialNumber: Serial_No,CalibrationDate:Cal_Date,CalibrationDueDate:Due_Date,AcceptanceCriteria:Acceptance_Criteria}));
  //     })
  //     .catch(err => console.log(err));
  // }, [formdata1.Item_No]);

  //fetch tool1 details with items no.
  useEffect(() => {
    if (formdata3Tool1.itemId1) {
      fetch(`http://localhost:8002/get-tools-details-with-Item_No?Item_No=${formdata3Tool1.itemId1}`)
        .then(res => res.json())
        .then(data => {
          console.log("get-tools-details-with-Item_No", data)
          const { Manufacturer, Model, Serial_No, Cal_Date, Due_Date, Acceptance_Criteria } = data[0];
          setFormData3Tool1((preve) => {
            return {
              ...preve,
              make1: Manufacturer,
              model1: Model,
              serialNumber1: Serial_No,
              calibrationDate1: Cal_Date,
              calibrationDueDate1: Due_Date,
              acceptanceCriterial1: Acceptance_Criteria
            }
          })
        })
        .catch(err => console.log(err));
    }
  }, [formdata3Tool1.itemId1]);

  //fetch data tool2
  useEffect(() => {
    if (formdata3Tool2.itemId2) {
      fetch(`http://localhost:8002/get-tools-details-with-Item_No?Item_No=${formdata3Tool2.itemId2}`)
        .then(res => res.json())
        .then(data => {
          console.log("get-tools-details-with-Item_No", data)
          const { Manufacturer, Model, Serial_No, Cal_Date, Due_Date, Acceptance_Criteria } = data[0];
          setFormData3Tool2((preve) => {
            return {
              ...preve,
              make2: Manufacturer,
              model2: Model,
              serialNumber2: Serial_No,
              calibrationDate2: Cal_Date,
              calibrationDueDate2: Due_Date,
              acceptanceCriterial2: Acceptance_Criteria
            }
          })
        })
        .catch(err => console.log(err));
    }
  }, [formdata3Tool2.itemId2]);





  //estimate date
  let dt = new Date(formdata1.EstimatedDateCommencement);
  dt.setDate(dt.getDate() + parseInt(formdata1.POdays));

  const handleBack1 = (e) => {
    e.preventDefault()
    setFormData1Display1(true)
    setFormData1Display2(false)
    setFormData1Display3(false)
  }
  const handleBack2 = (e) => {
    e.preventDefault()
    setFormData1Display1(false)
    setFormData1Display2(true)
    setFormData1Display3(false)
  }

  const handleCreateProject = async(e) => {
    e.preventDefault()

    console.log(formdata1)
    console.log(Supervisor)
    console.log(Technician)
    console.log(formdata3Tool1)
    console.log(formdata3Tool2)

   const {salesOrderNo,salesOrderDate,PONO,PODays,PoDate,QuoteNO,EstimatedDateCommencement,EstimatedProject,RigName,CustomerName,RigLocation,RigType,serviceComponent,documentDate,short_name,Description,Item_No,Manufacturer,Model,Serial_No,Cal_Date,Due_Date,Range_Value,Nominal_Value,Measured_Value,Acceptance_Criteria,Cert_No,Status,Remarks,Make,SerialNumber,CalibrationDate,CalibrationDueDate,AcceptanceCriteria,POdays} = formdata1
  
   const {tool1,itemId1, make1,model1, serialNumber1,calibrationDate1, calibrationDueDate1, acceptanceCriterial1 } = formdata3Tool1
   const {tool2, itemId2,make2,model2,serialNumber2, calibrationDate2,calibrationDueDate2,acceptanceCriterial2,} = formdata3Tool2

   const payload = {
    Sales_Order_No :"623"+salesOrderNo,
    Po_No : PONO,
    Po_Days : POdays.toString(),
    Quote_No :QuoteNO,
    Sales_Order_Date:salesOrderDate,
    Service_Component :serviceComponent,
    Document_Date :documentDate,
    Rig_Name :short_name,
    Customer_Name:CustomerName,
    Rig_Location:RigLocation,
    Rig_Type :RigType,
    Estimated_Date_Of_Commencement:EstimatedDateCommencement,
    Estimated_Project_Completion_Month:EstimatedProject,
    Supervisor1:"Tejpal Singh Chattwal",
    Technician1: "Shivam",
    Po_Date:PoDate,

    Tool1 : tool1,
    Item_ID1:itemId1,
    Make1:make1,
    Model1 :model1,
    Serial_Number1 :serialNumber1,
    Calibration_Date1 : calibrationDate1,
    Calibration_Due_Date1:calibrationDueDate1,
    Acceptance_Criteria1 :acceptanceCriterial1,
    Tool2  : tool2,
    Item_ID2 :itemId2,
    Make2: make2,
    Model2 :model2,
    Serial_Number2 : serialNumber2,
    Calibration_Date2 : calibrationDate2,
    Calibration_Due_Date2 :calibrationDueDate2,
    Acceptance_Criteria2 : acceptanceCriterial2
}

  const res = await axios.post("http://localhost:8002/project_details", payload)
  console.log(res)

  if (res.status === 200) {
    alert("Project created successfully");
    // history.push('/projects');
  }
};
  document.addEventListener('DOMContentLoaded', () => {
    const createProjectButton = document.getElementById("create-project-button");
    createProjectButton.addEventListener("click", handleCreateProject);
  });

  const CreateProjectcallapi = async (e) => {
    e.preventDefault()
    await CreateProject([formdata1, supervisorNames, technicianNames, formdata3Tool1, formdata3Tool2])
  }


  return (
    <>
      <h4>Projects</h4>
      <div className='section-step'>
        <div className={formdata1Display1 && 'active'}>Step 1 : Project Details</div>
        <div className={formdata1Display2 && 'active'}>Step 2 : Team Selection</div>
        <div className={formdata1Display3 && 'active'}>Step 3 : Tools Details</div>
      </div>
      {
        formdata1Display1 &&

        <div className='section_one'>
          <p>Step 1 : Project Order details</p>
          <div className=''>
            <form onSubmit={handleSubmitForm1}>
              <div className='left'>
                <div className='form-element'>
                  <label>Sales Order No.:</label>
                  <div className='form-element'>
                    <span>623-</span>
                    <input type='text' value={formdata1.salesOrderNo} name='salesOrderNo' onChange={handleOnChange} />
                  </div>
                </div>

                <div className='form-element'>
                  <label>Sales Order Date.:</label>
                  <input type='date' value={formdata1.salesOrderDate} name='salesOrderDate' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label>PO NO.:</label>
                  <input type='text' value={formdata1.PONO} name='PONO' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label>PO days.:</label>
                  <input type='text' value={formdata1.POdays} name='POdays' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label>PO Date.:</label>
                  <input type='date' value={formdata1.PODate} name='PoDate' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label> Quote no.:</label>
                  <input type='text' value={formdata1.QuoteNO} name='QuoteNO' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label>Estimated date of commencement:</label>
                  <input type='date' value={formdata1.EstimatedDateCommencement} name='EstimatedDateCommencement' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label>Estimated Project completion Date.:</label>
                  <input type='text' value={moment(dt).format("DD-MM-YYYY") === "Invalid date" ? "" : moment(dt).format("DD-MM-YYYY")} name='EstimatedProject' onChange={handleOnChange} />
                </div>

              </div>

              <div className='right'>
                {/* <div className='form-element'>
                  <label>Rig name*:</label>
                  <select value={formdata1.RigName} name='RigName' onChange={handleOnChange} required>
                    <option>Select value</option>
                    <option>Rig 1</option>
                  </select>
                </div> */}
                <div className='form-element'>
                  <label>Rig short name*:</label>
                  <select
                    value={formdata1.short_name}
                    name='short_name'
                    onChange={handleOnChange}
                    required
                  >
                    <option>Select value</option>
                    {short_name.map(short_name => (
                      <option key={short_name}>{short_name}</option>
                    ))}
                  </select>
                </div>

                <div className='form-element'>
                  <label>Customer name:</label>
                  <input type='text' value={formdata1.CustomerName} name='CustomerName' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label>Rig Location:</label>
                  <input type='text' value={formdata1.RigLocation} name='RigLocation' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label>Rig Design:</label>
                  <input type='text' value={formdata1.RigType} name='RigType' onChange={handleOnChange} />
                </div>

                <div className='form-element'>
                  <label>Services component*:</label>
                  <select value={formdata1.serviceComponent} name='serviceComponent' onChange={handleOnChange} required>
                    <option>Select value</option>
                    <option> Jacking System Inspection </option>
                    <option> Jacking System Remediation </option>
                    <option> Crane  System Inspection </option>
                    <option> Crane  System Remediation </option>
                    <option> Fixation system overhaul </option>
                    <option> Skidding  System Inspection </option>
                    <option> Skidding System Remediation </option>
                  </select>
                </div>

                <div className='form-element'>
                  <label>Document date :</label>
                  <input type='date' value={formdata1.documentDate} name='documentDate' onChange={handleOnChange} />
                </div>

              </div>

              <div className='btn-container'>
                <button className='btn'>Proceed to Step 2</button>
              </div>
            </form>
          </div>
        </div>

      }

      {formdata1Display2 &&
        <div className='section_two'>
          <p>Step 2 : Team Selection</p>
          {/* <TeamSelection onBack={() => setFormData1Display2(false)} onNext={() => setFormData1Display3(true)} /> */}

          <div className=''>
            <form onSubmit={handleSubmitForm2}>
              <div className='left'>
                {
                  addSupervisor.map((el, index) => {
                    return (
                      <div className='form-element'>
                        <label>*Supervisor {index + 1} :</label>
                        <select name={"Supervisor" + (index + 1)} onChange={handleOnChangeSupervi}>
                          <option>Select Option</option>
                          {supervisorNames.map(name => <option key={name}>{name}</option>)}

                        </select>
                      </div>
                    )
                  })
                }

                <button onClick={handleAddMoreaddSupervisor} style={{ marginLeft: "auto", width: "100px", display: "block" }}>Add More</button>
              </div>
              <div className='right'>
                {
                  addTechnician.map((el, index) => {
                    return (
                      <div className='form-element'>
                        <label>Technician {index + 1} :</label>
                        <select name={"Supervisor" + (index + 1)} onChange={handleOnChangeTechnician}>
                          <option>Select Option</option>
                          {technicianNames.map(name => <option key={name} value={name}>{name}</option>)}
                        </select>
                      </div>
                    )
                  })
                }
                <button onClick={handleAddMoreaddTechnician} style={{ marginLeft: "auto", width: "100px", display: "block" }}>Add More</button>
              </div>



              <div className='btn-container'>
                <button className='btn-back' onClick={handleBack1}>Back</button>
                <button className='btn' >Proceed to step 3</button>
              </div>
            </form>
          </div>
        </div>
      }




      {

        formdata1Display3 &&
        <div className='section_two'>
          <p>Step 3 : Tools Details</p>
          {/* <TeamSelection onBack={() => setFormData1Display2(false)} onNext={() => setFormData1Display3(true)} /> */}

          <div className=''>
            <form >
              <div className='left'>

                <div className='form-element'>
                  <label>Tool 1:</label>
                  <select value={formdata3Tool1.tool1} name='tool1' onChange={handleOnChange3Tool1} required>
                    <option value={""} selected>Select value</option>
                    {Description.map(Description => (<option key={Description} value={Description}>{Description}</option>))}
                  </select>
                </div>


                <div className='form-element'>
                  <label>Item Id:</label>
                  <select value={formdata3Tool1.itemId1} name='itemId1' onChange={handleOnChange3Tool1} disabled={!formdata3Tool1.tool1} required>
                    <option value={""}>Select value</option>
                    {Item_No.map(Item_No => (<option key={Item_No} value={Item_No}>{Item_No}</option>))}
                  </select>
                </div>

                <div className='form-element'>
                  <label>Make:</label>
                  <input type='text' value={formdata3Tool1.make1} name='make1' onChange={handleOnChange3Tool1} disabled={!formdata3Tool1.itemId1} />
                </div>

                <div className='form-element'>
                  <label>Model:</label>
                  <input type='text' value={formdata3Tool1.model1} name='model1' onChange={handleOnChange3Tool1} disabled={!formdata3Tool1.itemId1} />
                </div>

                <div className='form-element'>
                  <label>Serial Number:</label>
                  <input type='text' value={formdata3Tool1.serialNumber1} name='serialNumber1' onChange={handleOnChange3Tool1} disabled={!formdata3Tool1.itemId1} />
                </div>

                <div className='form-element'>
                  <label>Calibration Date:</label>
                  <input type='text' value={formdata3Tool1.calibrationDate1} name='calibrationDate1' onChange={handleOnChange3Tool1} disabled={!formdata3Tool1.itemId1} />
                </div>

                <div className='form-element'>
                  <label>Calibration Due Date:</label>
                  <input type='text' value={formdata3Tool1.calibrationDueDate1} name='calibrationDueDate1' onChange={handleOnChange3Tool1} disabled={!formdata3Tool1.itemId1} />
                </div>

                <div className='form-element'>
                  <label>Acceptance Criteria:</label>
                  <input type='text' value={formdata3Tool1.acceptanceCriterial1} name='acceptanceCriterial1' onChange={handleOnChange3Tool1} disabled={!formdata3Tool1.itemId1} />
                </div>
              </div>

              <div className='right'>
                <div className='form-element'>
                  <label>Tool 2:</label>
                  <select value={formdata3Tool2.tool2} name='tool2' onChange={handleOnChange3Tool2} required>
                    <option value={""}>Select value</option>
                    {Description.map(Description => (<option key={Description} value={Description}>{Description}</option>))}
                  </select>
                </div>

                <div className='form-element'>
                  <label>Item Id:</label>
                  <select value={formdata3Tool2.itemId2} name='itemId2' onChange={handleOnChange3Tool2} disabled={!formdata3Tool2.tool2} required>
                    <option value={""}>Select value</option>
                    {Item_No.map(Item_No => (<option key={Item_No} value={Item_No}>{Item_No}</option>))}
                  </select>
                </div>

                <div className='form-element'>
                  <label>Make:</label>
                  <input type='text' value={formdata3Tool2.make2} name='make2' onChange={handleOnChange3Tool2} disabled={!formdata3Tool2.itemId2} />
                </div>

                <div className='form-element'>
                  <label>Model:</label>
                  <input type='text' value={formdata3Tool2.model2} name='model2' onChange={handleOnChange3Tool2} disabled={!formdata3Tool2.itemId2} />
                </div>

                <div className='form-element'>
                  <label>Serial Number:</label>
                  <input type='text' value={formdata3Tool2.serialNumber2} name='serialNumber2' onChange={handleOnChange3Tool2} disabled={!formdata3Tool2.itemId2} />
                </div>

                <div className='form-element'>
                  <label>Calibration Date:</label>
                  <input type='text' value={formdata3Tool2.calibrationDate2} name='calibrationDate2' onChange={handleOnChange3Tool2} disabled={!formdata3Tool2.itemId2} />
                </div>

                <div className='form-element'>
                  <label>Calibration Due Date:</label>
                  <input type='text' value={formdata3Tool2.calibrationDueDate2} name='calibrationDueDate2' onChange={handleOnChange3Tool2} disabled={!formdata3Tool2.itemId2} />
                </div>

                <div className='form-element'>
                  <label>Acceptance Criteria:</label>
                  <input type='text' value={formdata3Tool2.acceptanceCriterial2} name='acceptanceCriterial2' onChange={handleOnChange3Tool2} disabled={!formdata3Tool2.itemId2} />
                </div>
              </div>




              <div className='btn-container'>
                <button className='btn-back' style={{ marginBottom: "-60px" }} onClick={handleBack2}>Back</button>
                {/* <Link to="/"> */}
                <button className='btn' style={{ marginBottom: "-60px" }} onClick={handleCreateProject}>Create Project</button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default ProjectDetails;
