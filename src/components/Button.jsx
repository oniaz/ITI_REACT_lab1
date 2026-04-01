export default function Button({itemNumber}) {
  const handleClickBtn = () => {
    alert(` Clicked Item: ${itemNumber}`);
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
