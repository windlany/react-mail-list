import { connect } from 'react-redux';
import { setUser } from '../actions';
import Set from '../components/list/Set';

const mapStateToProps = state => {
  return {
    name: state.user.name,
    tel: state.user.tel,
    psw: state.user.psw,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    set(user) {
      dispatch(setUser(user));
    }
  }
}

const SetCon = connect(
  mapStateToProps,
  mapDispatchToProps
)(Set);

export default SetCon;
