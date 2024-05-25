import React, { useState } from 'react';
import NavbarWeb from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

import { PreNavbar } from './components/Prenavbar';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Sitemap from './components/Sitemap';
import Faq from './components/Faq';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdvDashAuthCliRating from './components/labour/Adv_Dash_auth_cli_rating';
import AdvDashAuthClient from './components/labour/Adv_Dash_auth_clients';
import AdvDashAuthClientHist from './components/labour/Adv_Dash_auth_cli_hist';
import AdvDashAuthCliReq from './components/labour/Adv_Dash_auth_cli_req';
import AdvDashAuthClientsDetails from './components/labour/Adv_Dash_auth_clients_details';

import CliLogin from './components/client/Client_login';
import CliRegister from './components/client/Client_reg';
import LsLogin from './components/labour/L_login';
import LsRegister from './components/labour/Labour_registration';
import LaborerHelpSection from './components/labour/laborer_help.js';
import LaborerEdit  from './components/labour/Laborer_editProfile.js';
import LsLogout from './components/labour/L_logout';

import AdvDashAuthCliChat from './components/labour/Adv_Dash_auth_cli_Chat';
import CliLogout from './components/labour/L_logout';
import ClientDash from './components/client/Client_dash';
import ClientHelpSection from './components/client/client_help.js';
import ClientEdit from './components/client/Client_editProdile.js';

import Market from './components/market/Market';
import { AdminDash } from './components/Admin/Admin_dash.js';
import  AdminGraph  from './components/Admin/Admin_graph.js';
import { AdminReview } from './components/Admin/Admin_review.js';
import { AdminReportedUsers } from './components/Admin/Admin_report.js';
import { AdminTotalCount } from './components/Admin/Admin_totalCount.js';
import { ServiceHistory } from './components/client/Client_service.js';
import MapComponent from './components/Map.js';

const Routing = ({ isAdminPage }) => {
  const laborerId = useParams();
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/map" element={<MapComponent />} />
      <Route exact path="/sitemap" element={<Sitemap />} /> 
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/cl/login" element={<CliLogin />} />
      <Route exact path="/cl/register" element={<CliRegister />} />
      <Route exact path="/logout" element={<CliLogout />} />

      <Route exact path="/client/dash" element={<ClientDash />} />
      <Route exact path="/client/help" element={<ClientHelpSection />} />
      <Route exact path="/client/service" element={<ServiceHistory />} />
      <Route exact path="/client/profile" element={<ClientEdit />} />



      <Route exact path="/ls/register" element={<LsRegister />} />
      <Route exact path="/ls/login" element={<LsLogin />} />

      <Route exact path="/ls/cli_hist" element={<AdvDashAuthClientHist laborerId={laborerId} />} />
      <Route exact path="/ls/cli" element={<AdvDashAuthClient />} />
      <Route exact path="/ls/cli_rating" element={<AdvDashAuthCliRating laborerId={laborerId}/>} />
      <Route exact path="/ls/cli_details" element={<AdvDashAuthClientsDetails />} />
      <Route exact path="/ls/cli_req" element={<AdvDashAuthCliReq />} />
      <Route exact path="/ls/cli_chat" element={<AdvDashAuthCliChat />} />
      <Route exact path="/ls/help" element={<LaborerHelpSection />} />
      <Route exact path="/ls/profile" element={<LaborerEdit />} />



      <Route exact path="/market" element={<Market laborerId={laborerId}/>} />
      {isAdminPage && (
        <>
          <Route exact path="/admin" element={<AdminDash />} />
          <Route exact path="/admin/graph" element={<AdminGraph />} />
          <Route exact path="/admin/review" element={<AdminReview />} />
          <Route exact path="/admin/report" element={<AdminReportedUsers />} />
          <Route exact path="/admin/totalCount" element={<AdminTotalCount />} />
        </>
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

function App() {
  const [isAdminPage, setIsAdminPage] = useState(false);

  // Check if the current page is the admin page based on window location
  const checkIsAdminPage = () => {
    setIsAdminPage(window.location.pathname.startsWith("/admin"));
  };

  // Call the checkIsAdminPage function whenever the route changes
  React.useEffect(() => {
    checkIsAdminPage();
  }, []);

  return (
    <>
    <Router>
      {!isAdminPage && (
        <>
          <PreNavbar />
          <NavbarWeb />
        </>
      )}
      <Routing isAdminPage={isAdminPage} />
    </Router>
    <ToastContainer />
  </>
  );
}

export default App;
