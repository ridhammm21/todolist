"use client"
import React, { useState } from "react";

const page = () => {

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  
  const [mainTask,setMainTask] = useState([])

  let renderTask = <h2>No Task Avaiable</h2>

  const submitHandler  = (e) => {
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  if(mainTask.length>0)
  {
    renderTask = mainTask.map((t,i) => {
      return(
        <li key={i} className="flex items-center justify-between mb-5 align-middle">
          <div className="flex justify-between mb-5 w-2/3 items-center align-middle">
            <h5 className="text-2xl font-bold">{t.title}</h5>
            <h5 className="text-xl font-normal">{t.desc}</h5>
          </div>
          <button onClick={()=>{deleteHandler(i)}} className="bg-red-400 text-white px-4 py-2 rounded-3xl font-bold">Delete</button>
        </li>
      );
    });
  }
  
  
  
  return(
    <>
    <h1 className="text-5xl bg-gray-900 text-white p-7 font-bold text-center">To Do List</h1>
    <form onSubmit={submitHandler} className="p-10 flex justify-between">
      <div  className="">
      <input 
        type="text" 
        placeholder="Enter Title here..." 
        value={title} 
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        className="text-2xl border-zinc-700 border-4 m-5 px-5 py-3 rounded-3xl">
      </input>
      <input 
        type="text" 
        placeholder="Enter Description here..." 
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        className="text-2xl border-zinc-700 border-4 m-5 px-5 py-3 rounded-3xl">
      </input>
      </div>
      <div>
      <button className="bg-gray-800 text-white text-3xl px-5 py-3 font-bold rounded-3xl m-7">Add Task</button>
      </div>
    </form>
    <hr/>
    <div className="p-10 bg-gray-800">
        <ul className="text-white align-middle text-center">
          {renderTask}
        </ul>
    </div>
    </>
  )
}

export default page