import { connect } from 'react-redux';
import { loginCheck } from '../actions';
import Login from '../components/Login';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    login: (obj)=> {
      console.log('login...');
      dispatch(loginCheck(obj));
    }
  }
}

const LoginCon = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginCon;
