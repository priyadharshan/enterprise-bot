import React, { memo } from 'react';
import { isEmpty } from 'ramda'
import { DisplayName } from './display-name'
import { Context } from './context'
import { Suggestions } from './suggestions'
import { TextReply } from './text-reply'
import { Triggers } from './triggers'
import { Picture } from './picture'
import { GalleryCard } from './gallery-card'
import { CircularLoader } from '../../../components/circular-loader'
import './intent-details.css'

export const IntentDetails = memo(({ intentDetails, loading }) => {
  const hasIntentntDetails = !isEmpty(intentDetails)
  const displayName = hasIntentntDetails ? intentDetails.data.intent.displayName : ''
  const suggestions = hasIntentntDetails ? intentDetails.data.intent.suggestions : ''
  const replies = hasIntentntDetails ? intentDetails.data.intent.replies : ''
  const triggers = hasIntentntDetails ? intentDetails.data.gambits : ''

  return (
    <div className="intent-details">
    {
      loading ?
      <div className="container">
        <div className="details-loader"><CircularLoader /></div>
      </div>
      :
      <div>
        { displayName && <DisplayName displayName={displayName} /> }
        { hasIntentntDetails && <Context /> }
        { triggers && <Triggers triggers={triggers} /> }
        { replies && <TextReply replies={replies} /> }
        { suggestions && <Suggestions suggestions={suggestions} /> }
        { hasIntentntDetails && <Picture /> }
        { hasIntentntDetails && <GalleryCard /> }
        
        
      </div>
    }
    </div>
  )
})