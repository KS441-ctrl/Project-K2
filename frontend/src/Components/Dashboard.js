import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
  }, [isLoggedIn]);
  return (
    <div>Dashboard  {isLoggedIn}</div>
  )
}
