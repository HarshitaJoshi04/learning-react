import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(
      (`https://picsum.photos/v2/list?page=${index}&limit=10`),
    );
    setUserdata(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printuserdata = <h3 className=" text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 font-semibold ">Loading..</h3>;
  if (userdata.length > 0) {
    printuserdata = userdata.map((elem, idx) => {
      return (
        <a href={elem.url} target="__blank">
          <div key={idx}>
            <div className="h-40 w-44 bg-white rounded overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              ></img>
            </div>
            <h1 className="fobt-bold text-lg">{elem.author}</h1>
          </div>
        </a>
      );
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto p-3 text-white flex justify-between 
    flex-col">
      <div className="text-white flex gap-3 flex-wrap">{printuserdata}</div>

      <div className= "flex justify-center items-center">
        <button style={{opacity: index==1?0.4:1}}onClick={()=>{
         
          if(index>1){
             setUserdata([])
              setIndex(index-1)}
          
        }

        }
        className="bg-yellow-300 p-2 m-2 rounded active:scale-95 text-black">
          prev
        </button>
        <h3>page {index}</h3>
        <button onClick={()=>{
          setUserdata([])
          setIndex(index+1)
        }} 
        className="bg-yellow-300 p-2 m-2 rounded active:scale-95 text-black ">
          next
        </button>
      </div>
    </div>
  );
};

export default App;
