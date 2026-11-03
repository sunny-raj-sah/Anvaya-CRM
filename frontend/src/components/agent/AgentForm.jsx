// import { useEffect, useState } from "react";

// import Input from "../common/Input";
// import Button from "../common/Button";

// const initialValues = {
//   name: "",
//   email: "",
// };

// const AgentForm = ({
//   initialData = initialValues,
//   onSubmit,
//   onCancel,
//   loading = false,
//   submitButtonText = "Save Agent",
// }) => {
//   const [formData, setFormData] =
//     useState(initialData);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setFormData(initialData);
//   }, [initialData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     onSubmit(formData);
//   };

//   return (
//     <form
//       className="card shadow-sm"
//       onSubmit={handleSubmit}
//     >
//       <div className="card-body">

//         <div className="row">

//           <div className="col-md-6">

//             <Input
//               label="Agent Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//           </div>

//           <div className="col-md-6">

//             <Input
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//           </div>

//         </div>

//       </div>

//       <div className="card-footer text-end">
//         <div className="card-footer d-flex justify-content-end gap-2">
// <Button
//   variant="secondary"
//     type="button"
//     onClick={onCancel}
//     disabled={loading}
//   >
//     Cancel
//   </Button>
//         <Button
//           type="submit"
//           disabled={loading}
//         >
//           {loading
//             ? "Saving..."
//             : submitButtonText}
//         </Button>
// </div>
//       </div>
//     </form>
//   );
// };

// export default AgentForm;

// ---------------------------------------------------


import { useEffect, useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const initialValues = {
  name: "",
  email: "",
};

const AgentForm = ({
  initialData = initialValues,
  onSubmit,
  onCancel,
  loading = false,
  submitButtonText = "Save Agent",
  serverError = null,
}) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      className="card shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="card-body">

        {serverError && (
          <div
            className="alert alert-danger"
            role="alert"
          >
            {serverError}
          </div>
        )}

        <div className="row">

          <div className="col-md-6">
            <Input
              label="Agent Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

        </div>
      </div>

      <div className="card-footer text-end">
        <div className="d-flex justify-content-end gap-2">

          <Button
            variant="secondary"
            type="button"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : submitButtonText}
          </Button>

        </div>
      </div>
    </form>
  );
};

export default AgentForm;
