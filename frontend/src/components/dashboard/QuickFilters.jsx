// import { useNavigate } from "react-router-dom";

// const QuickFilters = () => {
//   const navigate = useNavigate();

//   const filters = [
//     {
//       label: "All Leads",
//       value: "",
//     },
//     {
//       label: "New",
//       value: "New",
//     },
//     {
//       label: "Contacted",
//       value: "Contacted",
//     },
//     {
//       label: "Qualified",
//       value: "Qualified",
//     },
//     {
//       label: "Proposal Sent",
//       value: "Proposal Sent",
//     },
//     {
//       label: "Closed",
//       value: "Closed",
//     },
//   ];

//   const handleFilter = (status) => {
//     if (!status) {
//       navigate("/leads");
//       return;
//     }

//     navigate(`/leads?status=${status}`);
//   };

//   return (
//     <div className="card shadow-sm">
//       <div className="card-body">
//         <h5 className="mb-3">Quick Filters</h5>

//         <div className="d-flex flex-wrap gap-2">
//           {filters.map((filter) => (
//             <button
//               key={filter.label}
//               className="btn btn-outline-primary"
//               onClick={() => handleFilter(filter.value)}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickFilters;
// -------------------------------------------------

import { useNavigate } from "react-router-dom";

const QuickFilters = () => {
  const navigate = useNavigate();

  const filters = [
    { label: "All Leads", value: "" },
    { label: "New", value: "New" },
    { label: "Contacted", value: "Contacted" },
    { label: "Qualified", value: "Qualified" },
    { label: "Proposal Sent", value: "Proposal Sent" },
    { label: "Closed", value: "Closed" },
  ];

  const handleFilter = (status) => {
    if (!status) {
      navigate("/leads");
      return;
    }

    navigate(`/leads?status=${encodeURIComponent(status)}`);
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
      <div className="card-body p-3 p-md-4">
        <div className="mb-3">
          <h5
            className="mb-1"
            style={{
              color: "#17182b",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Quick Filters
          </h5>

          <small style={{ color: "#77798b", fontSize: "12px" }}>
            Quickly view leads by their current status
          </small>
        </div>

        <div className="d-flex flex-wrap gap-2">
          {filters.map((filter, index) => {
            const isAllLeads = index === 0;

            return (
              <button
                key={filter.label}
                type="button"
                className="btn btn-sm"
                onClick={() => handleFilter(filter.value)}
                style={{
                  backgroundColor: isAllLeads ? "#5946d2" : "#f0edff",
                  color: isAllLeads ? "#ffffff" : "#5946d2",
                  border: `1px solid ${
                    isAllLeads ? "#5946d2" : "#e5e0ff"
                  }`,
                  borderRadius: "9px",
                  padding: "8px 15px",
                  fontSize: "12px",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4432b2";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "#4432b2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isAllLeads
                    ? "#5946d2"
                    : "#f0edff";
                  e.currentTarget.style.color = isAllLeads
                    ? "#ffffff"
                    : "#5946d2";
                  e.currentTarget.style.borderColor = isAllLeads
                    ? "#5946d2"
                    : "#e5e0ff";
                }}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickFilters;
