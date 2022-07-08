import React, {useState, useEffect} from 'react'

import GifList from './GifList'
import GifSearch from './GifSearch'



function GifListContainer() {

    const[gifs, setGif] = useState([])


   // Note ApiKey === "IDs0A9VNK388fJKocyPLXYX5eo7fx4Pcc"
    
    useEffect(()=> {
        fetch(`https://api.giphy.com/v1/gifs/search?q=IDs0A9VNK388fJKocyPLXYX5eo7fx4Pcc&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => setGif(json.data.slice(0,3))
        )
    },[])


    console.log(gifs)


    function handleSubmit(search) {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=IDs0A9VNK388fJKocyPLXYX5eo7fx4Pcc&rating=g`)
      .then(r=>r.json())
      .then(json => setGif(json.data.slice(0,3)))
  }


  return (

    <div>GifListContainer

        <GifList  gifs={gifs}/>
        <GifSearch  handleSubmit={handleSubmit} />
    </div>
  )
}

export default GifListContainer