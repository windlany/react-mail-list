import { connect } from 'react-redux';
import Concats from '../components/list/Concats';

const mapStateToProps = state => {
  return {
    concats: state.concats
  }
}

export default connect(
  mapStateToProps
)(Concats);
