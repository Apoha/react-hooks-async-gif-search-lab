import React, {useState} from 'react'






function GifSearch({handleSubmit}) {


const[search, setSearch] = useState('')


  return (
    <div>GifSearch
      <h5>Enter a Search Term</h5>
<form onSubmit={e=> {
         e.preventDefault()
         handleSubmit(search)
         setSearch('')
     }}
/>


<input type='text' placeholder='search' value={search}
     onChange={e=>setSearch(e.target.value)}/>

    </div>
  )
}

export default GifSearch