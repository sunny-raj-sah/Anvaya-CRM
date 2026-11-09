// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { useAuth } from "../../context/AuthContext";

// const Register = () => {
//   const navigate = useNavigate();

//   const { register, loading, error } = useAuth();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await register(
//         name,
//         email,
//         password
//       );

//       navigate("/dashboard");
//     } catch (error) {
//       // Error is already handled inside AuthContext
//       console.log(error)
//     }
//   };

//   return (
//     // <div className="container min-vh-100 d-flex align-items-center justify-content-center">
//     <div className="container anvaya-auth-content">
//       <div
//         className="card shadow-sm"
//         style={{ width: "100%", maxWidth: "420px" }}
//       >
//         <div className="card-body p-4">

//           <div className="text-center mb-4">
//             <h3 className="fw-bold">
//               Anvaya CRM
//             </h3>

//             <p className="text-muted mb-0">
//               Create your account
//             </p>
//           </div>

//           {error && (
//             <div className="alert alert-danger">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>

//             <div className="mb-3">
//               <label className="form-label">
//                 Name
//               </label>

//               <input
//                 type="text"
//                 className="form-control"
//                 value={name}
//                 onChange={(event) =>
//                   setName(event.target.value)
//                 }
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 className="form-control"
//                 value={email}
//                 onChange={(event) =>
//                   setEmail(event.target.value)
//                 }
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 className="form-control"
//                 value={password}
//                 onChange={(event) =>
//                   setPassword(event.target.value)
//                 }
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-dark w-100"
//               disabled={loading}
//             >
//               {loading
//                 ? "Creating account..."
//                 : "Register"}
//             </button>

//           </form>

//           <div className="text-center mt-4">
//             <span className="text-muted">
//               Already have an account?{" "}
//             </span>

//             <Link
//               to="/login"
//               className="text-decoration-none"
//             >
//               Login
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
// --------------------------------------------------------------------


import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { register, loading, error } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Validate email format and require .com
  const validateEmail = (value) => {
    const emailRegex =
      /^[A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?\.)+com$/i;

    return emailRegex.test(value.trim());
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    event.target.setCustomValidity("");
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle Enter key for Name field
  const handleNameKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (!event.currentTarget.checkValidity()) {
        event.currentTarget.reportValidity();
        return;
      }

      emailRef.current?.focus();
    }
  };

  // Handle Enter key for Email field
  const handleEmailKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const emailInput = event.currentTarget;

      if (!emailInput.value.trim()) {
        emailInput.reportValidity();
        return;
      }

      if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
      }

      if (!validateEmail(emailInput.value)) {
        emailInput.setCustomValidity(
          "Please enter a valid email address ending with .com"
        );

        emailInput.reportValidity();
        return;
      }

      emailInput.setCustomValidity("");
      passwordRef.current?.focus();
    }
  };

  // Handle Enter key for Password field
  const handlePasswordKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (!event.currentTarget.checkValidity()) {
        event.currentTarget.reportValidity();
        return;
      }

      event.currentTarget.form.requestSubmit();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailInput = emailRef.current;

    if (!validateEmail(email)) {
      emailInput.setCustomValidity(
        "Please enter a valid email address ending with .com"
      );

      emailInput.reportValidity();
      return;
    }

    emailInput.setCustomValidity("");

    try {
      await register(
        name.trim(),
        email.trim(),
        password
      );

      navigate("/dashboard");
    } catch (error) {
      // Error is already handled inside AuthContext
      console.log(error);
    }
  };

  return (
    <div className="container anvaya-auth-content">
      <div
        className="card shadow-sm"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <div className="card-body p-4">

          <div className="text-center mb-4">
            <h3 className="fw-bold">
              Anvaya CRM
            </h3>

            <p className="text-muted mb-0">
              Create your account
            </p>
          </div>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Name Field */}
            <div className="mb-3">
              <label className="form-label">
                Name <span className="text-danger">*</span>
              </label>

              <input
                ref={nameRef}
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={handleNameChange}
                onKeyDown={handleNameKeyDown}
                placeholder="Enter your name"
                required
                minLength={2}
                pattern=".*\S.*"
                title="Please enter a valid name with at least 2 characters."
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label">
                Email <span className="text-danger">*</span>
              </label>

              <input
                ref={emailRef}
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                onKeyDown={handleEmailKeyDown}
                placeholder="Enter your email"
                required
                pattern=".+@.+\.com"
                title="Please enter a valid email address ending with .com"
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label className="form-label">
                Password <span className="text-danger">*</span>
              </label>

              <div className="input-group">
                <input
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={handlePasswordChange}
                  onKeyDown={handlePasswordKeyDown}
                  placeholder="Enter your password"
                  required
                  minLength={6}
                  title="Password must contain at least 6 characters."
                />

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <i
                    className={`bi ${
                      showPassword
                        ? "bi-eye-slash"
                        : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-dark w-100"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Register"}
            </button>

          </form>

          <div className="text-center mt-4">
            <span className="text-muted">
              Already have an account?{" "}
            </span>

            <Link
              to="/login"
              className="text-decoration-none"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
