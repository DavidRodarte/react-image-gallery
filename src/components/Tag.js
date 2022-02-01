const Tag = ( {tag, index} ) => {
  return (
     <span key={index} className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full cursor-pointer">
            #{tag}
          </span>

  )
}

export default Tag
