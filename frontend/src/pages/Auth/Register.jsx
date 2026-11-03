import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { register, loading, error } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await register(
        name,
        email,
        password
      );

      navigate("/dashboard");
    } catch (error) {
      // Error is already handled inside AuthContext
      console.log(error)
    }
  };

  return (
    // <div className="container min-vh-100 d-flex align-items-center justify-content-center">
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

            <div className="mb-3">
              <label className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark w-100"
              disabled={loading}
            >
              {loading
                ? "Creating account..."
                : "Register"}
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