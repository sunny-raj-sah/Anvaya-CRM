import {
  getAllLeads,
  getLeadById,
  createLead,
  updateLead,
  deleteLead,
    getLeadSources,
} from "../services/leadService.js";

/*
----------------------------------------
GET /api/leads
----------------------------------------
*/
export const getLeads = async (req, res) => {
  try {
    const leads = await getAllLeads(req.query);

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
----------------------------------------
GET /api/leads/:id
----------------------------------------
*/
export const getLead = async (req, res) => {
  try {
    const lead = await getLeadById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
----------------------------------------
POST /api/leads
----------------------------------------
*/
export const addLead = async (req, res) => {
  try {
    const lead = await createLead(req.body);

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
----------------------------------------
PUT /api/leads/:id
----------------------------------------
*/
export const editLead = async (req, res) => {
  try {
    const lead = await updateLead(
      req.params.id,
      req.body
    );

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
----------------------------------------
DELETE /api/leads/:id
----------------------------------------
*/
export const removeLead = async (
  req,
  res
) => {
  try {
    const lead = await deleteLead(
      req.params.id
    );

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    res.status(200).json({
      message: "Lead deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
/*
----------------------------------------
GET /api/leads/sources
----------------------------------------
*/
export const getSources = async (req, res) => {
  try {
    const sources = await getLeadSources();

    res.status(200).json(sources);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};