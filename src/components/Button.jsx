import React from 'react'

export default function Button() {
  const handleClickBtn = () => {
    alert("Button Clicked!");
  }
  return (
    <button
      onClick={handleClickBtn}
      className="w-full bg-teal-700 text-white py-2 rounded-xl font-medium 
                 hover:bg-teal-800 active:scale-95 
                 transition-all duration-200"
        >
      Click
    </ button>
  )
}
