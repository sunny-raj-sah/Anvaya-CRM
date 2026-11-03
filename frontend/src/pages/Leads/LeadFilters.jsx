 
import { useEffect, useMemo, useRef, useState } from "react";
import { UserRound, X } from "lucide-react";

import SearchableSelect from "../common/SearchableSelect";
import { getLeadSources } from "../../services/leadService";

const LeadFilters = ({
  filters,
  onChange,
  salesAgents = [],
}) => {
  // Source states
  const [sourceOptions, setSourceOptions] = useState([]);
  const [sourceError, setSourceError] = useState("");
  const [sourceLoading, setSourceLoading] = useState(false);

  // Sales agent search states
  const [agentSearch, setAgentSearch] = useState("");
  const [debouncedAgentSearch, setDebouncedAgentSearch] = useState("");
  const [showAgentDropdown, setShowAgentDropdown] = useState(false);

  const agentDropdownRef = useRef(null);

  // Prepare sales agent options
  const agentOptions = useMemo(() => {
    return salesAgents.map((agent) => ({
      value: agent._id,
      label: agent.name,
    }));
  }, [salesAgents]);

  // Find currently selected agent
  const selectedAgent = useMemo(() => {
    return agentOptions.find(
      (agent) =>
        String(agent.value) === String(filters.salesAgent || "")
    );
  }, [agentOptions, filters.salesAgent]);

  // Debounce sales agent search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedAgentSearch(
        agentSearch.trim().toLowerCase()
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [agentSearch]);

  // Filter sales agents by name
  const filteredAgents = useMemo(() => {
    if (!debouncedAgentSearch) {
      return agentOptions;
    }

    return agentOptions.filter((agent) =>
      agent.label
        .toLowerCase()
        .includes(debouncedAgentSearch)
    );
  }, [agentOptions, debouncedAgentSearch]);

  // Close sales agent dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        agentDropdownRef.current &&
        !agentDropdownRef.current.contains(event.target)
      ) {
        setShowAgentDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Select sales agent
  const selectAgent = (agent) => {
    onChange({
      target: {
        name: "salesAgent",
        value: agent.value,
      },
    });

    setAgentSearch("");
    setDebouncedAgentSearch("");
    setShowAgentDropdown(false);
  };

  // Clear sales agent selection
  const clearAgent = () => {
    onChange({
      target: {
        name: "salesAgent",
        value: "",
      },
    });

    setAgentSearch("");
    setDebouncedAgentSearch("");
    setShowAgentDropdown(true);
  };

  // Fetch existing lead sources
  useEffect(() => {
    let isMounted = true;

    const fetchSources = async () => {
      try {
        setSourceLoading(true);
        setSourceError("");

        const response = await getLeadSources();

        if (isMounted) {
          const sources = Array.isArray(response.data)
            ? response.data
            : [];

          setSourceOptions(
            sources.map((source) => ({
              value: source,
              label: source,
            }))
          );
        }
      } catch (error) {
        if (isMounted) {
          setSourceError(
            error.response?.data?.message ||
              "Failed to load lead sources."
          );
        }
      } finally {
        if (isMounted) {
          setSourceLoading(false);
        }
      }
    };

    fetchSources();

    return () => {
      isMounted = false;
    };
  }, []);

  // Add All Sources option
  const searchableSourceOptions = useMemo(() => {
    return [
      { value: "", label: "All Sources" },
      ...sourceOptions,
    ];
  }, [sourceOptions]);

  return (
    <div className="row g-3 mb-4">

      {/* Sales Agent Autocomplete */}
      <div className="col-md-3">
        <label
          htmlFor="sales-agent-search"
          className="form-label fw-semibold"
        >
          Sales Agent
        </label>

        <div
          className="position-relative"
          ref={agentDropdownRef}
        >
          <div className="input-group">
            <span className="input-group-text">
              <UserRound size={17} />
            </span>

            <input
              id="sales-agent-search"
              type="text"
              className="form-control"
              placeholder="Search by agent name..."
              value={
                showAgentDropdown
                  ? agentSearch
                  : selectedAgent
                    ? selectedAgent.label
                    : ""
              }
              autoComplete="off"
              role="combobox"
              aria-expanded={showAgentDropdown}
              aria-controls="sales-agent-options"
              aria-autocomplete="list"
              onFocus={() => {
                setAgentSearch("");
                setDebouncedAgentSearch("");
                setShowAgentDropdown(true);
              }}
              onChange={(event) => {
                setAgentSearch(event.target.value);
                setShowAgentDropdown(true);

                onChange({
                  target: {
                    name: "salesAgent",
                    value: "",
                  },
                });
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setShowAgentDropdown(false);
                }
              }}
            />

            {filters.salesAgent && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                aria-label="Clear selected sales agent"
                title="Clear selected sales agent"
                onClick={clearAgent}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {showAgentDropdown && (
            <div
              id="sales-agent-options"
              className="position-absolute start-0 end-0 mt-1 bg-white border rounded-3 shadow"
              style={{
                zIndex: 1050,
                maxHeight: "260px",
                overflowY: "auto",
              }}
              role="listbox"
              aria-label="Available sales agents"
            >
              {filteredAgents.length > 0 ? (
                filteredAgents.map((agent) => (
                  <button
                    key={agent.value}
                    type="button"
                    role="option"
                    aria-selected={
                      String(filters.salesAgent || "") ===
                      String(agent.value)
                    }
                    className={`dropdown-item text-start p-3 border-bottom ${
                      String(filters.salesAgent || "") ===
                      String(agent.value)
                        ? "active"
                        : ""
                    }`}
                    onClick={() => selectAgent(agent)}
                  >
                    <div className="fw-semibold">
                      {agent.label}
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-3 text-secondary small">
                  {salesAgents.length === 0
                    ? "No sales agents available."
                    : "No agents match your search."}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Status Filter */}
      <div className="col-md-3">
        <label className="form-label fw-semibold">
          Status
        </label>

        <select
          className="form-select"
          name="status"
          value={filters.status || ""}
          onChange={onChange}
        >
          <option value="">All Statuses</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Proposal Sent">Proposal Sent</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {/* Source Search */}
      <div className="col-md-3">
        <SearchableSelect
          label="Source"
          name="source"
          value={filters.source || ""}
          onChange={onChange}
          options={searchableSourceOptions}
          placeholder={
            sourceLoading
              ? "Loading sources..."
              : "Search by source..."
          }
          disabled={sourceLoading}
          debounceDelay={300}
        />

        {sourceError && (
          <small className="text-danger">
            {sourceError}
          </small>
        )}
      </div>

      {/* Priority Filter */}
      <div className="col-md-3">
        <label className="form-label fw-semibold">
          Priority
        </label>

        <select
          className="form-select"
          name="priority"
          value={filters.priority || ""}
          onChange={onChange}
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

    </div>
  );
};

export default LeadFilters;
