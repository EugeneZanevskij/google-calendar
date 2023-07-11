import React from 'react'

export const DisplayElement = ({leftPart, rightPart}) => {
  return (
    <div className='event-display__element'>
      {leftPart}
      {rightPart}
    </div>
  )
}
