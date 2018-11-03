import { connect } from 'react-redux';
import Concats from '../components/list/Concats';
import { deleteC, setInfo, setFilter } from '../actions';

function getVisible(concats, filter) {
  if(filter && filter !== 'all') {
    return concats.filter(item=> item.relative === filter);
  } 
  return concats;
}

const mapStateToProps = state => {
  return {
    concats: getVisible(state.concats, state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete(index) {
      dispatch(deleteC(index));
    },
    save(index, obj) {
      dispatch(setInfo(index, obj));
    },
    select(filter) {
      dispatch(setFilter(filter));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Concats);
