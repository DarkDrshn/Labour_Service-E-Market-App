import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";

function ClientLogout () {

  const handleLogout = async () => {
    try {

      await axios.post('http://localhost:8000/api/v1/clientlogOut/logout',0,{
        withCredentials:true,
      });
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
      localStorage.remove("user");
      Cookies.remove("clientName");
      Cookies.remove("clientId");
      Cookies.remove("loggedIn");
      Cookies.remove("accessToken")
      window.location.href = '/'
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default ClientLogout;
