import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount] =useState(0)



  return (
    <div>
      <h3 data-testid="header">counter</h3>
    <p data-testid="counter">{count}</p> 
  

<button onClick={()=>setCount(count+1)} data-testid='btn-add'>+</button>
<button onClick={()=>setCount(count-1)} data-testid='btn-sub'>-</button>
    </div>
  )
}

export default Counter