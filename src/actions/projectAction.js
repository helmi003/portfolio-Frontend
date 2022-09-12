import {
  PROJECTS_LIST_FAIL,
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_SUCCESS,
} from "../constants/projectsConstant";
import axios from "axios";

export const listProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: PROJECTS_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/projects`);

    dispatch({
      type: PROJECTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PROJECTS_LIST_FAIL,
      payload: message,
    });
  }
};
