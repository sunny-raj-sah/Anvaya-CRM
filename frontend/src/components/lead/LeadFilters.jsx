 
import { useEffect, useMemo, useRef, useState } from "react";

import Select from "../common/Select";

import {
  STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  SOURCE_OPTIONS,
  TAG_OPTIONS,
} from "../../constants/leadOptions";

// Reusable searchable dropdown with stable debounce
const SearchableDropdown = ({
  label,
  name,
  value = "",
  options = [],
  placeholder,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  // Keep the latest callback without restarting the debounce timer
 const onChangeRef = useRef(onChange);

useEffect(() => {
  onChangeRef.current = onChange;
}, [onChange]);
  // Track the previous input value to avoid filtering on initial mount
  const previousInputValue = useRef(inputValue);

  // Normalize dropdown options
  const normalizedOptions = useMemo(() => {
    return options
      .map((option) => {
        if (typeof option === "string") {
          return {
            value: option,
            label: option,
          };
        }

        return {
          value: option.value ?? option.name ?? "",
          label: option.label ?? option.name ?? "",
        };
      })
      .filter((option) => option.value && option.label);
  }, [options]);

  // Filter suggestions while typing
  const filteredOptions = useMemo(() => {
    const search = inputValue.trim().toLowerCase();

    if (!search) {
      return normalizedOptions;
    }

    return normalizedOptions.filter((option) =>
      option.label.toLowerCase().includes(search)
    );
  }, [inputValue, normalizedOptions]);

  // Debounce table filtering
  useEffect(() => {
    if (previousInputValue.current === inputValue) {
      return;
    }

    previousInputValue.current = inputValue;

    const timer = setTimeout(() => {
      onChangeRef.current({
        target: {
          name,
          value: inputValue.trim(),
        },
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, name]);

  const handleSelect = (option) => {
    setInputValue(option.value);
    setIsOpen(false);
  };

  const handleClear = () => {
    setInputValue("");
    setIsOpen(false);
  };

  return (
    <div className="col-md-4">
      <label className="form-label fw-semibold">
        {label}
      </label>

      <div className="position-relative">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={inputValue}
            placeholder={placeholder}
            autoComplete="off"
            onFocus={() => setIsOpen(true)}
            onChange={(event) => {
              setInputValue(event.target.value);
              setIsOpen(true);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setIsOpen(false);
              }

              if (event.key === "Enter") {
                event.preventDefault();

                if (filteredOptions.length > 0) {
                  handleSelect(filteredOptions[0]);
                }
              }
            }}
          />

          {inputValue && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleClear}
              aria-label={`Clear ${label} filter`}
            >
              &times;
            </button>
          )}

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={`Toggle ${label} options`}
          >
            <span style={{ fontSize: "12px" }}>
              {isOpen ? "▲" : "▼"}
            </span>
          </button>
        </div>

        {isOpen && (
          <>
            <div
              className="position-fixed top-0 start-0 w-100 h-100"
              style={{ zIndex: 10 }}
              onClick={() => setIsOpen(false)}
            />

            <div
              className="position-absolute top-100 start-0 w-100 bg-white border rounded-3 shadow mt-1 overflow-auto"
              style={{
                maxHeight: "220px",
                zIndex: 11,
              }}
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className="dropdown-item py-2 px-3 text-start"
                    style={{
                      color:
                        inputValue === option.value
                          ? "#5946d2"
                          : "#333",
                      backgroundColor:
                        inputValue === option.value
                          ? "#f0edff"
                          : "transparent",
                    }}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </button>
                ))
              ) : (
                <div className="px-3 py-3 text-muted small">
                  No matching {label.toLowerCase()} found.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const LeadFilters = ({
  filters,
  onChange,
  salesAgents = [],
}) => {
  // Convert agents into searchable options
  const agentOptions = useMemo(
    () =>
      salesAgents.map((agent) => ({
        value: agent.name,
        label: agent.name,
      })),
    [salesAgents]
  );

  return (
    <div className="card border-0 shadow-sm mb-4 rounded-3">
      <div className="card-body p-3 p-md-4">
        <div className="row g-3">

          {/* Keyword Search */}
          <div className="col-12">
            <label className="form-label fw-semibold">
              Search Leads
            </label>

            <input
              className="form-control"
              type="text"
              name="search"
              placeholder="Example: John, North, High"
              value={filters.search || ""}
              onChange={onChange}
            />

            <small className="text-muted">
              Separate keywords with commas. All keywords must match.
            </small>
          </div>

          {/* Sales Agent Searchable Dropdown */}
          <SearchableDropdown
            key={`sales-agent-${filters.salesAgent || ""}`}
            label="Sales Agent"
            name="salesAgent"
            value={filters.salesAgent || ""}
            options={agentOptions}
            placeholder="Search sales agent..."
            onChange={onChange}
          />

          {/* Source Searchable Dropdown */}
          <SearchableDropdown
            key={`source-${filters.source || ""}`}
            label="Source"
            name="source"
            value={filters.source || ""}
            options={SOURCE_OPTIONS}
            placeholder="Search lead source..."
            onChange={onChange}
          />

          {/* Status */}
          <div className="col-md-4">
            <Select
              label="Status"
              name="status"
              value={filters.status || ""}
              onChange={onChange}
              options={[
                { value: "", label: "All Statuses" },
                ...STATUS_OPTIONS,
              ]}
            />
          </div>

          {/* Priority */}
          <div className="col-md-4">
            <Select
              label="Priority"
              name="priority"
              value={filters.priority || ""}
              onChange={onChange}
              options={[
                { value: "", label: "All Priorities" },
                ...PRIORITY_OPTIONS,
              ]}
            />
          </div>

          {/* Tags */}
          <div className="col-md-4">
            <Select
              label="Tags"
              name="tags"
              value={filters.tags || ""}
              onChange={onChange}
              options={[
                { value: "", label: "All Tags" },
                ...TAG_OPTIONS,
              ]}
            />
          </div>

          {/* Sort By */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Sort By
            </label>

            <select
              className="form-select"
              name="sortBy"
              value={filters.sortBy || "createdAt"}
              onChange={onChange}
            >
              <option value="createdAt">Recently Created</option>
              <option value="priority">Priority</option>
              <option value="expectedClosingDate">
                Expected Closing Date
              </option>
            </select>
          </div>

          {/* Sort Order */}
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Sort Order
            </label>

            <select
              className="form-select"
              name="sortOrder"
              value={filters.sortOrder || "desc"}
              onChange={onChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeadFilters;
