import { connect } from 'react-redux';
import { actions, selectors } from '../domain/news';
import { Dashboard } from './dashboard';

const mapStateToProps = state => ({
  loading: selectors.loading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchChat: () => dispatch(actions.fetchChat()),
  fetchIntents: () => dispatch(actions.fetchIntents()),
  fetchDetails: () => dispatch(actions.fetchDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
