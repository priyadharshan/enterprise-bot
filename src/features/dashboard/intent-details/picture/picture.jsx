import React, { memo } from 'react';


export const Picture = memo(() => {

  return (
      <div className="suggestion-block">
      <div className="suggestion-container">
      <i class="material-icons suggestion-icon">insert_photo</i>
      <span className="suggestion-text">PICTURE</span>
      
      <div class="display-name-icons">
          <i class="material-icons delete-outline-icon">delete_outline</i>
        </div>
      </div>
            <div className="">
            </div>
    </div> 
  ) 

})