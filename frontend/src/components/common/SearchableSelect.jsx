 
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";

const SearchableSelect = ({
  label,
  name,
  value = "",
  onChange,
  options = [],
  placeholder = "Search...",
  debounceDelay = 300,
  disabled = false,
  error = "",
}) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Find selected option
  const selectedOption = useMemo(
    () =>
      options.find(
        (option) => String(option.value) === String(value)
      ),
    [options, value]
  );

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim().toLowerCase());
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [search, debounceDelay]);

  // Filter options
  const filteredOptions = useMemo(() => {
    if (!debouncedSearch) {
      return options;
    }

    return options.filter((option) =>
      String(option.label)
        .toLowerCase()
        .includes(debouncedSearch)
    );
  }, [options, debouncedSearch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setSearch("");
        setDebouncedSearch("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Select an option
  const handleSelect = (option) => {
    onChange({
      target: {
        name,
        value: option.value,
      },
    });

    setSearch("");
    setDebouncedSearch("");
    setIsOpen(false);
  };

  // Handle search input
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setIsOpen(true);

    // Clear previous selection when user starts searching
    if (value) {
      onChange({
        target: {
          name,
          value: "",
        },
      });
    }
  };

  // Clear selected value
  const handleClear = () => {
    onChange({
      target: {
        name,
        value: "",
      },
    });

    setSearch("");
    setDebouncedSearch("");
    setIsOpen(true);
  };

  return (
    <div className="mb-3" ref={dropdownRef}>
      {label && (
        <label className="form-label fw-semibold">
          {label}
        </label>
      )}

      <div className="position-relative">

        {/* Search input - always visible */}
        <div className="input-group">
          <span className="input-group-text">
            <Search size={17} />
          </span>

          <input
            type="text"
            className={`form-control ${
              error ? "is-invalid" : ""
            }`}
            placeholder={placeholder}
            value={
              isOpen
                ? search
                : selectedOption?.label || ""
            }
            autoComplete="off"
            disabled={disabled}
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            onFocus={() => {
              setSearch("");
              setDebouncedSearch("");
              setIsOpen(true);
            }}
            onChange={handleSearchChange}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setIsOpen(false);
                setSearch("");
                setDebouncedSearch("");
              }

              if (
                event.key === "Enter" &&
                isOpen &&
                filteredOptions.length === 1
              ) {
                event.preventDefault();
                handleSelect(filteredOptions[0]);
              }
            }}
          />

          {value && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleClear}
              aria-label={`Clear ${label} selection`}
              title="Clear selection"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Search results dropdown */}
        {isOpen && (
          <div
            className="position-absolute start-0 end-0 mt-1 bg-white border rounded-3 shadow"
            style={{
              zIndex: 1050,
              maxHeight: "260px",
              overflowY: "auto",
            }}
            role="listbox"
            aria-label={`${label} options`}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={String(option.value)}
                  type="button"
                  role="option"
                  aria-selected={
                    String(value) === String(option.value)
                  }
                  className={`dropdown-item text-start p-3 border-bottom ${
                    String(value) === String(option.value)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </button>
              ))
            ) : (
              <div className="p-3 text-secondary small">
                {options.length === 0
                  ? `No ${label?.toLowerCase()} available.`
                  : `No ${label?.toLowerCase()} match your search.`}
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <div className="text-danger small mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
