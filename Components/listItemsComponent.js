import React, { PropTypes } from 'react'


const ItemsList = ({ items }) => (
  <ul>
    {items.map(item =>
      <li>
        Item: {item.text}
      </li>
    )}
  </ul>
)


export default ItemsList
