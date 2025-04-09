import {useState} from "react"
import searchBar from "./componentes/searchBar"
import imageList from "./componentes/imageList"
import searchImages from "./api"


function App() {
  const[ images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('usted esta buscando con: ', term)
    const result = await searchImages(term)
  }
  return (
    <>
    <h1>Pictures App</h1>
    <searchBar />
    <imageList />
    </>
  )
}
export default App
