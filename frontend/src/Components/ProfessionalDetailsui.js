
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Assuming you have defined the `connection` variable somewhere
// // in your code, for example:
const connection = {
  query: (query, values, callback) => {
   // Mock implementation
   console.log(`Executing query: ${query} with values: ${values}`);
   const results = [{ S_No: 1,  customer_name: 'Customer 1', designation: 'Designation 1', signature: 'Signature',components:'Components', }];
  setTimeout(() => callback(null, results), 1000);
  },
};



function ProfessionalDetailsui() {
 const [rigShortName, setRigShortName] = useState('');
 const [customerName, setCustomerName] = useState('');
const [design, setDesign] = useState('');
 const [location, setLocation] = useState('');
  const [ProfessionalDetails, setProfessionalDetails] = useState([]);

 const handleFormSubmit = (event) => {
   event.preventDefault();
   const query = 'SELECT * FROM professional_details WHERE Customer_Name = ? AND Designation = ? AND Signature = ? AND Components = ? AND Rigs = ? AND Experience_with_components = ? AND Upcoming_project_duration_RigName = ?';
    const values = [rigShortName, customerName, design, location];

   connection.query(query, values, (error, results) => {
     if (error) {
       console.log(error);
     } else {
       setProfessionalDetails(results);
    }
   });
  };


 useEffect(() => {
   connection.query('SELECT * FROM professional_details', (error, results) => {
     if (error) {
       console.log(error);
     } else {
       setProfessionalDetails(results);
    }
   });
  }, []);

  const handleUpdate = (id) => {
   const newLocation = prompt('Enter new location:');
   const query = 'UPDATE professional_details SET location = ? WHERE id = ?';
    const values = [newLocation, id];

   connection.query(query, values, (error, results) => {
     if (error) {
      console.log(error);
     } else {
      const updatedProfessionalDetails = ProfessionalDetails.map(detail => {
         if (detail.id === id) {
          return { ...detail, location: newLocation };
        } else {
           return detail;
          }
      });
       setProfessionalDetails(updatedProfessionalDetails);
      }
   });
 };


return (
  <div>
     <form onSubmit={handleFormSubmit}>
       <input type="text" placeholder="Rig Short Name" value={rigShortName} onChange={(e) => setRigShortName(e.target.value)} />
       <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
      <input type="text" placeholder="Design" value={design} onChange={(e) => setDesign(e.target.value)} />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />       <button type="submit">Search</button>
    </form>
    <table>
       <thead>
         <tr>
           <th>Rig Short Name</th>
           <th>Customer Name</th>
           <th>Design</th>
           <th>Location</th>
           <th>Action</th>
        </tr>
       </thead>
       <tbody>
         {ProfessionalDetails.map(detail => (
          <tr key={detail.id}>
             <td>{detail.rig_short_name}</td>
             <td>{detail.customer_name}</td>
             <td>{detail.design}</td>
             <td>{detail.location}</td>
             <td>
               <button onClick={() => handleUpdate(detail.id)}>Update</button>
             </td>
            </tr>
         ))}
       </tbody>
     </table>
     
   </div>
   
);
}


export default ProfessionalDetailsui;*/
