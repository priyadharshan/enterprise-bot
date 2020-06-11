import React, { memo } from 'react';
import { isEmpty } from 'ramda'
import { DisplayName } from './display-name'
import { Suggestions } from './suggestions'
import { TextReply } from './text-reply'
import { CircularLoader } from '../../../components/circular-loader'
import './intent-details.css'

export const IntentDetails = memo(({ intentDetails, loading }) => {
  console.log(intentDetails)
  const displayName = !isEmpty(intentDetails) ? intentDetails.data.intent.displayName : ''
  const suggestions = !isEmpty(intentDetails) ? intentDetails.data.intent.suggestions : ''
  const replies = !isEmpty(intentDetails) ? intentDetails.data.intent.replies : ''

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
        { suggestions && <Suggestions suggestions={suggestions} /> }
        { replies && <TextReply replies={replies} /> }
      </div>
    }
    </div>
  )
})