import React from "react";
import { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    settask(copyTask);

    console.log(title);
    console.log(details);
    setTitle("");
    setDetails("");
  };
  const deleteFunction = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  };
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, settask] = useState([]);
  return (
    <div className="min-h-screen lg:flex bg-black ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 gap-4 flex-col items-start  p-10"
      >
        <h1 className="text-white text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter notes Heading"
          className="px-5 py-2 w-full font-medium border-2 rounded bg-gray-300"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter details"
          className="px-5 py-2 w-full  font-medium h-32 border-2 rounded bg-gray-300"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="text-black active:bg-green-500 active:scale-98 font-medium bg-green-400 w-full px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div
        className=" p-10 lg:border-l-2 lg:border-white
 lg:w-1/2 "
      >
        <h1 className=" text-3xl text-white  font-bold">Your Notes</h1>
        <div className="flex gap-3 flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-68 w-58 bg-cover flex items-start justify-between flex-col rounded-xl bg-[url('https://imgs.search.brave.com/pCoCe5YPIJki9c8Eu94uAF4g55o-BawHsAQTImhJCok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3MS9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')] pt-9 pb-5 py-8 px-4 "
              >
                <div>
                  <h3 className="p-1 leading-tight text-xl font-bold break-words">
                    {elem.title}
                  </h3>
                  <p className="mt-2 p-1 leading-tight font-medium text-gray-700 break-words max-h-30 overflow-y-auto ">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteFunction(idx);
                  }}
                  className="w-full py-1 cursor-pointer active:scale-95 tet-xs bg-red-600 rounded active:bg-red-500 font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
