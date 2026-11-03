//  import { useEffect } from "react";

// import PageHeader from "../../components/common/PageHeader";
// import StatCard from "../../components/common/StatCard";

// import StatusCards from "../../components/dashboard/StatusCards";
// import QuickFilters from "../../components/dashboard/QuickFilters";
// import RecentLeads from "../../components/dashboard/RecentLeads";

// import useLead from "../../hooks/useLead";
// import useAgent from "../../hooks/useAgent";

// const Dashboard = () => {
//   const {
//     state,
//     getAllLeads,
//   } = useLead();

//   const {
//     state: agentState,
//     getAllAgents,
//   } = useAgent();

//   useEffect(() => {
//     getAllLeads();
//     getAllAgents();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const totalLeads = state.leads.length;

//   // const newLeads = state.leads.filter(
//   //   (lead) => lead.status === "New"
//   // ).length;

//   const closedLeads = state.leads.filter(
//     (lead) => lead.status === "Closed"
//   ).length;

//   const pipelineLeads = state.leads.filter(
//     (lead) => lead.status !== "Closed"
//   ).length;

//   return (
//     <div className="container py-4">

//       <PageHeader
//         title="Dashboard"
//         subtitle="Welcome to Anvaya CRM"
//       />

//       {/* Statistics */}

//       <div className="row mb-4">

//         <StatCard
//           title="Total Leads"
//           value={totalLeads}
//         />

//         <StatCard
//           title="Pipeline Leads"
//           value={pipelineLeads}
//         />

//         <StatCard
//           title="Closed Leads"
//           value={closedLeads}
//         />

//         <StatCard
//           title="Sales Agents"
//           value={agentState.agents.length}
//         />

//       </div>

//       {/* Lead Status Overview */}

//       <div className="mb-4">

//         <StatusCards
//           leads={state.leads}
//         />

//       </div>

//       {/* Quick Filters */}

//       <div className="mb-4">

//         <QuickFilters />

//       </div>

//       {/* Recent Leads */}

//       <RecentLeads
//         leads={state.leads.slice(0, 5)}
//       />

//     </div>
//   );
// };

// export default Dashboard;
// --------------------------------------------

import { useEffect } from "react";

import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/common/StatCard";

import StatusCards from "../../components/dashboard/StatusCards";
import QuickFilters from "../../components/dashboard/QuickFilters";
import RecentLeads from "../../components/dashboard/RecentLeads";

import useLead from "../../hooks/useLead";
import useAgent from "../../hooks/useAgent";

const Dashboard = () => {
  const {
    state,
    getAllLeads,
  } = useLead();

  const {
    state: agentState,
    getAllAgents,
  } = useAgent();

  useEffect(() => {
    getAllLeads();
    getAllAgents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalLeads = state.leads.length;

  const closedLeads = state.leads.filter(
    (lead) => lead.status === "Closed"
  ).length;

  const pipelineLeads = state.leads.filter(
    (lead) => lead.status !== "Closed"
  ).length;

  const totalAgents = agentState.agents.length;

  const dashboardSections = [
    {
      title: "Lead Status Overview",
      subtitle: "Track the current progress of your sales leads.",
      content: <StatusCards leads={state.leads} />,
    },
    {
      title: "Quick Filters",
      subtitle: "Quickly find leads based on their status.",
      content: <QuickFilters />,
    },
  ];

  return (
    <div className="container-fluid px-2 px-md-4 py-4">

      {/* Page Header */}
      <PageHeader
        title="Dashboard"
        subtitle="Welcome to Anvaya CRM"
      />

      {/* Statistics */}
      <div className="row g-3 g-lg-4 mb-4">

        <StatCard
          title="Total Leads"
          value={totalLeads}
        />

        <StatCard
          title="Pipeline Leads"
          value={pipelineLeads}
        />

        <StatCard
          title="Closed Leads"
          value={closedLeads}
        />

        <StatCard
          title="Sales Agents"
          value={totalAgents}
        />

      </div>

      {/* Dashboard Sections */}
      <div className="row g-4 mb-4">

        {dashboardSections.map((section) => (
          <div className="col-12" key={section.title}>
            <div
              className="card"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eeedf5",
                borderRadius: "14px",
                boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
              }}
            >
              <div className="card-body p-3 p-md-4">

                <div className="mb-4">
                  <h5
                    className="mb-1"
                    style={{
                      color: "#17182b",
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                  >
                    {section.title}
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      color: "#77798b",
                      fontSize: "13px",
                    }}
                  >
                    {section.subtitle}
                  </p>
                </div>

                {section.content}

              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Recent Leads */}
      <div
        className="card"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #eeedf5",
          borderRadius: "14px",
          boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
        }}
      >
        <div className="card-body p-3 p-md-4">

          <div className="mb-4">
            <h5
              className="mb-1"
              style={{
                color: "#17182b",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              Recent Leads
            </h5>

            <p
              className="mb-0"
              style={{
                color: "#77798b",
                fontSize: "13px",
              }}
            >
              Keep track of your latest lead activity.
            </p>
          </div>

          <RecentLeads
            leads={state.leads.slice(0, 5)}
          />

        </div>
      </div>

    </div>
  );
};

export default Dashboard;
