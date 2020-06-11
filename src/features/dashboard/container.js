import { connect } from 'react-redux'
import { getIntentDetails } from '../../domain/intent-details/actions'
import { getIntentList } from '../../domain/intent-list/actions'
import { Dashboard } from './dashboard'

const mapStateToProps = state => ({
  intentList: state.intentList.model,
  tokenDetails: state.tokenDetails.model,
  intentDetails: state.intentDetails.model,
  loading: state.intentDetails.meta.loading,
});

const mapDispatchToProps = dispatch => ({
  getIntentList: () => dispatch(getIntentList()),
  getIntentDetails: (intentId) => dispatch(getIntentDetails(intentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
