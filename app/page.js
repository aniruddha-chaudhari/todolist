"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [Maintask, setMaintask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMaintask([...Maintask, { title, desc }])
    settitle("")
    setdesc("")
  }
  const deleteHandler = (i) => {
    let copytask = [...Maintask]
    copytask.splice(i, 1)
    setMaintask(copytask)
    
  }
  let rendertask = <h1>No Task Added</h1>

  if (Maintask.length > 0) {
    rendertask = Maintask.map((t, i) => {
      return (<li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex justify-between  w-1/2 items-center'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
        </div>
        <button onClick={() => {
          deleteHandler(i)
        }
        } className='bg-red-400 text-white px-4 py-2 text-2xl font-bold rounded'>
          Delete
        </button>
      </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-6 text-4xl font-bold text-center'>My todo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='border-zinc-500 text-2xl border-2 m-5 px-4 py-2' placeholder='Enter Task Here' value={title}
          onChange={((e) => settitle(e.target.value))}
        >

        </input>
        <input type='text' className='border-zinc-500 text-2xl border-2 m-5 px-4 py-3' placeholder='Enter Description Here'
          value={desc} onChange={((e) => setdesc(e.target.value))}>
        </input>

        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>
          Add Task
        </button>
      </form>
      <div className='p-8 bg-slate-200'>
        <ul>
          {rendertask}
        </ul>
      </div>
    </>
  )
}

export default page