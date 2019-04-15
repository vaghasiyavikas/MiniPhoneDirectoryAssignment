import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { WrappedRegistrationForm } from './FormInputTodo';

const mapStateToProps = state =>({
  loading : state.loading,
})

const mapDispatchToProps = dispatch => ({
  onClick: ownProps => dispatch(addTodo(ownProps)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedRegistrationForm);
