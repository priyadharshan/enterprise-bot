import { connect } from 'react-redux';
import { actions } from '../../domain/token-details';
import { LoginForm } from './login-form';

const mapDispatchToProps = dispatch => ({
  getTokenDetails: (username, password) => dispatch(actions.getTokenDetails(username, password)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
