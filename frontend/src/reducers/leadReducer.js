 import { LEAD_ACTIONS } from "../constants/leadActions";

export const initialLeadState = {
  leads: [],
  salesAgents: [],

  selectedLead: null,

 filters: {
  search: "",
  salesAgent: "",
  status: "",
  source: "",
  priority: "",
  tags: "",
  sortBy: "createdAt",
  sortOrder: "desc",
},

  loading: false,

  error: null,
};

export const leadReducer = (state, action) => {
  switch (action.type) {
    case LEAD_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case LEAD_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case LEAD_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case LEAD_ACTIONS.GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };

    case LEAD_ACTIONS.ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };

    case LEAD_ACTIONS.UPDATE_LEAD:
      return {
        ...state,
        leads: state.leads.map((lead) =>
          lead._id === action.payload._id
            ? action.payload
            : lead
        ),
      };

    case LEAD_ACTIONS.DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(
          (lead) => lead._id !== action.payload
        ),
      };

    case LEAD_ACTIONS.SET_SELECTED_LEAD:
      return {
        ...state,
         loading: false,
        selectedLead: action.payload,
      };

    case LEAD_ACTIONS.SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };

    case LEAD_ACTIONS.RESET_FILTERS:
      return {
        ...state,
        filters: initialLeadState.filters,
      };



      case LEAD_ACTIONS.SET_AGENTS:
  return {
    ...state,
    salesAgents: action.payload,
  };

case LEAD_ACTIONS.ADD_AGENT:
  return {
    ...state,
    salesAgents: [
      ...state.salesAgents,
      action.payload,
    ],
  };

  case LEAD_ACTIONS.DELETE_AGENT:
  return {
    ...state,
    salesAgents: state.salesAgents.filter(
      (agent) => agent._id !== action.payload
    ),
  };

    default:
      return state;
  }
};