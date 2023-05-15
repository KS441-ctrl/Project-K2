// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import './css/loginpage.css'
// import ergonlogo from '../Components/ergonlogo.png'
// const LoginPage = () => {
//   const [useremail, setUseremail] = useState('shm@ergontec.com');
//   const [password, setPassword] = useState('ergon@123');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const handleEmailChange = (event) => {
//     setUseremail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   useEffect(() => {
//     setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
//     isLoggedIn && navigate("/dashboard");
    
//   }, [isLoggedIn]);


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       if (useremail.length > 0 && password.length > 0) {
//         const response = await axios.post('http://localhost:8002/loginpage', { Useremail: useremail, Password: password });
//         if (response.data) {
//           sessionStorage.setItem("isLoggedIn", true);
//           navigate("/dashboard");
//         }
//         setErrorMessage('');
//       }
//     } catch (error) {
//       console.log(error.response.data.message);
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   return (
//     <div className='loginWrapper'>
//       <form onSubmit={handleSubmit}>
//         <div className="loginForms">
//           <div className='logoWrapper'><img src={ergonlogo} className="ergonlogo"/></div>
//           <div className='userEmailWrapper'>
//             <label>UserEmail:</label>
//               <input type="email" value={useremail} onChange={handleEmailChange} />          
//           </div>
//           <div className='userEmailWrapper'>
//             <label>Password:</label>
//               <input type="password" value={password} onChange={handlePasswordChange}/>          
//           </div>
//           <button className="loginButton" type="submit">Login</button>
//           {errorMessage && <p>{errorMessage}</p>}
//           <div className='loginDescription'>
//             <div>If you are having any issues with login, Contact:</div>
//             <div>Shubham Mehta at: shm@ergontec.com or +91-95413-77346</div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/loginpage.css';
import ergonlogo from '../Components/ergonlogo.png';

const LoginPage = () => {
  const [useremail, setUseremail] = useState('shm@ergontec.com');
  const [password, setPassword] = useState('ergon@123');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setUseremail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      const status = sessionStorage.getItem('isLoggedIn');
      if (status) {
        setIsLoggedIn(true);
        navigate('/dashboard');
      }
    };
    checkLoginStatus();
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (useremail.length > 0 && password.length > 0) {
        const response = await axios.post('http://localhost:8002/loginpage', {
          Useremail: useremail,
          Password: password,
        });
        if (response.data) {
          sessionStorage.setItem('isLoggedIn', true);
          setIsLoggedIn(true);
          window.location.reload(); // Refresh the page
        }
        setErrorMessage('');
      }
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="loginWrapper">
      <form onSubmit={handleSubmit}>
        <div className="loginForms">
          <div className="logoWrapper">
            <img src={ergonlogo} className="ergonlogo" alt="Ergon Logo" />
          </div>
          <div className="userEmailWrapper">
            <label>UserEmail:</label>
            <input type="email" value={useremail} onChange={handleEmailChange} />
          </div>
          <div className="userEmailWrapper">
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button className="loginButton" type="submit">
            Login
          </button>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="loginDescription">
            <div>If you are having any issues with login, Contact:</div>
            <div>Shubham Mehta at: shm@ergontec.com or +91-95413-77346</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;


