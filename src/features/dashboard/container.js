import { connect } from 'react-redux';
import { actions } from '../../domain/intent-list';
import { Dashboard } from './dashboard';

const mapStateToProps = state => ({
  intentList: state.intentList.model,
  loading: state.intentList.meta.loading,
  tokenDetails: state.tokenDetails.model
});

const mapDispatchToProps = dispatch => ({
  getIntentList: () => dispatch(actions.getIntentList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
