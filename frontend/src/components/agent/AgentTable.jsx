// const AgentTable = ({
//   agents = [],
// }) => {
//   if (agents.length === 0) {
//     return (
//       <div className="alert alert-info">
//         No Sales Agents Found.
//       </div>
//     );
//   }

//   return (
//     <div className="table-responsive">

//       <table className="table table-hover table-bordered">

//         <thead className="table-dark">

//           <tr>

//             <th>Name</th>

//             <th>Email</th>

//             <th>Created</th>

//           </tr>

//         </thead>

//         <tbody>

//           {agents.map((agent) => (
//             <tr key={agent._id}>

//               <td>{agent.name}</td>

//               <td>{agent.email}</td>

//               <td>
//                 {new Date(
//                   agent.createdAt
//                 ).toLocaleDateString()}
//               </td>

//             </tr>
//           ))}

//         </tbody>

//       </table>

//     </div>
//   );
// };

// export default AgentTable;

// -------------------------------------------

const AgentTable = ({ agents = [] }) => {
  if (agents.length === 0) {
    return (
      <div
        className="text-center rounded-3 py-5 px-3"
        style={{
          backgroundColor: "#f7f7fc",
          border: "1px dashed #dedbed",
          color: "#77798b",
        }}
      >
        <h6
          className="mb-1"
          style={{ color: "#17182b", fontWeight: "600" }}
        >
          No Sales Agents Found
        </h6>
        <p className="mb-0 small">
          Sales agents will appear here once they are added.
        </p>
      </div>
    );
  }

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
          <tr>
            {["Name", "Email", "Created"].map((heading) => (
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
            ))}
          </tr>
        </thead>

        <tbody>
          {agents.map((agent) => (
            <tr key={agent._id}>
              {/* Agent Name */}
              <td className="px-3 py-3">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "38px",
                      height: "38px",
                      flexShrink: 0,
                      backgroundColor: "#f0edff",
                      color: "#5946d2",
                      fontSize: "14px",
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

              {/* Email */}
              <td className="px-3 py-3">
                <span
                  className="text-nowrap"
                  style={{
                    color: "#55566a",
                    fontSize: "13px",
                  }}
                >
                  {agent.email}
                </span>
              </td>

              {/* Created Date */}
              <td className="px-3 py-3 text-nowrap">
                <span
                  style={{
                    color: "#77798b",
                    fontSize: "13px",
                  }}
                >
                  {agent.createdAt
                    ? new Date(agent.createdAt).toLocaleDateString()
                    : "--"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentTable;
