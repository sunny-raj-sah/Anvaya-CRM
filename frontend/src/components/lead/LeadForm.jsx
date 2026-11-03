// import { useEffect, useState } from "react";

// import Input from "../common/Input";
// import Select from "../common/Select";
// import Button from "../common/Button";

// import {
//   STATUS_OPTIONS,
//   PRIORITY_OPTIONS,
//   SOURCE_OPTIONS,
// } from "../../constants/leadOptions";

// import leadInitialValues from "../../constants/leadInitialValues";

// const LeadForm = ({
//   initialValues = leadInitialValues,
//   salesAgents = [],
//   onSubmit,
//    onCancel,
//   loading = false,
//     submitButtonText = "Save Lead",
// }) => {
//   const [formData, setFormData] = useState(initialValues);

//   useEffect(() => {
//   // eslint-disable-next-line react-hooks/set-state-in-effect
//   setFormData({
//     ...initialValues,
//     salesAgent:
//       initialValues.salesAgent?._id ||
//       initialValues.salesAgent ||
//       "",
//   });
// }, [initialValues]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleTagChange = (e) => {
//     const values = Array.from(
//       e.target.selectedOptions,
//       (option) => option.value
//     );

//     setFormData((prev) => ({
//       ...prev,
//       tags: values,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     onSubmit(formData);
//   };

//   console.log("LeadForm initialValues:", initialValues);
// console.log("LeadForm formData:", formData);
// console.log("Sales agents:", salesAgents);
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="card shadow-sm"
//     >
//       <div className="card-body">

//         <div className="row">

//           {/* Lead Name */}

//           <div className="col-md-6">

//             <Input
//               label="Lead Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//           </div>

//           {/* Source */}

//           <div className="col-md-6">

//             <Select
//               label="Lead Source"
//               name="source"
//               value={formData.source}
//               onChange={handleChange}
//               options={SOURCE_OPTIONS}
//               required
//             />

//           </div>

//           {/* Sales Agent */}

//           <div className="col-md-6">

//             <Select
//               label="Sales Agent"
//               name="salesAgent"
//               value={formData.salesAgent}
//               onChange={handleChange}
//               options={salesAgents.map((agent) => ({
//                 value: agent._id,
//                 label: agent.name,
//               }))}
//               required
//             />

//           </div>

//           {/* Status */}

//           <div className="col-md-6">

//             <Select
//               label="Status"
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               options={STATUS_OPTIONS}
//             />

//           </div>

//           {/* Priority */}

//           <div className="col-md-6">

//             <Select
//               label="Priority"
//               name="priority"
//               value={formData.priority}
//               onChange={handleChange}
//               options={PRIORITY_OPTIONS}
//             />

//           </div>

//           {/* Time To Close */}

//           <div className="col-md-6">

//             <Input
//               label="Time To Close (Days)"
//               type="number"
//               name="timeToClose"
//               value={formData.timeToClose}
//               onChange={handleChange}
//             />

//           </div>

//           {/* Tags */}

//           <div className="col-12">

//             <label className="form-label">
//               Tags
//             </label>

//             <select
//               className="form-select"
//               multiple
//               value={formData.tags}
//               onChange={handleTagChange}
//             >
//               <option value="High Value">
//                 High Value
//               </option>

//               <option value="Follow-up">
//                 Follow-up
//               </option>

//               <option value="Urgent">
//                 Urgent
//               </option>

//               <option value="Enterprise">
//                 Enterprise
//               </option>

//             </select>

//           </div>

//         </div>

//       </div>

//       <div className="card-footer  ">
// <div className="d-flex flex-column flex-sm-row justify-content-end gap-2">
//  {/* <Button
//   variant="secondary"
//     type="button"
//     onClick={onCancel}
//     disabled={loading}
  
//   >
//     Cancel
//   </Button> */}
//   <Button
//   variant="secondary"
//   type="button"
//   onClick={(e) => {
//     e.preventDefault();
//     onCancel?.();
//   }}
//   disabled={loading}
// >
//   Cancel
// </Button>
//         <Button
//           type="submit"
//           disabled={loading}
          
//         >
//           {loading
//             ? "Saving..."
//             :  submitButtonText}
            
//         </Button>
// </div>
//       </div>

//     </form>
//   );
// };

// export default LeadForm;

//  ----------------------------------------------------------------------


import { useEffect, useState } from "react";

import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

import {
  STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  SOURCE_OPTIONS,
} from "../../constants/leadOptions";

import leadInitialValues from "../../constants/leadInitialValues";

