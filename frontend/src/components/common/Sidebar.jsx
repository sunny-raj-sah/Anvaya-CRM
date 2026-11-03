 
// import { NavLink, Link } from "react-router-dom";

// const Sidebar = ({ mobile = false }) => {
//   const menuItems = [
//     {
//       title: "Dashboard",
//       shortTitle: "Home",
//       path: "/dashboard",
//       icon: "🏠",
//     },
//     {
//       title: "Leads",
//       shortTitle: "Leads",
//       path: "/leads",
//       icon: "👥",
//     },
//     {
//       title: "Sales Agents",
//       shortTitle: "Agents",
//       path: "/agents",
//       icon: "💰",
//     },
//     {
//       title: "Reports",
//       shortTitle: "Reports",
//       path: "/reports",
//       icon: "📊",
//     },
//     {
//       title: "Settings",
//       shortTitle: "Settings",
//       path: "/settings",
//       icon: "⚙️",
//     },
//   ];

//   // Mobile bottom navigation
//   if (mobile) {
//     return (
//       <nav className="mobile-bottom-nav d-flex justify-content-around align-items-center">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             end={item.path === "/dashboard"}
//             className={({ isActive }) =>
//               `mobile-nav-link text-decoration-none text-center ${
//                 isActive ? "active" : ""
//               }`
//             }
//           >
//             <span className="mobile-nav-icon">{item.icon}</span>
//             <small>{item.shortTitle}</small>
//           </NavLink>
//         ))}
//       </nav>
//     );
//   }

//   // Desktop sidebar
//   return (
//     <aside className="bg-dark text-white vh-100 position-sticky top-0 d-flex flex-column p-3">

//       {/* Logo */}
//       <div className="mb-4 flex-shrink-0">
//         <Link
//           to="/dashboard"
//           className="text-decoration-none text-white"
//         >
//           <h4 className="mb-0">Anvaya CRM</h4>
//         </Link>
//       </div>

//       {/* Navigation */}
//       <nav className="nav flex-column overflow-auto">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             end={item.path === "/dashboard"}
//             className={({ isActive }) =>
//               `nav-link text-white rounded mb-2 ${
//                 isActive ? "bg-primary" : ""
//               }`
//             }
//           >
//             <span className="me-2">{item.icon}</span>
//             {item.title}
//           </NavLink>
//         ))}
//       </nav>

//     </aside>
//   );
// };

// export default Sidebar;
// -----------------------------------------------------

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ mobile = false }) => {
  const menuItems = [
    {
      title: "Dashboard",
      shortTitle: "Home",
      path: "/dashboard",
      icon: "⌂",
    },
    {
      title: "Leads",
      shortTitle: "Leads",
      path: "/leads",
      icon: "♙",
    },
    {
      title: "Sales Agents",
      shortTitle: "Agents",
      path: "/agents",
      icon: "♧",
    },
    {
      title: "Reports",
      shortTitle: "Reports",
      path: "/reports",
      icon: "▥",
    },
    {
      title: "Settings",
      shortTitle: "Settings",
      path: "/settings",
      icon: "⚙",
    },
  ];

  // Mobile bottom navigation
  if (mobile) {
    return (
      <nav
        className="d-flex d-md-none position-fixed bottom-0 start-0 w-100 bg-white border-top shadow-sm justify-content-around align-items-center"
        style={{
          minHeight: "65px",
          padding: "8px 4px",
          paddingBottom: "calc(8px + env(safe-area-inset-bottom))",
          zIndex: 1050,
        }}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `text-decoration-none d-flex flex-column align-items-center justify-content-center flex-fill gap-1 ${
                isActive ? "fw-bold" : ""
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? "#5946d2" : "#858596",
              minWidth: 0,
            })}
          >
            <span style={{ fontSize: "21px", lineHeight: 1 }}>
              {item.icon}
            </span>

            <small
              className="text-nowrap"
              style={{ fontSize: "10px" }}
            >
              {item.shortTitle}
            </small>
          </NavLink>
        ))}
      </nav>
    );
  }

  // Desktop and tablet sidebar
  return (
    <aside
      className="d-none d-md-flex flex-column bg-white border-end position-sticky top-0 vh-100 p-3 flex-shrink-0"
      style={{
        width: "250px",
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div className="mb-5 px-2">
        <Link
          to="/dashboard"
          className="text-decoration-none d-flex align-items-center gap-2"
        >
          <span
            className="d-flex align-items-center justify-content-center rounded-3 text-white fw-bold shadow-sm"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#5946d2",
              fontSize: "22px",
            }}
          >
            A
          </span>

          <span
            className="fw-bold"
            style={{
              fontSize: "21px",
              color: "#17182b",
              letterSpacing: "-0.7px",
            }}
          >
            Anvaya
            <span style={{ color: "#5946d2" }}> CRM</span>
          </span>
        </Link>
      </div>

      {/* Section heading */}
      <div
        className="px-2 mb-3 fw-bold"
        style={{
          fontSize: "10px",
          letterSpacing: "1.2px",
          color: "#a1a0b1",
        }}
      >
        WORKSPACE
      </div>

      {/* Navigation */}
      <nav className="d-flex flex-column gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `text-decoration-none d-flex align-items-center gap-3 rounded-3 px-3 py-3 ${
                isActive ? "fw-bold" : "fw-medium"
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? "#5946d2" : "#77798b",
              backgroundColor: isActive ? "#f0edff" : "transparent",
              fontSize: "14px",
              transition: "all 0.2s ease",
            })}
          >
            <span style={{ fontSize: "21px", lineHeight: 1 }}>
              {item.icon}
            </span>

            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-3 border-top d-flex align-items-center gap-2">
        <div
          className="d-flex align-items-center justify-content-center rounded-3 fw-bold"
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "#f0edff",
            color: "#5946d2",
          }}
        >
          A
        </div>

        <div className="d-flex flex-column">
          <span
            className="fw-bold"
            style={{ fontSize: "10px", color: "#17182b" }}
          >
            ANVAYA CRM
          </span>

          <small style={{ fontSize: "10px", color: "#858596" }}>
            Manage smarter. Grow faster.
          </small>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
