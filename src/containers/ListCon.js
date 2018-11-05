import { connect } from 'react-redux';
import List from '../components/list/List';

const mapStateToProps = state => {
  return {
    name: state.user.name
  }
} 

export default connect(mapStateToProps)(List);