const LeadForm = ({
  initialValues = leadInitialValues,
  salesAgents = [],
  onSubmit,
  onCancel,
  loading = false,
  submitButtonText = "Save Lead",
}) => {
  // const [formData, setFormData] = useState(initialValues);
  // const [errors, setErrors] = useState({});

  // // Initialize form values
  // useEffect(() => {
  //   setFormData({
  //     ...initialValues,
  //     name: initialValues.name || "",
  //     source: initialValues.source || "",
  //     salesAgent:
  //       initialValues.salesAgent?._id ||
  //       initialValues.salesAgent ||
  //       "",
  //     status: initialValues.status || "",
  //     priority: initialValues.priority || "",
  //     timeToClose: initialValues.timeToClose ?? "",
  //     tags: initialValues.tags || [],
  //   });

  //   setErrors({});
  // }, [initialValues]);
  const [formData, setFormData] = useState(initialValues);
const [errors, setErrors] = useState({});

// Initialize form values whenever initialValues changes
useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setFormData({
    ...initialValues,
    name: initialValues.name || "",
    source: initialValues.source || "",
    salesAgent:
      initialValues.salesAgent?._id ||
      initialValues.salesAgent ||
      "",
    status: initialValues.status || "",
    priority: initialValues.priority || "",
    timeToClose: initialValues.timeToClose ?? "",
    tags: initialValues.tags || [],
  });

  setErrors({});
}, [initialValues]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the corrected field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Handle tag changes
  const handleTagChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setFormData((prev) => ({
      ...prev,
      tags: values,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Lead Name
    if (!formData.name?.trim()) {
      newErrors.name = "Lead name is required.";
    }

    // Lead Source
    if (!formData.source) {
      newErrors.source = "Please select a lead source.";
    }

    // Sales Agent
    if (!formData.salesAgent) {
      newErrors.salesAgent = "Please select a sales agent.";
    }

    // Time To Close
    if (
      formData.timeToClose !== "" &&
      formData.timeToClose !== null &&
      formData.timeToClose !== undefined
    ) {
      const timeToClose = Number(formData.timeToClose);

      if (!Number.isFinite(timeToClose)) {
        newErrors.timeToClose = "Please enter a valid number.";
      } else if (timeToClose < 0) {
        newErrors.timeToClose =
          "Time to close cannot be negative.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit({
      ...formData,
      name: formData.name.trim(),
      timeToClose:
        formData.timeToClose === "" ||
        formData.timeToClose === null
          ? undefined
          : Number(formData.timeToClose),
    });
  };

  // Render field error
  const renderError = (field) => {
    if (!errors[field]) return null;

    return (
      <div className="text-danger small mt-1" role="alert">
        {errors[field]}
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card shadow-sm"
      noValidate
    >
      <div className="card-body">
        <div className="row">

          {/* Lead Name */}
          <div className="col-md-6 mb-3">
            <Input
              label="Lead Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {renderError("name")}
          </div>

          {/* Source */}
          <div className="col-md-6 mb-3">
            <Select
              label="Lead Source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              options={SOURCE_OPTIONS}
              required
            />
            {renderError("source")}
          </div>

          {/* Sales Agent */}
          <div className="col-md-6 mb-3">
            <Select
              label="Sales Agent"
              name="salesAgent"
              value={formData.salesAgent}
              onChange={handleChange}
              options={salesAgents.map((agent) => ({
                value: agent._id,
                label: agent.name,
              }))}
              required
            />
            {renderError("salesAgent")}
          </div>

          {/* Status */}
          <div className="col-md-6 mb-3">
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={STATUS_OPTIONS}
            />
          </div>

          {/* Priority */}
          <div className="col-md-6 mb-3">
            <Select
              label="Priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              options={PRIORITY_OPTIONS}
            />
          </div>

          {/* Time To Close */}
          <div className="col-md-6 mb-3">
            <Input
              label="Time To Close (Days)"
              type="number"
              name="timeToClose"
              value={formData.timeToClose}
              onChange={handleChange}
              min="0"
            />
            {renderError("timeToClose")}
          </div>

          {/* Tags */}
          <div className="col-12 mb-3">
            <label className="form-label">
              Tags
            </label>

            <select
              className="form-select"
              multiple
              value={formData.tags}
              onChange={handleTagChange}
            >
              <option value="High Value">High Value</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Urgent">Urgent</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <div className="d-flex flex-column flex-sm-row justify-content-end gap-2">

          <Button
            variant="secondary"
            type="button"
            onClick={() => onCancel?.()}
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

export default LeadForm;
