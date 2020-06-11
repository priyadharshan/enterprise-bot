import React, { memo } from 'react';


export const Triggers = memo(({ triggers }) => {
  console.log(triggers)

  return (
      <div className="reply-block">
      <div className="reply-container">
      <i class="material-icons chat-icon">record_voice_over</i>
      <span className="reply-text">TRIGGERS</span>
      </div>
      <div className="reply-name">
              <div>
              <i class="material-icons intent-list-icons">add</i>
                
              <span className="add-replies">Add User Says here...</span>
              </div>
          </div>
            {triggers.map((trigger) => (
                <div className="reply-name">
        <span className="replies">{trigger.displayValue}</span>
        <div class="display-name-icons">
        <i class="material-icons delete-outline-icon">edit</i>
          <i class="material-icons delete-outline-icon">delete_outline</i>
        </div>
    </div>
              ))}

              
    </div> 
  ) 

})