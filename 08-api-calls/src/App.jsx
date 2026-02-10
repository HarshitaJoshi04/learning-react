import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  
  const [data, setdata] = useState([])
  const getData=async ()=>{
    const response =await axios.get('https://picsum.photos/v2/list')
     console.log(response.data)
    setdata(response.data)
  }
  return (
    <div>
      <button onClick={getData}>get data</button>
      <div>
      {data.map((elem,idx)=>{
           return(
            <div key={idx}>
             <h2>{elem.author}</h2>
            </div>
           )
      })}
      </div>
    </div>
  )
}

export default App


// const App = () => {

//   async function getData(){
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    console.log(response)
//    const data=await response.json()

//    console.log(data);
//   }
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>k
//   )
// }

// export default App