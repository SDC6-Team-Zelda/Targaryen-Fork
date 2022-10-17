import React, { useState } from 'react';

const StylesItem = (props) => {
  const { style, handleStyles, handleCurrentPhoto, currentStyle } = props
  return (
    <img className="styles-thumbnails" style={currentStyle === style ? { border: '2px solid red' } : { border: '2px solid black' }} src={`${style.photos[0].thumbnail_url}`} alt={`${style.name}`} onClick={(e) => {
      e.preventDefault()
      handleStyles(style)
      handleCurrentPhoto(style.photos[0])
    }}></img>
  )
}

export default StylesItem;