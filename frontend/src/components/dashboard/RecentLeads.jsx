//  import { useNavigate } from "react-router-dom";

// const RecentLeads = ({ leads = [] }) => {
//   const navigate = useNavigate();

//   const recentLeads = leads.slice(0, 5);

//   return (
//     <div className="card shadow-sm h-100">

//       {/* Header */}
//       <div className="card-header d-flex justify-content-between align-items-center gap-2">

//         <h5 className="mb-0 text-nowrap">
//           Recent Leads
//         </h5>

//         <button
//           className="btn btn-sm btn-outline-primary text-nowrap"
//           onClick={() => navigate("/leads")}
//         >
//           View All
//         </button>

//       </div>

//       {/* Body */}
//       <div className="card-body p-0">

//         {recentLeads.length === 0 ? (

//           <div className="text-center p-4 text-muted">
//             No recent leads available
//           </div>

//         ) : (

//           <div className="table-responsive">

//             <table className="table table-hover mb-0 align-middle">

//               <thead className="table-light">

//                 <tr>
//                   <th className="text-nowrap">
//                     Name
//                   </th>

//                   <th className="text-nowrap">
//                     Agent
//                   </th>

//                   <th className="text-nowrap">
//                     Status
//                   </th>

//                   <th className="text-nowrap">
//                     Priority
//                   </th>

//                   <th className="text-nowrap">
//                     Close In
//                   </th>
//                 </tr>

//               </thead>

//               <tbody>

//                 {recentLeads.map((lead) => (

//                   <tr key={lead._id}>

//                     <td className="text-nowrap">
//                       {lead.name}
//                     </td>

//                     <td className="text-nowrap">
//                       {lead.salesAgent?.name || "--"}
//                     </td>

//                     <td>
//                       <span className="badge bg-primary text-nowrap">
//                         {lead.status}
//                       </span>
//                     </td>

//                     <td>
//                       <span
//                         className={`badge text-nowrap ${
//                           lead.priority === "High"
//                             ? "bg-danger"
//                             : lead.priority === "Medium"
//                             ? "bg-warning text-dark"
//                             : "bg-secondary"
//                         }`}
//                       >
//                         {lead.priority}
//                       </span>
//                     </td>

//                     <td className="text-nowrap">
//                       {lead.timeToClose} Days
//                     </td>

//                   </tr>

//                 ))}

//               </tbody>

//             </table>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// };

// export default RecentLeads;
// -----------------------------------------------

import { useNavigate } from "react-router-dom";

const RecentLeads = ({ leads = [] }) => {
  const navigate = useNavigate();

  const recentLeads = leads.slice(0, 5);

  const getStatusStyle = (status) => {
    const styles = {
      New: { backgroundColor: "#f0edff", color: "#5946d2" },
      Contacted: { backgroundColor: "#e8f3ff", color: "#2874b8" },
      Qualified: { backgroundColor: "#e5f7f5", color: "#168579" },
      "Proposal Sent": { backgroundColor: "#fff3df", color: "#a66a13" },
      Closed: { backgroundColor: "#e6f7ed", color: "#218653" },
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

  return (
    <div
      className="card h-100"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #eeedf5",
        borderRadius: "14px",
        boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
      }}
    >
      {/* Header */}
      <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center gap-3 px-3 px-md-4 pt-4 pb-3">
        <div>
          <h5
            className="mb-1"
            style={{
              color: "#17182b",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Recent Leads
          </h5>

          <small style={{ color: "#77798b", fontSize: "12px" }}>
            Latest leads added to your CRM
          </small>
        </div>

        <button
          type="button"
          className="btn btn-sm text-nowrap"
          onClick={() => navigate("/leads")}
          style={{
            backgroundColor: "#f0edff",
            color: "#5946d2",
            border: "1px solid #e5e0ff",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: "600",
            padding: "7px 13px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#5946d2";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f0edff";
            e.currentTarget.style.color = "#5946d2";
          }}
        >
          View All →
        </button>
      </div>

      {/* Body */}
      <div className="card-body p-0">
        {recentLeads.length === 0 ? (
          <div
            className="text-center py-5 px-3"
            style={{ color: "#77798b" }}
          >
            <div
              className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#f0edff",
                color: "#5946d2",
                fontSize: "21px",
              }}
            >
              📋
            </div>

            <h6
              className="mb-1"
              style={{ color: "#17182b", fontWeight: "600" }}
            >
              No recent leads
            </h6>

            <small>
              Your latest leads will appear here.
            </small>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  {["Name", "Agent", "Status", "Priority", "Close In"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="px-3 py-3 text-nowrap"
                        style={{
                          backgroundColor: "#f7f7fc",
                          color: "#77798b",
                          fontSize: "11px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          borderBottom: "1px solid #eeedf5",
                        }}
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead._id}>
                    {/* Name */}
                    <td className="px-3 py-3 text-nowrap">
                      <span
                        style={{
                          color: "#17182b",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        {lead.name}
                      </span>
                    </td>

                    {/* Agent */}
                    <td className="px-3 py-3 text-nowrap">
                      <span
                        style={{
                          color: "#55566a",
                          fontSize: "13px",
                        }}
                      >
                        {lead.salesAgent?.name || "--"}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-3 py-3">
                      <span
                        style={{
                          ...badgeStyle,
                          ...getStatusStyle(lead.status),
                        }}
                      >
                        {lead.status}
                      </span>
                    </td>

                    {/* Priority */}
                    <td className="px-3 py-3">
                      <span
                        style={{
                          ...badgeStyle,
                          ...getPriorityStyle(lead.priority),
                        }}
                      >
                        {lead.priority}
                      </span>
                    </td>

                    {/* Close In */}
                    <td className="px-3 py-3 text-nowrap">
                      <span
                        style={{
                          color: "#55566a",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        {lead.timeToClose} Days
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentLeads;
