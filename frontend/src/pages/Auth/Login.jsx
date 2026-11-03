import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login, loading, error } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);

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
              Login to your account
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
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

          <div className="text-center mt-4">
            <span className="text-muted">
              Don't have an account?{" "}
            </span>

            <Link
              to="/register"
              className="text-decoration-none"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;