 

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useLead from "../../hooks/useLead";

import LeadTable from "../../components/lead/LeadTable";
import LeadFilters from "../../components/lead/LeadFilters";
import PageHeader from "../../components/common/PageHeader";
import DeleteModal from "../../components/common/DeleteModal";

const LeadList = () => {
  const [selectedLead, setSelectedLead] = useState(null);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    state,
    getAllLeads,
    removeLead,
    setFilters,
  } = useLead();

  useEffect(() => {
    const filters = {
      salesAgent: searchParams.get("salesAgent") || "",
      status: searchParams.get("status") || "",
      source: searchParams.get("source") || "",
      priority: searchParams.get("priority") || "",
      search: searchParams.get("search") || "",
      tags: searchParams.get("tags") || "",
      sortBy: searchParams.get("sortBy") || "createdAt",
      sortOrder: searchParams.get("sortOrder") || "desc",
    };

    setFilters(filters);
    getAllLeads(filters);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleView = (lead) => {
    navigate(`/leads/${lead._id}`);
  };

  const handleEdit = (lead) => {
    navigate(`/leads/edit/${lead._id}`);
  };

  const handleDelete = async () => {
    if (!selectedLead) return;

    await removeLead(selectedLead);
    setSelectedLead(null);
    getAllLeads(state.filters);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    setSearchParams(params);
  };

  return (
    <div className="container-fluid px-0">
      <div className="row g-0">

        <div className="col-12">
          <PageHeader
            title="Lead Management"
            subtitle="Manage all your leads"
            buttonText="Add Lead"
            onClick={() => navigate("/leads/new")}
          />
        </div>

        {/* Filters */}
        <div className="col-12 mt-3">
          <LeadFilters
            filters={state.filters}
            salesAgents={state.salesAgents}
            onChange={handleFilterChange}
          />
        </div>

        {/* Error */}
        {state.error && (
          <div className="col-12 mt-3">
            <div className="alert alert-danger mb-0" role="alert">
              {state.error}
            </div>
          </div>
        )}

        {/* Leads Table */}
        <div className="col-12 mt-3">
          {state.loading ? (
            <div className="d-flex justify-content-center align-items-center py-5">
              <div
                className="spinner-border text-primary"
                role="status"
                aria-label="Loading leads"
              />
            </div>
          ) : (
            <div className="card border-0 shadow-sm">
              <div className="card-body p-2 p-sm-3">
                <div className="table-responsive">
                  <LeadTable
                    leads={state.leads}
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={(id) => setSelectedLead(id)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <DeleteModal
        show={!!selectedLead}
        title="Delete Lead"
        message="Are you sure you want to delete this lead?"
        onClose={() => setSelectedLead(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default LeadList;
