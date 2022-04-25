import React,{useState} from 'react'

const Input = ({showDiv}) => {
    const[search,setSearch]=useState('')

  return (
  <div>
       <input 
      type="text"
      name="search"
      placeholder="search Input"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      data-testid="input-search"
      />

      <h1 data-testid="displaySearch">{search}</h1>

      {showDiv &&(

 <div data-testid="show-div">
     my name is Felex
 </div>

      )

      }
  </div>
  )
}

export default Input