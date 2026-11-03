import { useEffect } from "react";
import { useNavigate, useParams , useLocation} from "react-router-dom";

import useLead from "../../hooks/useLead";

import PageHeader from "../../components/common/PageHeader";
import LeadForm from "../../components/lead/LeadForm";

const EditLead = () => {
  const { id } = useParams();
const location = useLocation();


  const navigate = useNavigate();

  const { state, fetchLeadById, editLead, fetchAgents } = useLead();

  useEffect(() => {
    fetchLeadById(id);
    if (state.salesAgents.length === 0) {
      fetchAgents();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

//   const handleSubmit = async (formData) => {
//     await editLead(id, formData);

//     navigate("/leads");
//   };

//   const handleCancel = () => {
//   navigate(location.state?.from || "/leads");
// };

const returnPath = location.state?.from || "/leads";

const handleSubmit = async (formData) => {
  await editLead(id, formData);

  navigate(returnPath);
};

const handleCancel = () => {
  navigate(returnPath);
};

  if (state.loading  ) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!state.selectedLead) {
  return (
    <div className="container py-5">
      <div className="alert alert-warning">
        Lead not found.
      </div>
    </div>
  );
}
console.log("Selected Lead:", state.selectedLead);
console.log("Sales Agents:", state.salesAgents);
  return (
    <div className="container py-4">
      <PageHeader title="Edit Lead" subtitle="Update Lead Information" />

      <LeadForm
        initialValues={state.selectedLead}
        salesAgents={state.salesAgents}
        onSubmit={handleSubmit}
             onCancel={ handleCancel  }
        loading={state.loading}
        submitButtonText="Update Lead"
      />
    </div>
  );
};

export default EditLead;
