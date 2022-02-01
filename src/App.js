import { useState, useEffect } from "react"
import ImageCard from "./components/ImageCard"
import Header from "./components/Header"
import Input from "./components/Input" 
import Button from "./components/Button"

const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')
  const [text, setText] = useState('')

  useEffect( () => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then( res => res.json() )
      .then( data => {
        setImages(data.hits)
        setIsLoading(false)
      } )
      .catch( err => console.error(err) )
  }, [term] )

  const onSubmit = (e) => {
    e.preventDefault()
    setTerm(text)
  }

  return (
    <div className="container mx-auto">
      <Header>
        <form onSubmit={onSubmit} className="flex items-center py-2 border-b border-b-2 border-teal-500">
          <Input type="text" onChange={e => setText(e.target.value)} /> 
          <Button type="submit">Search</Button>
        </form>
      </Header>

      {
        !isLoading && images.length === 0 ? <h1 className="mx-auto text-6xl text-center">No images found :(</h1> : null
      }

        {
          isLoading ? <h1 className="mx-auto text-6xl text-center">Loading ...</h1>

          : <div className="grid grid-cols-3 gap-4">
            
            {images.map( image => (
              <ImageCard key={image.id} image={image} />
            ) )}
        
            </div>
        }
    </div>
  )
}

export default App
