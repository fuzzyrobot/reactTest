import { connect } from 'react-redux'
import React from 'react'
import ItemsList from '../Components/listItemsComponent'
import { addItem } from '../Actions/addAction.js'


let AddItem = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={() => { 
        dispatch(addItem(input.value))
        input.value = '' }}>
        Add item to list
      </button>
    </div>
  )
}

AddItem = connect()(AddItem)

export default AddItem