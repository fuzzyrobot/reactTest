import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import items from './Reducers/addItemsReducer'
import App from './Components/App'

let store = createStore(items)


// Provider element makes everything inside it aware of the store (provides the store to enclosed components)
render( 
  < Provider store = { store } >
    < App / >
  < /Provider>,
  document.getElementById('root')
)
