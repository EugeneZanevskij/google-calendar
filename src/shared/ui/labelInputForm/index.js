import React from 'react'

export const LabelInputForm = ({styleName, style, handleLabelClick, children}) => {
  return (
    <span
      onClick={handleLabelClick}
      className={styleName}
      style={style}
    >
      {children}
    </span>
  )
}
