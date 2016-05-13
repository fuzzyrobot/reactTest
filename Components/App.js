import React from 'react'
import ItemsList from '../Components/listItemsComponent'
import AddItem from '../Containers/listItemsContainer'
import ShowListItems from '../Containers/showListContainer'


const App = () => ( 
  <div>
    <ItemsList />
    <AddItem />
    <ShowListItems />
  </div>
)

export default App
