// This is our root file to start the react app

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import simpleListApp from './simpleListReducer'
import App from './appComponent'

// Create a new store and link it to our reducer
let store = createStore(simpleListApp)

render( 
  < Provider store = { store } >
    < App / >
  < /Provider>,
    document.getElementById('simple')
)
