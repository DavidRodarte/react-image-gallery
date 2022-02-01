import Tag from "./Tag"

const ImageCard = ( {image} ) => {
  const tags = image.tags.split(',')
  return (

    <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full"/>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-teal-500">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>

        <div className="px-6 py-4">
          {tags.map( (tag, index) => (
            <Tag tag={tag} index={index} />
          ) )}
        </div>
      </div>

  )
}

export default ImageCard
