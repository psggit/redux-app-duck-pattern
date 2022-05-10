import { connect } from "react-redux";
import LandingComponent from "./LandingComponent";
// import { fetchLogData } from "./duck";
import { fetchLogsAPI } from "./duck";

const mapStateToProps = (state) => {
  return {
    fetchLogsInProgress: state.landing.fetchLogsInProgress,
    fetchLogsInSuccess: state.landing.fetchLogsInSuccess,
    fetchLogsInFailed: state.landing.fetchLogsInFailed,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("type", typeof fetchLogsAPI);
  return {
    fetchLogs: (payload) => dispatch(fetchLogsAPI(payload)),
  };
};

const LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingComponent);

export { LandingContainer };
