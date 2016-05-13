import React, { PropTypes } from 'react'

const ShowItemComponent = ({ state, children, onClick }) => {
  return (
    <div>
      <p href="#">
        Here are our items: {children}
      </p>
      <p href="#" onClick={e => {
        e.preventDefault()
        onClick() }}>
        Here is the state: {state}
      </p>
    </div>
  )
}

ShowItemComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ShowItemComponent
