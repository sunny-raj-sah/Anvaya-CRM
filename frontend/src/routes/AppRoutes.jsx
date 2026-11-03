// import { Routes, Route } from "react-router-dom";


// import LandingPage from "../pages/Landing/LandingPage";
// import AuthModal from "../components/landing/AuthModal";


// import Login from "../pages/Auth/Login";
// import Register from "../pages/Auth/Register";


// import DashboardLayout from "../layouts/DashboardLayout";

// import Dashboard from "../pages/Dashboard/Dashboard";
// import LeadList from "../pages/Leads/LeadList";

// import Reports from "../pages/Reports/Reports";
// import CreateLead from "../pages/Leads/CreateLead";
// import LeadDetails from "../pages/Leads/LeadDetails";
// import EditLead from "../pages/Leads/EditLead";
// // --------------------------------------------------------

// import AgentList from "../pages/Agents/AgentList";
// import CreateAgent from "../pages/Agents/CreateAgent";

// import LeadStatusView from "../pages/LeadViews/LeadStatusView";

// import Settings from "../pages/Settings/Settings";

// import SalesAgentView from "../pages/LeadViews/SalesAgentView";



// import ProtectedRoute from "../components/auth/ProtectedRoute";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* <Route element={<DashboardLayout />}> */}
//            {/* PUBLIC AUTH ROUTES */}
  
//        {/* <Route
//         path="/login"
//         element={<Login />}
//       />

//       <Route
//         path="/register"
//         element={<Register />}
//       /> */}

//  {/* PUBLIC LANDING PAGE */}
//       <Route path="/" element={<LandingPage />} />

//    {/* AUTHENTICATION POPUPS */}
//       <Route
//         path="/login"
//         element={
//           <AuthModal>
//             <Login />
//           </AuthModal>
//         }
//       />

//       <Route
//         path="/register"
//         element={
//           <AuthModal>
//             <Register />
//           </AuthModal>
//         }
//       />


//                {/* PROTECTED CRM ROUTES */}
              

//                 <Route element={<ProtectedRoute />}>
//                <Route element={<DashboardLayout />}>

//         <Route path="/" element={<Dashboard />} />

//         <Route path="/leads" element={<LeadList />} />

//         <Route path="/agents" element={<AgentList />} />
//         <Route path="/agents/new" element={<CreateAgent />} />

//         <Route path="/reports" element={<Reports />} />

//         <Route path="/leads/new" element={<CreateLead />} />

//         <Route path="/leads/:id" element={<LeadDetails />} />
//         <Route path="/leads/edit/:id" element={<EditLead />} />

//         <Route path="/leads/status" element={<LeadStatusView />} />
 

//   <Route path="/agent/status" element={< SalesAgentView  />} />


//         <Route
//   path="/settings"
//   element={<Settings />}
// />

// </Route>
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;
// ---------------------------------------------

import { Routes, Route } from "react-router-dom";

// Public landing page
import LandingPage from "../pages/Landing/LandingPage";

// Authentication popup
import AuthModal from "../components/landing/AuthModal";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

// CRM layout
import DashboardLayout from "../layouts/DashboardLayout";

// Dashboard
import Dashboard from "../pages/Dashboard/Dashboard";

// Leads
import LeadList from "../pages/Leads/LeadList";
import CreateLead from "../pages/Leads/CreateLead";
import LeadDetails from "../pages/Leads/LeadDetails";
import EditLead from "../pages/Leads/EditLead";
import LeadStatusView from "../pages/LeadViews/LeadStatusView";

// Agents
import AgentList from "../pages/Agents/AgentList";
import CreateAgent from "../pages/Agents/CreateAgent";
import SalesAgentView from "../pages/LeadViews/SalesAgentView";

// Other pages
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";

// Route protection
import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC LANDING PAGE */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* AUTHENTICATION POPUPS */}
      <Route
        path="/login"
        element={
          <AuthModal>
            <Login />
          </AuthModal>
        }
      />

      <Route
        path="/register"
        element={
          <AuthModal>
            <Register />
          </AuthModal>
        }
      />

      {/* PROTECTED CRM ROUTES */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Leads */}
          <Route
            path="/leads"
            element={<LeadList />}
          />

          <Route
            path="/leads/new"
            element={<CreateLead />}
          />

          <Route
            path="/leads/:id"
            element={<LeadDetails />}
          />

          <Route
            path="/leads/edit/:id"
            element={<EditLead />}
          />

          <Route
            path="/leads/status"
            element={<LeadStatusView />}
          />

          {/* Agents */}
          <Route
            path="/agents"
            element={<AgentList />}
          />

          <Route
            path="/agents/new"
            element={<CreateAgent />}
          />

          <Route
            path="/agent/status"
            element={<SalesAgentView />}
          />

          {/* Reports */}
          <Route
            path="/reports"
            element={<Reports />}
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>
      </Route>

    </Routes>
  );
};

export default AppRoutes;
