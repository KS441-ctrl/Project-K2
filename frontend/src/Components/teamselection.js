
// import React, { useState } from 'react';
// import '../Components/css/teamselection.css'


// function TeamSelection({ onBack, onNext }) {
//   const [supervisor, setSupervisor] = useState('');
//   const [additionalSupervisiors, setAdditionalSupervisiors] = useState([]);

//   const [technician1, setTechnician1] = useState('');
//   const [technician2, setTechnician2] = useState('');
//   const [additionalTechnicians, setAdditionalTechnicians] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onNext();
//   };

//   const handleAddSupervisior = () => {
//     setAdditionalSupervisiors([...additionalSupervisiors, '']);
//   };

//   const handleSupervisiorChange = (index, value) => {
//     const updatedSupervisiors = [...additionalSupervisiors];
//     updatedSupervisiors[index] = value;
//     setAdditionalSupervisiors(updatedSupervisiors);
//   };



//   const handleAddTechnician = () => {
//     setAdditionalTechnicians([...additionalTechnicians, '']);
//   };

//   const handleTechnicianChange = (index, value) => {
//     const updatedTechnicians = [...additionalTechnicians];
//     updatedTechnicians[index] = value;
//     setAdditionalTechnicians(updatedTechnicians);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* <button type="button" onClick={onBack}>
//         Back
//       </button> */}
//       <div className='left'>
//         <div className='section_three'>
//           <div className='form-element'>
//               <div className=''>
//               <label>Supervisor 1:</label>
//               <input
//                   type="text"
//                   value={supervisor}
//                   onChange={(e) => setSupervisor(e.target.value)}
//                 />
//               </div>
//         {additionalSupervisiors.map((supervisior, index) => (
//           <div className='form-element'>
//           <label key={index}>
//             Supervisior {index + 2}:
//             <input
//               type="text"
//               value={supervisior}
//               onChange={(e) => handleSupervisiorChange(index, e.target.value)}
//             />
//           </label>
//           </div>
//         ))}

//         <button  className='btn' type="button" onClick={handleAddSupervisior}>
//           +Add more
//         </button>
//         </div>
//         </div>
//       </div>
      
//      <div className='right'>
//       <div className='section_four'>
//           <div className='form-element'>
//                 <label>
//           Technician 1:
//           <input
//             type="text"
//             value={technician1}
//             onChange={(e) => setTechnician1(e.target.value)}
//           />
//         </label>
//         </div>
//         <div className='form-element'>
//         <label>
//           Technician 2:
//           <input
//             type="text"
//             value={technician2}
//             onChange={(e) => setTechnician2(e.target.value)}
//           />
//         </label>
//         </div>
        
//         {additionalTechnicians.map((technician, index) => (
//           <div className='form-element'>
//           <label key={index}>
//             Technician {index + 3}:
//             <input
//               type="text"
//               value={technician}
//               onChange={(e) => handleTechnicianChange(index, e.target.value)}
//             />
//           </label>
//           </div>
//         ))}
//         <button className='btn' type="button" onClick={handleAddTechnician}>
//           +Add more
//         </button>
//         </div>
//      </div>
//       {/* <button type="submit">Next</button> */}
//     </form>
//   );
// }

// export default TeamSelection;
