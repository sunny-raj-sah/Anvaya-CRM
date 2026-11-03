// import Button from "../common/Button";

// const LeadTable = ({ leads = [], onView, onEdit, onDelete }) => {
//   if (leads.length === 0) {
//     return (
//       <div className="alert alert-info text-center mb-0">
//         No Leads Found
//       </div>
//     );
//   }

//   return (
//     <div className="table-responsive">
//       <table className="table table-hover table-bordered align-middle mb-0">

//         <thead className="table-dark">
//           <tr>
//             <th className="text-nowrap">Name</th>

//             <th className="text-nowrap">Source</th>

//             <th className="text-nowrap">Sales Agent</th>

//             <th className="text-nowrap">Status</th>

//             <th className="text-nowrap">Priority</th>

//             <th className="text-nowrap">Time To Close</th>

//             <th className="text-nowrap">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {leads.map((lead) => (
//             <tr key={lead._id}>

//               <td className="text-nowrap">
//                 {lead.name}
//               </td>

//               <td className="text-nowrap">
//                 {lead.source}
//               </td>

//               <td className="text-nowrap">
//                 {lead.salesAgent?.name || "--"}
//               </td>

//               <td>
//                 <span
//                   className={`badge text-nowrap ${
//                     lead.status === "Closed"
//                       ? "bg-success"
//                       : lead.status === "New"
//                         ? "bg-primary"
//                         : "bg-warning text-dark"
//                   }`}
//                 >
//                   {lead.status}
//                 </span>
//               </td>

//               <td>
//                 <span
//                   className={`badge text-nowrap ${
//                     lead.priority === "High"
//                       ? "bg-danger"
//                       : lead.priority === "Medium"
//                         ? "bg-warning text-dark"
//                         : "bg-secondary"
//                   }`}
//                 >
//                   {lead.priority}
//                 </span>
//               </td>

//               <td className="text-nowrap">
//                 <div className="fw-semibold">
//                   {lead.timeToClose} Days
//                 </div>

//                 <small className="text-muted">
//                   Created{" "}
//                   {new Date(lead.createdAt).toLocaleDateString()}
//                 </small>
//               </td>

//               <td>
//                 <div className="d-flex gap-1 gap-md-2">

//                   <Button
//                     variant="primary"
//                     onClick={() => onView(lead)}
//                   >
//                     <span className="d-none d-sm-inline">
//                       View
//                     </span>
//                     <span className="d-sm-none">
//                       View
//                     </span>
//                   </Button>

//                   <Button
//                     variant="warning"
//                     onClick={() => onEdit(lead)}
//                   >
//                     <span className="d-none d-sm-inline">
//                       Edit
//                     </span>
//                     <span className="d-sm-none">
//                       Edit
//                     </span>
//                   </Button>

//                   <Button
//                     variant="danger"
//                     onClick={() => onDelete(lead._id)}
//                   >
//                     <span className="d-none d-sm-inline">
//                       Delete
//                     </span>
//                     <span className="d-sm-none">
//                       Delete
//                     </span>
//                   </Button>

//                 </div>
//               </td>

//             </tr>
//           ))}
//         </tbody>

//       </table>
//     </div>
//   );
// };

// export default LeadTable;
// ---------------------------------------------------

import Button from "../common/Button";

const LeadTable = ({ leads = [], onView, onEdit, onDelete }) => {
  if (leads.length === 0) {
    return (
      <div
        className="text-center rounded-3 py-5 px-3"
        style={{
          backgroundColor: "#f7f7fc",
          border: "1px dashed #dedbed",
          color: "#77798b",
        }}
      >
        <h6 className="mb-1" style={{ color: "#17182b", fontWeight: "600" }}>
          No Leads Found
        </h6>
        <p className="mb-0 small">
          Try changing your filters or add a new lead.
        </p>
      </div>
    );
  }

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

  return (
    <div
      className="table-responsive rounded-3"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #eeedf5",
        boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
      }}
    >
      <table className="table table-hover align-middle mb-0">
        <thead>
          <tr style={{ backgroundColor: "#f7f7fc" }}>
            {[
              "Name",
              "Source",
              "Sales Agent",
              "Status",
              "Priority",
              "Time To Close",
              "Actions",
            ].map((heading) => (
              <th
                key={heading}
                className="text-nowrap px-3 py-3"
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
            ))}
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
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

              {/* Source */}
              <td className="px-3 py-3 text-nowrap">
                <span style={{ color: "#55566a", fontSize: "13px" }}>
                  {lead.source || "--"}
                </span>
              </td>

              {/* Sales Agent */}
              <td className="px-3 py-3 text-nowrap">
                <span style={{ color: "#55566a", fontSize: "13px" }}>
                  {lead.salesAgent?.name || "--"}
                </span>
              </td>

              {/* Status */}
              <td className="px-3 py-3">
                <span style={{ ...badgeStyle, ...getStatusStyle(lead.status) }}>
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

              {/* Time To Close */}
              <td className="px-3 py-3 text-nowrap">
                <div
                  style={{
                    color: "#17182b",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  {lead.timeToClose} Days
                </div>

                <small style={{ color: "#9293a1", fontSize: "11px" }}>
                  Created{" "}
                  {lead.createdAt
                    ? new Date(lead.createdAt).toLocaleDateString()
                    : "--"}
                </small>
              </td>

              {/* Actions */}
              <td className="px-3 py-3">
                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onView(lead)}
                  >
                    View
                  </Button>

                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => onEdit(lead)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(lead._id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
