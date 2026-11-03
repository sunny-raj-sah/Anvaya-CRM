 
// import { useEffect, useState } from "react";
// import PageHeader from "../../components/common/PageHeader";
// import useLead from "../../hooks/useLead";

// const Settings = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const {
//     state,
//     fetchAgents,
//     getAllLeads,
//     removeLead,
//     removeAgent,
//   } = useLead();

//   useEffect(() => {
//     fetchAgents();
//     getAllLeads();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleDeleteLead = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this lead?"
//     );

//     if (!confirmDelete) return;

//     removeLead(id);
//   };

//   const handleDeleteAgent = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this sales agent?"
//     );

//     if (!confirmDelete) return;

//     removeAgent(id);
//   };

//   return (
//     <div className="container-fluid px-2 px-md-4 py-3">
//       <PageHeader title="Settings" subtitle="Manage Agents & Leads" />

//       {/* Dashboard Cards */}
//       {activeSection === null && (
//         <div className="row g-3">
//           <div className="col-12 col-md-6">
//             <div
//               className="card shadow-sm h-100"
//               role="button"
//               onClick={() => setActiveSection("agents")}
//             >
//               <div className="card-body text-center py-4 py-md-5">
//                 <h2 className="display-5">👥</h2>
//                 <h4>Sales Agents</h4>

//                 <h2 className="fw-bold text-primary">
//                   {state.salesAgents.length}
//                 </h2>

//                 <p className="text-muted mb-0">Total Agents</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-12 col-md-6">
//             <div
//               className="card shadow-sm h-100"
//               role="button"
//               onClick={() => setActiveSection("leads")}
//             >
//               <div className="card-body text-center py-4 py-md-5">
//                 <h2 className="display-5">📋</h2>
//                 <h4>Sales Leads</h4>

//                 <h2 className="fw-bold text-success">
//                   {state.leads.length}
//                 </h2>

//                 <p className="text-muted mb-0">Total Leads</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Sales Agents */}
//       {activeSection === "agents" && (
//         <div className="card shadow-sm">
//           <div className="card-header bg-white d-flex flex-wrap justify-content-between align-items-center gap-2 px-3 py-3">
//             <h5 className="mb-0">Sales Agents</h5>

//             <button
//               type="button"
//               className="btn btn-outline-secondary btn-sm flex-shrink-0"
//               onClick={() => setActiveSection(null)}
//             >
//               &larr; Back
//             </button>
//           </div>

//           <div className="card-body p-0">
//             <div className="table-responsive">
//               <table className="table table-hover align-middle mb-0">
//                 <thead className="table-light">
//                   <tr>
//                     <th className="px-3 text-nowrap">Name</th>
//                     <th className="text-nowrap">Email</th>
//                     <th className="text-center text-nowrap px-3">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {state.salesAgents.length > 0 ? (
//                     state.salesAgents.map((agent) => (
//                       <tr key={agent._id}>
//                         <td className="px-3 text-nowrap">
//                           {agent.name}
//                         </td>

//                         <td>{agent.email}</td>

//                         <td className="text-center px-3">
//                           <button
//                             type="button"
//                             className="btn btn-outline-danger btn-sm text-nowrap px-3"
//                             onClick={() =>
//                               handleDeleteAgent(agent._id)
//                             }
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="3"
//                         className="text-center text-muted py-4"
//                       >
//                         No sales agents found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Sales Leads */}
//       {activeSection === "leads" && (
//         <div className="card shadow-sm">
//           <div className="card-header bg-white d-flex flex-wrap justify-content-between align-items-center gap-2 px-3 py-3">
//             <h5 className="mb-0">Sales Leads</h5>

//             <button
//               type="button"
//               className="btn btn-outline-secondary btn-sm flex-shrink-0"
//               onClick={() => setActiveSection(null)}
//             >
//               &larr; Back
//             </button>
//           </div>

//           <div className="card-body p-0">
//             <div className="table-responsive">
//               <table className="table table-hover align-middle mb-0">
//                 <thead className="table-light">
//                   <tr>
//                     <th className="px-3 text-nowrap">Name</th>
//                     <th className="text-nowrap">Status</th>
//                     <th className="text-nowrap">Priority</th>
//                     <th className="text-nowrap">Agent</th>
//                     <th className="text-center text-nowrap px-3">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {state.leads.length > 0 ? (
//                     state.leads.map((lead) => (
//                       <tr key={lead._id}>
//                         <td className="px-3 text-nowrap">
//                           {lead.name}
//                         </td>

//                         <td className="text-nowrap">
//                           {lead.status}
//                         </td>

//                         <td className="text-nowrap">
//                           {lead.priority}
//                         </td>

//                         <td className="text-nowrap">
//                           {lead.salesAgent?.name || "-"}
//                         </td>

