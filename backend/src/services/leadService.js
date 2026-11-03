import Lead from "../models/Lead.js";
import SalesAgent from "../models/Agent.js";

 
/*
----------------------------------------
Get All Leads
----------------------------------------
*/

// Escape special regex characters in user input
const escapeRegex = (value) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// Convert comma-separated values or arrays into an array
const parseValues = (value) => {
  if (!value) return [];

  const values = Array.isArray(value)
    ? value
    : String(value).split(",");

  return values
    .map((item) => String(item).trim())
    .filter(Boolean);
};



export const getAllLeads = async (filters = {}) => {
  const query = {};

  // 1. Basic filters

  // Status filter
  if (filters.status?.trim()) {
    query.status = filters.status.trim();
  }

  // Priority filter
  if (filters.priority?.trim()) {
    query.priority = filters.priority.trim();
  }

  // Source: case-insensitive partial matching
  if (filters.source?.trim()) {
    query.source = {
      $regex: escapeRegex(filters.source.trim()),
      $options: "i",
    };
  }

  // Sales Agent: search by agent name
  if (filters.salesAgent?.trim()) {
    const matchingAgents = await SalesAgent.find({
      name: {
        $regex: escapeRegex(filters.salesAgent.trim()),
        $options: "i",
      },
    }).select("_id");

    const agentIds = matchingAgents.map(
      (agent) => agent._id
    );

    query.salesAgent = {
      $in: agentIds,
    };
  }

  // 2. Tags filter
  const selectedTags = parseValues(filters.tags);

  if (selectedTags.length > 0) {
    query.tags = { $all: selectedTags };
  }

  // 3. Hybrid multi-keyword search
  const searchTerms = parseValues(filters.search);

  if (searchTerms.length > 0) {
    const searchConditions = [];

    const priorities = ["High", "Medium", "Low"];

    const statuses = [
      "New",
      "Contacted",
      "Qualified",
      "Proposal Sent",
      "Closed",
    ];

    const knownTags = [
      "High Value",
      "Follow-up",
      "Urgent",
      "Enterprise",
    ];

    // Fetch available sources dynamically
    const availableSources = await Lead.distinct("source");

    for (const term of searchTerms) {
      const normalizedTerm = term.toLowerCase();
      const escapedTerm = escapeRegex(term);

      const exactRegex = new RegExp(
        `^${escapedTerm}$`,
        "i"
      );

      // Priority: exact field-specific search
      if (
        priorities.some(
          (value) => value.toLowerCase() === normalizedTerm
        )
      ) {
        searchConditions.push({
          priority: exactRegex,
        });

        continue;
      }

      // Status: exact field-specific search
      if (
        statuses.some(
          (value) => value.toLowerCase() === normalizedTerm
        )
      ) {
        searchConditions.push({
          status: exactRegex,
        });

        continue;
      }

      // Tags: exact field-specific search
      if (
        knownTags.some(
          (value) => value.toLowerCase() === normalizedTerm
        )
      ) {
        searchConditions.push({
          tags: exactRegex,
        });

        continue;
      }

      // Source: exact field-specific search
      const matchingSource = availableSources.some(
        (source) =>
          source?.toLowerCase() === normalizedTerm
      );

      if (matchingSource) {
        searchConditions.push({
          source: exactRegex,
        });

        continue;
      }

      // General search: lead name, source, and agent name
      const matchingAgents = await SalesAgent.find({
        name: {
          $regex: escapedTerm,
          $options: "i",
        },
      }).select("_id");

      const agentIds = matchingAgents.map(
        (agent) => agent._id
      );

      searchConditions.push({
        $or: [
          {
            name: {
              $regex: escapedTerm,
              $options: "i",
            },
          },
          {
            source: {
              $regex: escapedTerm,
              $options: "i",
            },
          },
          {
            salesAgent: {
              $in: agentIds,
            },
          },
        ],
      });
    }

    // Every keyword must match
    query.$and = searchConditions;
  }

  // 4. Fetch matching leads
  const leads = await Lead.find(query)
    .populate("salesAgent")
    .sort({ createdAt: -1 });

  // 5. Sorting
  const sortBy = filters.sortBy || "createdAt";
  const sortOrder = filters.sortOrder === "asc" ? 1 : -1;

  if (sortBy === "priority") {
    const priorityRank = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    leads.sort((a, b) => {
      return (
        (priorityRank[a.priority] - priorityRank[b.priority]) *
        sortOrder
      );
    });
  }

  if (sortBy === "expectedClosingDate") {
    const getExpectedClosingDate = (lead) => {
      const expectedDate = new Date(lead.createdAt);

      expectedDate.setDate(
        expectedDate.getDate() + (lead.timeToClose ?? 30)
      );

      return expectedDate.getTime();
    };

    leads.sort((a, b) => {
      return (
        getExpectedClosingDate(a) -
        getExpectedClosingDate(b)
      ) * sortOrder;
    });
  }

  return leads;
};

 


/*
----------------------------------------
Get Lead By Id
----------------------------------------
*/
export const getLeadById = async (
  id
) => {
  return await Lead.findById(id)
    .populate("salesAgent");
};

/*
----------------------------------------
Create Lead
----------------------------------------
*/
export const createLead = async (
  leadData
) => {
  return await Lead.create(leadData);
};

/*
----------------------------------------
Update Lead
----------------------------------------
*/
export const updateLead = async (
  id,
  leadData
) => {
  return await Lead.findByIdAndUpdate(
    id,
    leadData,
    {
      new: true,
      runValidators: true,
    }
  ).populate("salesAgent");
};

/*
----------------------------------------
Delete Lead
----------------------------------------
*/
export const deleteLead = async (
  id
) => {
  return await Lead.findByIdAndDelete(id);
};

/*
----------------------------------------
Get Distinct Lead Sources
----------------------------------------
*/
export const getLeadSources = async () => {
  const sources = await Lead.distinct("source");

  return sources.sort((a, b) => a.localeCompare(b));
};