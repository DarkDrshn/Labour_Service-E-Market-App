import React from 'react';
import NavbarWeb from './components/Navbar';
import { PreNavbar } from './components/Prenavbar';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
// import Footer from './components/Footer';
import Sitemap from './components/Sitemap';
import Faq from './components/Faq';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdvDashAuthCliRating from './components/lawyer/Adv_Dash_auth_cli_rating';
import AdvDashAuthClient from './components/lawyer/Adv_Dash_auth_clients';
import AdvDashAuthClientHist from './components/lawyer/Adv_Dash_auth_cli_hist';
import AdvDashAuthCliReq from './components/lawyer/Adv_Dash_auth_cli_req';
import AdvDashAuthClientsDetails from './components/lawyer/Adv_Dash_auth_clients_details';

import CliLogin from './components/client/Client_login';
import CliRegister from './components/client/Client_reg';
import LsLogin from './components/lawyer/L_login';
import LsRegister from './components/lawyer/Lawyer_registration';
import AdvDashAuthCliChat from './components/lawyer/Adv_Dash_auth_cli_Chat';
import CliLogout from './components/lawyer/L_logout';

import ClientDash from './components/client/Client_dash';

import Market from './components/market/Market';

// import Chat from './components/Newchat';

//particular route will have a footer, cant give to entire app


const Routing = () => {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/sitemap" element={<Sitemap />} />
    <Route exact path="/faq" element={<Faq />} />
    <Route exact path="/login" element={<CliRegister />} />
    <Route exact path="/register" element={<CliLogin />} />
    <Route exact path="/logout" element={<CliLogout />} />

    <Route exact path="/ls/register" element={<LsRegister />} />
    <Route exact path="/ls/login" element={<LsLogin />} />

    <Route exact path="/ls/cli_hist" element={<AdvDashAuthClientHist />} />
    <Route exact path="/ls/cli" element={<AdvDashAuthClient />} />
    <Route exact path="/ls/cli_rating" element={<AdvDashAuthCliRating />} />
    <Route exact path="/ls/cli_details" element={<AdvDashAuthClientsDetails />} />
    <Route exact path="/ls/cli_req" element={<AdvDashAuthCliReq />} />
    <Route exact path="/ls/cli_chat" element={<AdvDashAuthCliChat />} />

    <Route exact path="/client/dash" element={<ClientDash />} />



    <Route exact path="/market" element={<Market />} />

    <Route path="*" element={<Error />} />
    </Routes>
    </Router>
  )
}

// function App() {

//   const [state,dispatch] = useReducer(reducer,initialstate)

//   return (
//     <>
//       <UserContext.Provider value={{state, dispatch}}>
//         <Navbar />
//         <Routing />
//       </UserContext.Provider>
//     </>
//   );
// }



function App() {
  return (
    <>
    <PreNavbar />
    <NavbarWeb />
    <Routing />
    {/* <Footer /> */}
    </>
  );
}

export default App;
