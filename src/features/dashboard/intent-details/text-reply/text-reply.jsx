import React, { memo } from 'react';
import './text-reply.css'


export const TextReply = memo(({ replies }) => {

  return (
      <div className="reply-block">
      <div className="reply-container">
      <i class="material-icons chat-icon">chat</i>
      <span className="reply-text">TEXT REPLY</span>
      </div>
            {replies.map((replies) => (
                <div className="reply-name">
        <span className="replies">{replies}</span>
        <div class="display-name-icons">
          <i class="material-icons delete-outline-icon">delete_outline</i>
        </div>
    </div>
              ))}

              <div className="reply-name">
              <div>
              <i class="material-icons intent-list-icons">add</i>
                
              <span className="add-replies"><small>Add reply here</small></span>
              </div>
          </div>
    </div> 
  ) 

})