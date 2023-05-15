import React, { useState } from "react";
import "../Components/css/surveyschedule.css";

const SurveySchedule = () => {
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showLegend, setShowLegend] = useState(false);
  const [scheduleData, setScheduleData] = useState([
    
    {
      rigName: "Trident 16 (T16)",
      location: "Oman",
      actionRequired: "R(4)*",
      timelineForAction: "March’23-June’23",
      currentStatusOnAction: "In-Transit",
      remarks: "",
      lastSurvey: "2021",
      nextSurvey: "2026",
      spsWindow: "23 July 2023-18 Nov 2024",
      rigManager: "Mustaffa Pasha",
      email: ""
    }
  ]);

  const [editIndex, setEditIndex] = useState(-1);
  const [editedData, setEditedData] = useState({});

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleLegendClick = () => {
    setShowLegend(!showLegend);
  };

  const handleAddNew = () => {
    const newScheduleData = [
      ...scheduleData,
      {
        rigName: "",
        location: "",
        actionRequired: "",
        timelineForAction: "",
        currentStatusOnAction: "",
        remarks: "",
        lastSurvey: "",
        nextSurvey: "",
        spsWindow: "",
        rigManager: "",
        email: ""
      }
    ];
    setScheduleData(newScheduleData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancel = () => {
    setEditIndex(-1);
  };

  const handleSave = (index, editedData) => {
    const newScheduleData = [...scheduleData];
    newScheduleData.splice(index, 1, editedData);
    setScheduleData(newScheduleData);
    setEditIndex(-1);
  };

  const handleDelete = (index) => {
    const newScheduleData = [...scheduleData];
    newScheduleData.splice(index, 1);
    setScheduleData(newScheduleData);
  };

  const renderTableData = () => {
    const filteredData = scheduleData.filter(
      (item) =>
        item.rigName.toLowerCase().includes(searchText.toLowerCase()) &&
        item.actionRequired.toLowerCase().includes(filterText.toLowerCase())
    );

    return filteredData.map((item, index) => (
      <tr key={index}>
        <td>{item.rigName}</td>
        <td>{item.location}</td>
        <td>{item.actionRequired}</td>
        <td>{item.timelineForAction}</td>
        <td>{item.currentStatusOnAction}</td>
        <td>{item.remarks}</td>
        <td>{item.lastSurvey}</td>
        <td>{item.nextSurvey}</td>
        <td>{item.spsWindow}</td>
        <td>{item.rigManager}</td>
        <td>{item.email}</td>
        <td>
          {editIndex === index ? (
            <>
              <button onClick={() => handleSave(index, editedData)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </>
          )}
        </td>
      </tr>
    ));
  };

  return (
    
   <div>
      <h1 className="survey-schedule-heading">Survey Schedule</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-box"
        />
      </div>
   /</div>
    );
    }

    export default SurveySchedule;