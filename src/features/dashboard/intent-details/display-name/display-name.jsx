import React, { memo } from 'react';
import './display-name.css'

export const DisplayName = memo(({ displayName }) => {
  console.log(displayName)

  return (
    <div className="display-name">
        <span className="name">{displayName}</span>
        <div class="display-name-icons">
          <i class="material-icons save-icon">save</i>
          <small className="save-text">Save</small>
          <i class="material-icons delete-outline-icon">delete_outline</i>
        </div>
    </div>
  ) 

})