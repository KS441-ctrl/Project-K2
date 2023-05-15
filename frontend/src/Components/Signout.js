// import React, { useState, useEffect } from 'react';
// import { useNavigate  } from "react-router-dom";

// export default function Signout() {
//   const [isLoggedOut, setIsLoggedOut] = useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
//     setIsLoggedOut(sessionStorage.removeItem("isLoggedIn"));
//     navigate("/");
//   }, [isLoggedOut]);

//   return (
//     <div>Signout</div>
//   )
// }
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem('isLoggedIn');
    window.location.reload(); // Refresh the page
  }, []);

  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return <div>Signout</div>;
}


