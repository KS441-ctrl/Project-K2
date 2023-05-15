import React, { useState } from 'react';

const CreateProjectForm = ({ onBack, onSubmit }) => {
  const [projectDetails, setProjectDetails] = useState({
    salesOrderNo: '',
    salesOrderDate: '',
    poNo: '',
    poDays: '',
    poDate: '',
    quoteNo: '',
    estimatedCommencementDate: '',
    estimatedCompletionMonth: '',
    rigName: '',
    customerName: '',
    rigLocation: '',
    rigType: '',
    serviceComponent: '',
    documentDate: '',
    supervisor: '',
    technicians: [''],
    tools: [
      {
        toolName: '',
        itemID1: '',
        make1: '',
        model1: '',
        serialNumber1: '',
        calibrationDate1: '',
        calibrationDueDate1: '',
        acceptanceCriteria1: '',
        itemID2: '',
        make2: '',
        model2: '',
        serialNumber2: '',
        calibrationDate2: '',
        calibrationDueDate2: '',
        acceptanceCriteria2: '',
      },
    ],
  });

  const handleProjectDetailsChange = (key, value) => {
    setProjectDetails((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleTechnicianChange = (index, value) => {
    const updatedTechnicians = [...projectDetails.technicians];
    updatedTechnicians[index] = value;
    setProjectDetails((prevState) => ({
      ...prevState,
      technicians: updatedTechnicians,
    }));
  };

  const handleToolChange = (index, key, value) => {
    const updatedTools = [...projectDetails.tools];
    updatedTools[index][key] = value;
    setProjectDetails((prevState) => ({
      ...prevState,
      tools: updatedTools,
    }));
  };

  const handleAddTechnician = () => {
    setProjectDetails((prevState) => ({
      ...prevState,
      technicians: [...prevState.technicians, ''],
    }));
  };

  const handleAddTool = () => {
    setProjectDetails((prevState) => ({
      ...prevState,
      tools: [
        ...prevState.tools,
        {
          toolName: '',
          itemID1: '',
          make1: '',
          model1: '',
          serialNumber1: '',
          calibrationDate1: '',
          calibrationDueDate1: '',
          acceptanceCriteria1: '',
          itemID2: '',
          make2: '',
          model2: '',
          serialNumber2: '',
          calibrationDate2: '',
          calibrationDueDate2: '',
          acceptanceCriteria2: '',
        },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectDetails);
  };

   //edit functionality
   const [enableEdit,setEnableEdit] = useState(false)
  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <label>
        Sales Order No:
        <input
          type="text"
          value={projectDetails.salesOrderNo}
          onChange={(e) =>
            handleProjectDetailsChange('salesOrderNo', e.target.value)
          }
        />
      </label>
      <label>
        Sales Order Date:
        <input
          type="date"
          value={projectDetails.salesOrderDate}
          onChange={(e) =>
            handleProjectDetailsChange('salesOrderDate', e.target.value)
          }
        />
      </label>
      <label>
        PO No:
        <input
          type="text"
          value={projectDetails.poNo}
          onChange={(e) => handleProjectDetailsChange('poNo', e.target.value)}
        />
      </label>
      </form>
  );
 };
     export default CreateProjectForm;
