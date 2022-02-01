const Button = ( props ) => {
  return (
    <button {...props} 
    className="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700">
     {props.children}
    </button>

  )
}

export default Button
