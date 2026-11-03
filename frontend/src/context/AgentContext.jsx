import { createContext, useReducer } from "react";

import agentReducer, {
  initialAgentState,
} from "../reducers/agentReducer";

import {
  getAgents,
  createAgent,
} from "../services/agentService";

// eslint-disable-next-line react-refresh/only-export-components
export const AgentContext = createContext();

const AgentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    agentReducer,
    initialAgentState
  );

  const getAllAgents = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
      });

      const { data } = await getAgents();

      dispatch({
        type: "SET_AGENTS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.response?.data?.error ||
          "Failed to fetch agents.",
      });
    }
  };

  // const addAgent = async (agentData) => {
  
  //   try {
  //     const { data } =
  //       await createAgent(agentData);

  //     dispatch({
  //       type: "ADD_AGENT",
  //       payload: data,
  //     });
  //       return data;
  //   } catch (error) {
  //     dispatch({
  //       type: "SET_ERROR",
  //       payload:
  //         error.response?.data?.error ||
  //         "Failed to create agent.",
  //     });

  //   throw error;
  //   }
  // };

 const addAgent = async (agentData) => {
  dispatch({
    type: "SET_ERROR",
    payload: null,
  });

  try {
    const { data } = await createAgent(agentData);

    dispatch({
      type: "ADD_AGENT",
      payload: data,
    });

    return data;
  } catch (error) {
    let errorMessage = "Failed to create agent. Please try again.";

    if (error.response?.data?.error?.includes("E11000") ||
        error.response?.data?.message?.includes("E11000")) {
      errorMessage =
        "An agent with this email already exists. Please use a different email.";
    } else {
      errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        errorMessage;
    }

    dispatch({
      type: "SET_ERROR",
      payload: errorMessage,
    });

    throw error;
  }
};
  return (
    <AgentContext.Provider
      value={{
        state,
        getAllAgents,
        addAgent,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export default AgentProvider;