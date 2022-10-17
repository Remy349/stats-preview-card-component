import React from 'react'

export const Stats = (props) => {
  return (
    <div className='stats__card-content_info_container'>
      <p className='stats__card-content_info_value'>
        {props.value}
      </p>
      <span className='stats__card-content_info_text'>
        {props.text}
      </span>
    </div>
  )
}
