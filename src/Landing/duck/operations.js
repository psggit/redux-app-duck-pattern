import {
  fetchLogsInProgress,
  fetchLogsInSuccess,
  fetchLogsInFailed,
} from "./action";
import axios from "axios";

const fetchLogsAPI = (reqBody) => {
  return (dispatch) => {
    console.log("123");
    dispatch(fetchLogsInProgress());
    axios
      .get("https://api.github.com/users/mapbox")
      .then((response) => {
        dispatch(fetchLogsInSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchLogsInFailed(error));
      });
  };
};

export { fetchLogsAPI };
