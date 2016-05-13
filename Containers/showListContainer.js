import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import ItemsList from '../Components/listItemsComponent'

const getListItems = (items) => {
  return items
}

const mapStateToProps = (state) => {
  return {
    items: getListItems(state.items)
  }
}

const mapDispatchToProps = (dispatch) => {
  return 
}

const ShowListItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList)

export default ShowListItems
