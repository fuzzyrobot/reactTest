import { connect } from 'react-redux'
import { showAllItems } from './showAllAction'
import ShowItemComponent from './showAllComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    children: state,
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(showAllItems)
    }
  }
}

const ShowAll = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowItemComponent)

export default ShowAll
