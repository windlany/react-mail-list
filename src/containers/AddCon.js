import { connect } from 'react-redux';
import { add } from '../actions';
import Add from '../components/list/Add';

const mapDispatchToProps = dispatch => {
  return {
    add(concat) {
      dispatch(add(concat));
    }
  }
};

const AddCon = connect(
  null,
  mapDispatchToProps
)(Add);

export default AddCon;