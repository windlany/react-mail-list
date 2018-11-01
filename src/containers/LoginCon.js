import { connect } from 'react-redux';
import { loginCheck } from '../actions';
import Login from '../components/home/Login';

const mapDispatchToProps = dispatch => {
  return {
    login: (obj)=> {
      dispatch(loginCheck(obj));
    }
  }
}

const LoginCon = connect(
  null,
  mapDispatchToProps
)(Login);

export default LoginCon;
