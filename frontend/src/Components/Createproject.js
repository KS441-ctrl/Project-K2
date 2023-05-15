import axios from "axios";

const CreateProject = ([formdata1,supervisorNames,technicianNames,formdata3Tool1,formdata3Tool2]) => {
  const {Sales_Order_No,
      Po_No,
      Po_Days,
      Quote_No,
      Sales_Order_Date,
      Service_Component,
      Document_Date,
      Rig_Name,
      Customer_Name,
      Rig_Location,
      Rig_Type,
      Estimated_Date_Of_Commencement,
      Estimated_Project_Completion_Month} = formdata1

      const {  Tool1,
        Item_ID1,
         Make1,
         Model1,
         Serial_Number1,
        Calibration_Date1,
        Calibration_Due_Date1,
         Acceptance_Criteria1,} = formdata3Tool1
         const {  Tool2,
          Item_ID2,
           Make2,
           Model2,
           Serial_Number2,
          Calibration_Date2,
          Calibration_Due_Date2,
           Acceptance_Criteria2,} = formdata3Tool2
  // Get the data that the user has submitted
  // const { Sales_Order_No, Po_No, Po_Days, Quote_No, Sales_Order_Date, Service_Component, Document_Date, Rig_Name, Customer_Name, Rig_Location, Rig_Type, Estimated_Date_Of_Commencement, Estimated_Project_Completion_Month, Supervisor1, Technician1, Supervisor2, Technician2, Tool1, Item_ID1, Make1, Model1, Serial_Number1, Calibration_Date1, Calibration_Due_Date1, Acceptance_Criteria1, Tool2, Item_ID2, Make2, Model2, Serial_Number2, Calibration_Date2, Calibration_Due_Date2, Acceptance_Criteria2 } = document.getElementById("project-form").elements;
  console.log("hello",[formdata1,supervisorNames,technicianNames,formdata3Tool1,formdata3Tool2])

  // Make the axios request
  axios.post("http://localhost:8002/project_details", {
    Sales_Order_No,
    Po_No,
    Po_Days,
    Quote_No,
    Sales_Order_Date,
    Service_Component,
    Document_Date,
    Rig_Name,
    Customer_Name,
    Rig_Location,
    Rig_Type,
    Estimated_Date_Of_Commencement,
    Estimated_Project_Completion_Month,//formdata1
    supervisorNames,
    technicianNames,//formdata2
    Tool1,//formdata3
    Item_ID1,
    Make1,
    Model1,
    Serial_Number1,
    Calibration_Date1,
    Calibration_Due_Date1,
    Acceptance_Criteria1,
    Tool2,
    Item_ID2,
    Make2,
    Model2,
    Serial_Number2,
    Calibration_Date2,
    Calibration_Due_Date2,
    Acceptance_Criteria2
  })
    .then(response => {
      // If the request is successful, display a message to the user that the project has been created
      // document.getElementById("project-form").reset();
      alert("Project created successfully!");
    })
    .catch(error => {
      // If the request is unsuccessful, display an error message to the user
      alert(error.message);
    });
};


export default CreateProject;