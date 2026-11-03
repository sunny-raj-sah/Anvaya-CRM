import api from "./axios";
import { API } from "../constants/api";
//  LEADS: "/leads",
//   AGENTS: "/agents",
//   TAGS: "/tags",
  

export const getLeadSources = () => {
  return api.get(`${API.LEADS}/sources`);
};

export const getLeads = (params = {}) => {
  return api.get(API.LEADS, {
    params,
  });
};

export const getLeadById = (id) => {
  return api.get(`${API.LEADS}/${id}`);
};

export const createLead = (leadData) => {
  return api.post(API.LEADS, leadData);
};

export const updateLead = (id, leadData) => {
  return api.put(`${API.LEADS}/${id}`, leadData);
};

export const deleteLead = (id) => {
  return api.delete(`${API.LEADS}/${id}`);
};