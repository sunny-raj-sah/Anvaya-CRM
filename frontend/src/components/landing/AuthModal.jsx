
import { useNavigate } from "react-router-dom";

const AuthModal = ({ children }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
  };

  return (
    <div
      className="anvaya-auth-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        className="anvaya-auth-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Account authentication"
      >
        <button
          type="button"
          className="anvaya-auth-close"
          onClick={closeModal}
          aria-label="Close authentication dialog"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};

export default AuthModal;