//                         <td className="text-center px-3">
//                           <button
//                             type="button"
//                             className="btn btn-outline-danger btn-sm text-nowrap px-3"
//                             onClick={() =>
//                               handleDeleteLead(lead._id)
//                             }
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="5"
//                         className="text-center text-muted py-4"
//                       >
//                         No sales leads found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Settings;
// -----------------------------------------------------------------

import { useEffect, useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import useLead from "../../hooks/useLead";

const Settings = () => {
  const [activeSection, setActiveSection] = useState(null);

  const {
    state,
    fetchAgents,
    getAllLeads,
    removeLead,
    removeAgent,
  } = useLead();

  useEffect(() => {
    fetchAgents();
    getAllLeads();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteLead = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    removeLead(id);
  };

  const handleDeleteAgent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this sales agent?"
    );

    if (!confirmDelete) return;

    removeAgent(id);
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #eeedf5",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
  };

  const headingStyle = {
    color: "#17182b",
    fontWeight: "700",
  };

  const tableHeaderStyle = {
    backgroundColor: "#f7f7fc",
    color: "#77798b",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    borderBottom: "1px solid #eeedf5",
    whiteSpace: "nowrap",
  };

  const deleteButtonStyle = {
    backgroundColor: "#fff0f0",
    color: "#d14343",
    border: "1px solid #ffe0e0",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "600",
    padding: "6px 14px",
  };

  const getStatusStyle = (status) => {
    const styles = {
      Closed: { backgroundColor: "#e6f7ed", color: "#218653" },
      New: { backgroundColor: "#f0edff", color: "#5946d2" },
      Contacted: { backgroundColor: "#e8f3ff", color: "#2874b8" },
      Qualified: { backgroundColor: "#e5f7f5", color: "#168579" },
      "Proposal Sent": { backgroundColor: "#fff3df", color: "#a66a13" },
    };

    return styles[status] || {
      backgroundColor: "#f0f0f3",
      color: "#626273",
    };
  };

  const getPriorityStyle = (priority) => {
    const styles = {
      High: { backgroundColor: "#fff0f0", color: "#d14343" },
      Medium: { backgroundColor: "#fff5e5", color: "#a66a13" },
      Low: { backgroundColor: "#eaf7ef", color: "#218653" },
    };

    return styles[priority] || {
      backgroundColor: "#f0f0f3",
      color: "#626273",
    };
  };

  const badgeStyle = {
    display: "inline-block",
    padding: "6px 11px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "600",
    whiteSpace: "nowrap",
  };

  const renderEmptyRow = (message, colSpan) => (
    <tr>
      <td
        colSpan={colSpan}
        className="text-center py-5"
        style={{ color: "#9293a1", fontSize: "13px" }}
      >
        {message}
      </td>
    </tr>
  );

  const renderSectionHeader = (title) => (
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 px-4 py-3 border-bottom">
      <h5 className="mb-0" style={headingStyle}>
        {title}
      </h5>

      <button
        type="button"
        className="btn btn-sm d-flex align-items-center gap-2"
        onClick={() => setActiveSection(null)}
        style={{
          backgroundColor: "#f0edff",
          color: "#5946d2",
          border: "1px solid #e5e0ff",
          borderRadius: "8px",
          fontWeight: "600",
          padding: "7px 13px",
          fontSize: "12px",
        }}
      >
        <span aria-hidden="true">←</span>
        Back
      </button>
    </div>
  );

  return (
    <div className="container-fluid px-2 px-md-4 py-4">
      <PageHeader
        title="Settings"
        subtitle="Manage Agents & Leads"
      />

      {/* Dashboard Cards */}
      {activeSection === null && (
        <div className="row g-4 mt-1">
          {/* Sales Agents Card */}
          <div className="col-12 col-md-6">
            <div
              className="card h-100"
              role="button"
              tabIndex={0}
              onClick={() => setActiveSection("agents")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveSection("agents");
                }
              }}
              style={{
                ...cardStyle,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c9c0ff";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(89, 70, 210, 0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#eeedf5";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(23, 24, 43, 0.04)";
              }}
            >
              <div className="card-body p-4 p-md-5 text-center">
                <div
                  className="d-flex align-items-center justify-content-center rounded-4 mx-auto mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    backgroundColor: "#f0edff",
                    color: "#5946d2",
                    fontSize: "29px",
                  }}
                >
                  👥
                </div>

                <h5
                  className="mb-2"
                  style={{ ...headingStyle, fontSize: "17px" }}
                >
                  Sales Agents
                </h5>

                <h2
                  className="mb-1"
                  style={{
                    color: "#5946d2",
                    fontSize: "34px",
                    fontWeight: "700",
                  }}
                >
                  {state.salesAgents.length}
                </h2>

                <p
                  className="mb-3"
                  style={{ color: "#77798b", fontSize: "13px" }}
                >
                  Total Agents
                </p>

                <span
                  style={{
                    color: "#5946d2",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Manage Sales Agents →
                </span>
              </div>
            </div>
          </div>

          {/* Sales Leads Card */}
          <div className="col-12 col-md-6">
            <div
              className="card h-100"
              role="button"
              tabIndex={0}
              onClick={() => setActiveSection("leads")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveSection("leads");
                }
              }}
              style={{
                ...cardStyle,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c9c0ff";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(89, 70, 210, 0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#eeedf5";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(23, 24, 43, 0.04)";
              }}
            >
              <div className="card-body p-4 p-md-5 text-center">
                <div
                  className="d-flex align-items-center justify-content-center rounded-4 mx-auto mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    backgroundColor: "#f0edff",
                    color: "#5946d2",
                    fontSize: "29px",
                  }}
                >
                  📋
                </div>

                <h5
                  className="mb-2"
                  style={{ ...headingStyle, fontSize: "17px" }}
                >
                  Sales Leads
                </h5>

                <h2
                  className="mb-1"
                  style={{
                    color: "#5946d2",
                    fontSize: "34px",
                    fontWeight: "700",
                  }}
                >
                  {state.leads.length}
                </h2>

                <p
                  className="mb-3"
                  style={{ color: "#77798b", fontSize: "13px" }}
                >
                  Total Leads
                </p>

                <span
                  style={{
                    color: "#5946d2",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Manage Sales Leads →
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sales Agents Section */}
      {activeSection === "agents" && (
        <div className="card mt-3" style={cardStyle}>
          {renderSectionHeader("Sales Agents")}

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th className="px-3 py-3" style={tableHeaderStyle}>
                      Name
                    </th>
                    <th className="py-3" style={tableHeaderStyle}>
                      Email
                    </th>
                    <th
                      className="text-center px-3 py-3"
                      style={tableHeaderStyle}
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {state.salesAgents.length > 0
                    ? state.salesAgents.map((agent) => (
                        <tr key={agent._id}>
                          <td className="px-3 py-3">
                            <div className="d-flex align-items-center gap-2">
                              <div
                                className="d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                  width: "35px",
                                  height: "35px",
                                  flexShrink: 0,
                                  backgroundColor: "#f0edff",
                                  color: "#5946d2",
                                  fontSize: "13px",
                                  fontWeight: "700",
                                }}
                              >
                                {agent.name?.charAt(0)?.toUpperCase() || "A"}
                              </div>

                              <span
                                className="text-nowrap"
                                style={{
                                  color: "#17182b",
                                  fontSize: "13px",
                                  fontWeight: "600",
                                }}
                              >
                                {agent.name}
                              </span>
                            </div>
                          </td>

                          <td
                            className="py-3"
                            style={{ color: "#55566a", fontSize: "13px" }}
                          >
                            {agent.email}
                          </td>

                          <td className="text-center px-3 py-3">
                            <button
                              type="button"
                              className="btn btn-sm"
                              onClick={() => handleDeleteAgent(agent._id)}
                              style={deleteButtonStyle}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    : renderEmptyRow("No sales agents found.", 3)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Sales Leads Section */}
      {activeSection === "leads" && (
        <div className="card mt-3" style={cardStyle}>
          {renderSectionHeader("Sales Leads")}

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th className="px-3 py-3" style={tableHeaderStyle}>
                      Name
                    </th>
                    <th className="py-3" style={tableHeaderStyle}>
                      Status
                    </th>
                    <th className="py-3" style={tableHeaderStyle}>
                      Priority
                    </th>
                    <th className="py-3" style={tableHeaderStyle}>
                      Agent
                    </th>
                    <th
                      className="text-center px-3 py-3"
                      style={tableHeaderStyle}
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {state.leads.length > 0
                    ? state.leads.map((lead) => (
                        <tr key={lead._id}>
                          <td className="px-3 py-3">
                            <span
                              className="text-nowrap"
                              style={{
                                color: "#17182b",
                                fontSize: "13px",
                                fontWeight: "600",
                              }}
                            >
                              {lead.name}
                            </span>
                          </td>

                          <td className="py-3">
                            <span
                              style={{
                                ...badgeStyle,
                                ...getStatusStyle(lead.status),
                              }}
                            >
                              {lead.status}
                            </span>
                          </td>

                          <td className="py-3">
                            <span
                              style={{
                                ...badgeStyle,
                                ...getPriorityStyle(lead.priority),
                              }}
                            >
                              {lead.priority}
                            </span>
                          </td>

                          <td
                            className="py-3 text-nowrap"
                            style={{ color: "#55566a", fontSize: "13px" }}
                          >
                            {lead.salesAgent?.name || "--"}
                          </td>

                          <td className="text-center px-3 py-3">
                            <button
                              type="button"
                              className="btn btn-sm"
                              onClick={() => handleDeleteLead(lead._id)}
                              style={deleteButtonStyle}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    : renderEmptyRow("No sales leads found.", 5)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
