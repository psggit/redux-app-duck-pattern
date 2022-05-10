import { connect } from 'react-redux';
import HomeComponent from "./HomeComponent";
// import { fetchLogData } from "./duck";
// import { fetchLogsAPI } from './duck';

const mapStateToProps = (state) => {
  return {
    fetchLogsInProgress: state.landing.fetchLogsInProgress,
    fetchLogsInSuccess: state.landing.fetchLogsInSuccess,
    fetchLogsInFailed: state.landing.fetchLogsInFailed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fetchLogs: (payload) => dispatch(fetchLogsAPI(payload)),
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export { HomeContainer };