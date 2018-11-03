import { connect } from 'react-redux';
import Concats from '../components/list/Concats';
import { deleteC, setInfo } from '../actions';

const mapStateToProps = state => {
  return {
    concats: state.concats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete(index) {
      dispatch(deleteC(index));
    },
    save(index, obj) {
      dispatch(setInfo(index, obj));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Concats);
