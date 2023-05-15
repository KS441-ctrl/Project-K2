import React, { useState } from 'react';

function Adding() {
  const [sNo, setSNo] = useState('');
  const [rigName, setRigName] = useState('');
  const [shortName, setShortName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [details, setDetails] = useState('');
  const [design, setDesign] = useState('');
  const [location, setLocation] = useState('');
  const [hullNo, setHullNo] = useState('');
  const [design2, setDesign2] = useState('');
  const [newGroup, setNewGroup] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      s_no: sNo,
      rig_name: rigName,
      short_name: shortName,
      customer_name: customerName,
      details: details,
      design: design,
      location: location,
      hull_no: hullNo,
      design_2: design2,
      new_group: newGroup,
    };

    fetch('/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add New</button>
      {showForm && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              S.No:
              <input
                type="text"
                name="s_no"
                value={formData.s_no}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Rig Name:
              <input
                type="text"
                name="rig_name"
                value={formData.rig_name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Short Name:
              <input
                type="text"
                name="short_name"
                value={formData.short_name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Customer Name:
              <input
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Details:
              <input
                type="text"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Design:
              <input
                type="text"
                name="design"
                value={formData.design}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Hull No:
              <input
                type="text"
                name="hull_no"
                value={formData.hull_no}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Design 2:
              <input
                type="text"
                name="design_2"
                value={formData.design_2}
                onChange={handleInputChange}
              />
            </label>
            <br />
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
      )}
    </div>
  );

}

export default Adding;
