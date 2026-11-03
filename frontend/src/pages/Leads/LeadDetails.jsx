//  import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import useLead from "../../hooks/useLead";
// import useComment from "../../hooks/useComment";

// import PageHeader from "../../components/common/PageHeader";

// import LeadInfoCard from "../../components/lead/details/LeadInfoCard";
// import LeadComments from "../../components/lead/details/LeadComments";
// import CommentForm from "../../components/lead/details/CommentForm";

// const LeadDetails = () => {
//   const { id } = useParams();

//   const navigate = useNavigate();

//   const {
//     state: leadState,
//     fetchLeadById,
//   } = useLead();

//   const {
//     state: commentState,
//     fetchComments,
//     createComment,
//      removeComment
//   } = useComment();

//   useEffect(() => {
//     fetchLeadById(id);
//     fetchComments(id);

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);

//   const handleAddComment = async (commentText) => {
//     await createComment(id, commentText );
//      fetchComments(id);
//   };

//   if (leadState.loading) {
//     return (
//       <div className="container py-5 text-center">
//         <div className="spinner-border text-primary"></div>
//       </div>
//     );
//   }

//   if (!leadState.selectedLead) {
//     return (
//       <div className="container py-5">
//         <div className="alert alert-warning">
//           Lead not found.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-4">

//       <PageHeader
//         title={leadState.selectedLead.name}
//         subtitle="Lead Details"
//         buttonText="Edit Lead"
//         // onClick={() =>
//         //   navigate(`/leads/edit/${leadState.selectedLead._id}`)
//         // }
//         onClick={() =>
//   navigate(`/leads/edit/${leadState.selectedLead._id}`, {
//     state: {
//       from: `/leads/${leadState.selectedLead._id}`,
//     },
//   })
// }
//       />

//       <LeadInfoCard
//         lead={leadState.selectedLead}
//       />

//       <LeadComments
//        comments={commentState.comments}
//  loading={commentState.loading}
//  error={commentState.error}
//  onDelete={removeComment}
//       />

//       <CommentForm
//         onSubmit={handleAddComment}
//       />

//     </div>
//   );
// };

// export default LeadDetails;

// --------------------------------------------------

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useLead from "../../hooks/useLead";
import useComment from "../../hooks/useComment";

import PageHeader from "../../components/common/PageHeader";

import LeadInfoCard from "../../components/lead/details/LeadInfoCard";
import LeadComments from "../../components/lead/details/LeadComments";
import CommentForm from "../../components/lead/details/CommentForm";

const LeadDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    state: leadState,
    fetchLeadById,
  } = useLead();

  const {
    state: commentState,
    fetchComments,
    createComment,
    removeComment,
  } = useComment();

  useEffect(() => {
    fetchLeadById(id);
    fetchComments(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAddComment = async (commentText) => {
    await createComment(id, commentText);
    await fetchComments(id);
  };

  if (leadState.loading) {
    return (
      <div className="container py-5 text-center">
        <div
          className="spinner-border"
          role="status"
          style={{ color: "#5946d2" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 mb-0" style={{ color: "#77798b" }}>
          Loading lead details...
        </p>
      </div>
    );
  }

  if (!leadState.selectedLead) {
    return (
      <div className="container py-5">
        <div
          className="alert border-0 rounded-3"
          style={{
            backgroundColor: "#f0edff",
            color: "#4432b2",
          }}
        >
          <strong>Lead not found.</strong>
          <p className="mb-3 mt-1">
            The lead may have been removed or the link may be incorrect.
          </p>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => navigate("/leads")}
            style={{
              backgroundColor: "#5946d2",
              color: "#ffffff",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            Back to Leads
          </button>
        </div>
      </div>
    );
  }

  const lead = leadState.selectedLead;

  return (
    <div className="container py-4">
          {/* Back Button */}
      <div className="mb-3">
        <button
          type="button"
          className="btn d-inline-flex align-items-center gap-2 px-3 py-2"
          onClick={() => navigate("/leads")}
          style={{
            backgroundColor: "#f0edff",
            color: "#5946d2",
            border: "1px solid #e5e0ff",
            borderRadius: "9px",
            fontSize: "13px",
            fontWeight: "600",
            transition: "all 0.2s ease",
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
          <span aria-hidden="true">←</span>
          Back to Leads
        </button>
      </div>

      <PageHeader
        title={lead.name}
        subtitle="Lead Details"
        buttonText="Edit Lead"
        onClick={() =>
          navigate(`/leads/edit/${lead._id}`, {
            state: {
              from: `/leads/${lead._id}`,
            },
          })
        }
      />

      <div className="row g-4">
        <div className="col-12">
          <LeadInfoCard lead={lead} />
        </div>

        <div className="col-12">
          <LeadComments
            comments={commentState.comments}
            loading={commentState.loading}
            error={commentState.error}
            onDelete={removeComment}
          />
        </div>

        <div className="col-12">
          <CommentForm onSubmit={handleAddComment} />
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
