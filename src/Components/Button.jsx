import React from 'react'

export default function Button({value,setPercentage,percentage}) {
  return (
    <button onClick={()=>setPercentage(value)} className={`w-31 h-12 bg-btnColor text-white font-bold text-2xl rounded-5 hover:bg-activeResetColor hover:text-btnColor  ${percentage === value ?  "focus:bg-reserColor focus:text-btnColor" : ""}  focus:bg-reserColor focus:text-btnColor`}>{value*100}%</button>
  )
}
