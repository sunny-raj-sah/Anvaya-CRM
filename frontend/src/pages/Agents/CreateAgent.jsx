import { useNavigate } from "react-router-dom";

import useAgent from "../../hooks/useAgent";

import PageHeader from "../../components/common/PageHeader";
import AgentForm from "../../components/agent/AgentForm";

const CreateAgent = () => {
  const navigate = useNavigate();

  const {
    state,
    addAgent,
  } = useAgent();

  const handleSubmit = async (formData) => {
     try {
      await addAgent(formData);
      navigate("/agents");
    } catch (error) {
      console.error("Failed to create agent:", error);
    }
  };

  return (
    <div className="container py-4">

      <PageHeader
        title="Create Sales Agent"
        subtitle="Add a new sales representative"
      />

      <AgentForm
        onSubmit={handleSubmit}
        loading={state.loading}
            serverError={state.error}
         onCancel={() => navigate("/agents")}
        submitButtonText="Create Agent"
      />

    </div>
  );
};

export default CreateAgent;