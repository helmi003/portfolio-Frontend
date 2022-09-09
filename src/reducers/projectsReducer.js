import {
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_SUCCESS,
  PROJECTS_LIST_FAIL,
} from "../constants/projectsConstant";

export const projectListReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECTS_LIST_REQUEST:
      return { loading: true };
    case PROJECTS_LIST_SUCCESS:
      return { loading: false, projects: action.payload };
    case PROJECTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
