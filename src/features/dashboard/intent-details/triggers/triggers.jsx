import React, { memo } from 'react';
import { slice, isEmpty } from 'ramda'
import './triggers.css'

export const Triggers = memo(({ triggers }) => {
  console.log(triggers)
  const canShowPagination = !isEmpty(triggers) && triggers.length > 5

  return (
      <div className="reply-block">
      <div className="reply-container">
      <i class="material-icons chat-icon">record_voice_over</i>
      <span className="reply-text">TRIGGERS</span>
      </div>
      <div className="reply-name">
              <div>
              <i class="material-icons intent-list-icons">add</i>
                
              <span className="add-replies"><small>Add User Says here...</small></span>
              </div>
          </div>
            {slice(0,5,triggers).map((trigger) => (
                <div className="reply-name">
        <span className="replies">{trigger.displayValue}</span>
        <div class="display-name-icons">
        <i class="material-icons delete-outline-icon">edit</i>
          <i class="material-icons delete-outline-icon">delete_outline</i>
        </div>
    </div>
              ))}

              {
                canShowPagination ? 

                <div className="pagination">
        <div class="pagination-icons">
        <i class="material-icons delete-outline-icon page-icon">keyboard_arrow_left</i>
        <span className="pagination-count">1 to 5 of {triggers.length}</span>
          <i class="material-icons delete-outline-icon page-icon">keyboard_arrow_right</i>
        </div>
    </div> : null
              }

              
    </div> 
  ) 

})