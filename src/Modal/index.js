import React from 'react'

export default function Modal( { children } ) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{ children }</p>
      </div>
    </div>
  )
}
