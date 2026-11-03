// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const StatusCards = ({ leads = [] }) => {

//   const statusList = [
//     {
//       title: "New",
//       color: "primary",
//     },
//     {
//       title: "Contacted",
//       color: "info",
//     },
//     {
//       title: "Qualified",
//       color: "warning",
//     },
//     {
//       title: "Proposal Sent",
//       color: "secondary",
//     },
//     {
//       title: "Closed",
//       color: "success",
//     },
//   ];


//   const getStatusCount = (status) => {
//     return leads.filter(
//       (lead) => lead.status === status
//     ).length;
//   };


//   return (
//     <div>

//       <h5 className="mb-3">
//         Lead Status Overview
//       </h5>


//       <div className="row g-3">

//         {
//           statusList.map((item) => (

//             <div
//               className="col-md-4 col-lg-3"
//               key={item.title}
//             >

//               <div
//                 className={`card border-${item.color} shadow-sm`}
//               >

//                 <div className="card-body text-center">

//                   <h6 className="text-muted">
//                     {item.title}
//                   </h6>


//                   <h2
//                     className={`text-${item.color}`}
//                   >
//                     {getStatusCount(item.title)}
//                   </h2>


//                   <p className="mb-0">
//                     Leads
//                   </p>

//                 </div>

//               </div>

//             </div>

//           ))
//         }

//       </div>

//     </div>
//   );
// };


// export default StatusCards;
// ----------------------------------------

const StatusCards = ({ leads = [] }) => {
  const statusList = [
    {
      title: "New",
      color: "#5946d2",
      background: "#f0edff",
    },
    {
      title: "Contacted",
      color: "#2874b8",
      background: "#e8f3ff",
    },
    {
      title: "Qualified",
      color: "#a66a13",
      background: "#fff5e5",
    },
    {
      title: "Proposal Sent",
      color: "#7252bd",
      background: "#f1eaff",
    },
    {
      title: "Closed",
      color: "#218653",
      background: "#e6f7ed",
    },
  ];

  const getStatusCount = (status) => {
    return leads.filter((lead) => lead.status === status).length;
  };

  return (
    <div>
      <div className="mb-3">
        <h5
          className="mb-1"
          style={{
            color: "#17182b",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          Lead Status Overview
        </h5>

        <small style={{ color: "#77798b", fontSize: "12px" }}>
          Track the distribution of your leads by status
        </small>
      </div>

      <div className="row g-3">
        {statusList.map((item) => (
          <div
            className="col-6 col-md-4 col-lg-3"
            key={item.title}
          >
            <div
              className="card h-100"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eeedf5",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(23, 24, 43, 0.04)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(89, 70, 210, 0.10)";
                e.currentTarget.style.borderColor = "#e5e0ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(23, 24, 43, 0.04)";
                e.currentTarget.style.borderColor = "#eeedf5";
              }}
            >
              <div className="card-body text-center p-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    backgroundColor: item.background,
                    color: item.color,
                    borderRadius: "10px",
                    minWidth: "38px",
                    height: "38px",
                    padding: "0 10px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  {item.title === "Proposal Sent" ? "PS" : item.title.charAt(0)}
                </div>

                <h6
                  className="mb-2"
                  style={{
                    color: "#77798b",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </h6>

                <h2
                  className="mb-1"
                  style={{
                    color: item.color,
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  {getStatusCount(item.title)}
                </h2>

                <p
                  className="mb-0"
                  style={{
                    color: "#9999a8",
                    fontSize: "11px",
                  }}
                >
                  Leads
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusCards;
