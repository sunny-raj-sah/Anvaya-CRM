 

// import { useEffect } from "react";
// import useReport from "../../hooks/useReport";

// import PageHeader from "../../components/common/PageHeader";
// import PipelineChart from "../../components/reports/PipelineChart";
// import ClosedLastWeekChart from "../../components/reports/ClosedLastWeekChart";
// import AgentPerformanceChart from "../../components/reports/AgentPerformanceChart";

// const Reports = () => {
//   const {
//     state,
//     fetchPipeline,
//     fetchLastWeek,
//     fetchClosedByAgent,
//   } = useReport();

//   useEffect(() => {
//     fetchPipeline();
//     fetchLastWeek();
//     fetchClosedByAgent();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   if (state.loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center py-5">
//         <div
//           className="spinner-border text-primary"
//           role="status"
//           aria-label="Loading reports"
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="container-fluid px-0">
//       <PageHeader
//         title="Reports Dashboard"
//         subtitle="CRM Analytics"
//       />

//       <div className="row g-3 g-lg-4 mt-1 align-items-stretch">
//         <div className="col-12 col-md-6 col-xl-4 d-flex">
//           <PipelineChart data={state.pipeline} />
//         </div>

//         <div className="col-12 col-md-6 col-xl-4 d-flex">
//           <ClosedLastWeekChart data={state.lastWeek} />
//         </div>

//         <div className="col-12 col-md-6 col-xl-4 d-flex">
//           <AgentPerformanceChart data={state.closedByAgent} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reports;
// ---------------------------------

import { useEffect } from "react";
import useReport from "../../hooks/useReport";

import PageHeader from "../../components/common/PageHeader";
import PipelineChart from "../../components/reports/PipelineChart";
import ClosedLastWeekChart from "../../components/reports/ClosedLastWeekChart";
import AgentPerformanceChart from "../../components/reports/AgentPerformanceChart";

const Reports = () => {
  const {
    state,
    fetchPipeline,
    fetchLastWeek,
    fetchClosedByAgent,
  } = useReport();

  useEffect(() => {
    fetchPipeline();
    fetchLastWeek();
    fetchClosedByAgent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state.loading) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center py-5"
        style={{ minHeight: "300px" }}
      >
        <div
          className="spinner-border"
          role="status"
          aria-label="Loading reports"
          style={{
            color: "#5946d2",
            width: "2.5rem",
            height: "2.5rem",
          }}
        />

        <p
          className="mt-3 mb-0"
          style={{
            color: "#77798b",
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          Loading your reports...
        </p>
      </div>
    );
  }

  return (
    <div
      className="container-fluid px-2 px-md-4 py-3"
      style={{ backgroundColor: "#f7f7fc", minHeight: "100%" }}
    >
      <PageHeader
        title="Reports Dashboard"
        subtitle="CRM Analytics"
      />

      {/* Reports Overview */}
      <div className="mb-4 mt-3">
        <h5
          className="mb-1"
          style={{
            color: "#17182b",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          Performance Overview
        </h5>

        <p
          className="mb-0"
          style={{
            color: "#77798b",
            fontSize: "12px",
          }}
        >
          Analyze your sales pipeline, closed leads, and agent performance.
        </p>
      </div>

      {/* Report Charts */}
      <div className="row g-3 g-lg-4 align-items-stretch">
        <div className="col-12 col-md-6 col-xl-4 d-flex">
          <div
            className="w-100"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #eeedf5",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
              overflow: "hidden",
            }}
          >
            <PipelineChart data={state.pipeline} />
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4 d-flex">
          <div
            className="w-100"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #eeedf5",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
              overflow: "hidden",
            }}
          >
            <ClosedLastWeekChart data={state.lastWeek} />
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4 d-flex">
          <div
            className="w-100"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #eeedf5",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
              overflow: "hidden",
            }}
          >
            <AgentPerformanceChart data={state.closedByAgent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
