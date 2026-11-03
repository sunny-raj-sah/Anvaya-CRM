 
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-md sticky-top"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eeedf5",
        minHeight: "72px",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid px-3 px-md-4 px-lg-5">

        {/* Brand - Mobile and Tablet Only */}
        <Link
          to="/"
          className="navbar-brand d-flex d-lg-none align-items-center gap-2 mb-0"
          style={{ textDecoration: "none" }}
        >
          <div
            className="d-flex align-items-center justify-content-center rounded-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#5946d2",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            A
          </div>

          <div className="d-flex flex-column">
            <span
              style={{
                color: "#17182b",
                fontSize: "20px",
                fontWeight: "700",
                letterSpacing: "-0.6px",
                lineHeight: "1.2",
              }}
            >
              Anvaya
            </span>

            <span
              style={{
                color: "#77798b",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "1.3px",
              }}
            >
              CRM
            </span>
          </div>
        </Link>

        {/* Mobile Navbar Toggle */}
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "1px solid #e8e6f2",
            borderRadius: "10px",
            padding: "7px 10px",
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 ms-md-auto py-3 py-md-0">

            {/* Welcome Message */}
            <div className="d-flex align-items-center gap-2">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "38px",
                  height: "38px",
                  backgroundColor: "#f0edff",
                  color: "#5946d2",
                  fontWeight: "700",
                  fontSize: "15px",
                  flexShrink: 0,
                }}
              >
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <div className="d-flex flex-column">
                <span
                  style={{
                    fontSize: "11px",
                    color: "#77798b",
                    fontWeight: "500",
                  }}
                >
                  Welcome back,
                </span>

                <span
                  style={{
                    fontSize: "14px",
                    color: "#17182b",
                    fontWeight: "600",
                  }}
                >
                  {user?.name || "User"}
                </span>
              </div>
            </div>

            {/* Logout */}
            <button
              type="button"
              className="btn btn-sm px-4 py-2"
              onClick={handleLogout}
              style={{
                backgroundColor: "#f0edff",
                color: "#5946d2",
                border: "1px solid #e5e0ff",
                borderRadius: "9px",
                fontSize: "13px",
                fontWeight: "600",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor = "#5946d2";
                event.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor = "#f0edff";
                event.currentTarget.style.color = "#5946d2";
              }}
            >
              Logout
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
