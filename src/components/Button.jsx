import React from 'react'

export default function Button() {
  const handleClickBtn = () => {
    alert("Button Clicked!");
  }
  return (
    <button
      onClick={handleClickBtn}
      className="bg-sky-500 text-white px-4 py-2 rounded mt-2 hover:bg-sky-600 transition-colors duration-300"
    >
      Click
    </ button>
  )
}
