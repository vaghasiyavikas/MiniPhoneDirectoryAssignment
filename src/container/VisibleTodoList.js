import { connect } from 'react-redux';
import Home from '../component/Home';
import { deleteTodo } from '../actions'

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(Home);