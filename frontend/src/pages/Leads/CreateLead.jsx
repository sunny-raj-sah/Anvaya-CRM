// import { useNavigate } from "react-router-dom";

// import PageHeader from "../../components/common/PageHeader";
// import LeadForm from "../../components/lead/LeadForm";

// import useLead from "../../hooks/useLead";

// const CreateLead = () => {
//   const navigate = useNavigate();

//   const {
//     state,
//     addLead,
//   } = useLead();

//   const handleSubmit = async (formData) => {
//     await addLead(formData);

//     navigate("/leads");
//   };

//   return (
//     <div className="container py-4">

//       <PageHeader
//         title="Create Lead"
//         subtitle="Add a new Lead"
//       />
 
//       <LeadForm
//         salesAgents={state.salesAgents}
//         onSubmit={handleSubmit}
//          onCancel={() => navigate("/leads")}
//         loading={state.loading}
//       />

//     </div>
//   );
// };

// export default CreateLead;

// --------------------------------------------------------------------------
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";
import LeadForm from "../../components/lead/LeadForm";

import useLead from "../../hooks/useLead";
import useAgent from "../../hooks/useAgent";


import leadInitialValues from "../../constants/leadInitialValues";


const CreateLead = () => {
  const navigate = useNavigate();

  // const { state, addLead, fetchAgents } = useLead();

    const { state, addLead } = useLead();


     const {
    state: agentState,
    getAllAgents,
  } = useAgent();

  // useEffect(() => {
  //   if (state.salesAgents.length === 0) {
  //     fetchAgents();
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
    useEffect(() => {
    if (agentState.agents.length === 0) {
      getAllAgents();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSubmit = async (formData) => {
    // await addLead(formData);
    // navigate("/leads");
       try {
      await addLead(formData);
      navigate("/leads");
    } catch (error) {
      console.error("Failed to create lead:", error);
    }
  };

  return (
    <div className="container py-4">
      <PageHeader
        title="Create Lead"
        subtitle="Add a new Lead"
      />

      <LeadForm
        initialValues={leadInitialValues}
        // salesAgents={state.salesAgents}
        salesAgents={agentState.agents}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/leads")}
        loading={state.loading}
        submitButtonText="Create Lead"
      />
    </div>
  );
};

export default CreateLead;