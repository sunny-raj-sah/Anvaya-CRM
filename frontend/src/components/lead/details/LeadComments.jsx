//  const LeadComments = ({
//   comments = [],
//   loading = false,
//   error = null,
//    onDelete
// }) => {
//   if (loading) {
//     return (
//       <div className="card mb-4">
//         <div className="card-header">
//           <h5 className="mb-0">Comments</h5>
//         </div>

//         <div className="card-body text-center py-4">
//           <div
//             className="spinner-border text-primary"
//             role="status"
//           >
//             <span className="visually-hidden">
//               Loading...
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="card mb-4">

//       <div className="card-header">
//         <h5 className="mb-0">
//           Comments
//         </h5>
//       </div>

//       <div className="card-body">

//         {error && (
//           <div className="alert alert-danger">
//             {error}
//           </div>
//         )}

//         {!error && comments.length === 0 && (
//           <div className="alert alert-light border text-center">
//             No comments available.
//           </div>
//         )}

//         {!error &&
//           comments.map((comment) => (
//             <div
//               key={comment._id}
//               className="border rounded p-3 mb-3"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-2">

//                 <h6 className="mb-0">
//                   {comment.author?.name || comment.authorUser?.name ||"Unknown"}
//                 </h6>

//                 <small className="text-muted">
//                   {new Date(
//                     comment.createdAt
//                   ).toLocaleString()}
//                 </small>
//                             <button
//  className="btn btn-sm btn-danger"
//  onClick={()=>onDelete(comment._id)}
// >
//  Delete
// </button>
//               </div>

//               <p className="mb-0">
//                 {comment.commentText}
//               </p>

//             </div>
//           ))}

//       </div>

//     </div>
//   );
// };

// export default LeadComments;
// -------------------------------------------------

const LeadComments = ({
  comments = [],
  loading = false,
  error = null,
  onDelete,
}) => {
  const cardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #eeedf5",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(23, 24, 43, 0.04)",
  };

  const headingStyle = {
    color: "#17182b",
    fontWeight: "700",
    fontSize: "17px",
  };

  if (loading) {
    return (
      <div className="card mb-4" style={cardStyle}>
        <div className="card-header bg-white border-0 px-4 pt-4">
          <h5 className="mb-0" style={headingStyle}>
            Comments
          </h5>
        </div>

        <div className="card-body text-center py-5">
          <div
            className="spinner-border"
            role="status"
            style={{ color: "#5946d2" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 mb-0" style={{ color: "#77798b" }}>
            Loading comments...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card mb-4" style={cardStyle}>
      {/* Header */}
      <div className="card-header bg-white border-0 px-4 pt-4 pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h5 className="mb-1" style={headingStyle}>
              Comments
            </h5>
            <small style={{ color: "#77798b" }}>
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </small>
          </div>

          <div
            className="d-flex align-items-center justify-content-center rounded-3"
            style={{
              width: "42px",
              height: "42px",
              backgroundColor: "#f0edff",
              color: "#5946d2",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            {comments.length}
          </div>
        </div>
      </div>

      <div className="card-body px-4 pt-2 pb-4">
        {/* Error */}
        {error && (
          <div
            className="alert border-0 rounded-3"
            style={{
              backgroundColor: "#fff0f0",
              color: "#c0392b",
            }}
          >
            {error}
          </div>
        )}

        {/* Empty State */}
        {!error && comments.length === 0 && (
          <div
            className="text-center rounded-3 py-5 px-3"
            style={{
              backgroundColor: "#f7f7fc",
              border: "1px dashed #dedbed",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
              style={{
                width: "52px",
                height: "52px",
                backgroundColor: "#f0edff",
                color: "#5946d2",
                fontSize: "22px",
              }}
            >
              <span>💬</span>
            </div>

            <h6 className="mb-1" style={{ color: "#17182b", fontWeight: "600" }}>
              No comments yet
            </h6>
            <p className="mb-0 small" style={{ color: "#77798b" }}>
              Add the first comment to start the conversation.
            </p>
          </div>
        )}

        {/* Comments List */}
        {!error &&
          comments.map((comment) => (
            <div
              key={comment._id}
              className="rounded-3 p-3 mb-3"
              style={{
                backgroundColor: "#fafaff",
                border: "1px solid #eeedf5",
              }}
            >
              <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "38px",
                      height: "38px",
                      flexShrink: 0,
                      backgroundColor: "#f0edff",
                      color: "#5946d2",
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    {(comment.author?.name ||
                      comment.authorUser?.name ||
                      "U")
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>
                    <h6
                      className="mb-1"
                      style={{
                        color: "#17182b",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {comment.author?.name ||
                        comment.authorUser?.name ||
                        "Unknown"}
                    </h6>

                    <small style={{ color: "#77798b", fontSize: "11px" }}>
                      {new Date(comment.createdAt).toLocaleString()}
                    </small>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() => onDelete?.(comment._id)}
                  style={{
                    backgroundColor: "#fff0f0",
                    color: "#d14343",
                    border: "1px solid #ffe0e0",
                    borderRadius: "7px",
                    fontSize: "12px",
                    fontWeight: "600",
                    padding: "5px 11px",
                    flexShrink: 0,
                  }}
                >
                  Delete
                </button>
              </div>

              <p
                className="mb-0"
                style={{
                  color: "#45465a",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "anywhere",
                }}
              >
                {comment.commentText}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeadComments;

