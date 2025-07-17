import React from 'react'

interface ItextArea{
    handelChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    name: string
}

function Textarea({handelChange, name}: ItextArea) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
        <textarea id={name} className="border-2 h-35" onChange={handelChange}></textarea>
    </>
  )
}

export default Textarea
