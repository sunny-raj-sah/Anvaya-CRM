// import { useState } from "react";

// const CommentForm = ({
//   onSubmit,
// }) => {
//   const [commentText, setCommentText] =
//     useState("");

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!commentText.trim()) return;

//   await onSubmit(commentText);

//   setCommentText("");
// };

//   return (
//     <div className="card">

//       <div className="card-header">
//         <h5 className="mb-0">
//           Add Comment
//         </h5>
//       </div>

//       <div className="card-body">

//         <form onSubmit={handleSubmit}>

//           <textarea
//             className="form-control mb-3"
//             rows="4"
//             placeholder="Write your comment..."
//             value={commentText}
//             onChange={(e) =>
//               setCommentText(e.target.value)
//             }
//           />

//           <button
//             className="btn btn-primary"
//             type="submit"
//           >
//             Add Comment
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default CommentForm;
// ------------------------------

import { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentText.trim() || submitting) return;

    try {
      setSubmitting(true);
      await onSubmit(commentText.trim());
      setCommentText("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="card mb-4"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #eeedf5",
        borderRadius: "14px",
        boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
      }}
    >
      {/* Header */}
      <div className="card-header bg-white border-0 px-4 pt-4 pb-2">
        <h5
          className="mb-1"
          style={{
            color: "#17182b",
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          Add Comment
        </h5>

        <p
          className="mb-0"
          style={{ color: "#77798b", fontSize: "13px" }}
        >
          Share an update or add notes about this lead.
        </p>
      </div>

      {/* Form */}
      <div className="card-body px-4 pb-4">
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control mb-3 shadow-none"
            rows="4"
            placeholder="Write your comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            disabled={submitting}
            style={{
              backgroundColor: "#fafaff",
              border: "1px solid #e5e2f0",
              borderRadius: "10px",
              color: "#17182b",
              fontSize: "14px",
              padding: "13px 15px",
              resize: "vertical",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#5946d2";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px rgba(89, 70, 210, 0.10)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#e5e2f0";
              e.currentTarget.style.boxShadow = "none";
            }}
          />

          <div className="d-flex justify-content-end">
            <button
              className="btn px-4 py-2"
              type="submit"
              disabled={!commentText.trim() || submitting}
              style={{
                backgroundColor: "#5946d2",
                color: "#ffffff",
                border: "1px solid #5946d2",
                borderRadius: "9px",
                fontSize: "14px",
                fontWeight: "600",
                opacity: !commentText.trim() || submitting ? 0.6 : 1,
                cursor:
                  !commentText.trim() || submitting
                    ? "not-allowed"
                    : "pointer",
              }}
              onMouseEnter={(e) => {
                if (!commentText.trim() || submitting) return;
                e.currentTarget.style.backgroundColor = "#4432b2";
                e.currentTarget.style.borderColor = "#4432b2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#5946d2";
                e.currentTarget.style.borderColor = "#5946d2";
              }}
            >
              {submitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  />
                  Adding...
                </>
              ) : (
                "Add Comment"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
