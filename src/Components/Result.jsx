import React from 'react'

export default function Result({value,totalBillAmount,totalPerPerson}) {
  console.log(totalBillAmount)
  return (
    <div className='flex justify-between items-center mb-25'>
        <div>
            <h5 className='text-white font-bold'>{value}</h5>
            <span className='text-labelColor font-bold text-sm'>/ person</span>
        </div>
        <span className='text-reserColor'>{value === "Total" ? totalBillAmount : ""}</span>
    </div>
  )
}
