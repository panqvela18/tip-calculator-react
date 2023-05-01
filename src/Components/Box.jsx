import React from 'react'
import Result from './Result'

export default function Box({totalBillAmount,totalPerPerson,setBillInput,setPercentage,setpersons}) {
  const finalTotalBillAmount = totalBillAmount === "NaN" || totalBillAmount === "Infinity"
  const finalTotalPerPerson = totalPerPerson === "NaN" || totalPerPerson === "Infinity"



  return (
    <div className='bg-btnColor rounded-15 p-8 mb-8 h-scren'>
        <div className='flex justify-between items-center mb-25'>
        <div>
            <h5 className='text-white font-bold '>Tip Amount</h5>
            <span className='text-labelColor font-bold text-sm'>/ person</span>
        </div>
        <span className='text-reserColor lg:text-5xl'>{finalTotalBillAmount ? "0.00" : totalBillAmount}</span>
    </div>
        <div className='flex justify-between items-center mb-25'>
        <div>
            <h5 className='text-white font-bold'>Total</h5>
            <span className='text-labelColor font-bold text-sm '>/ person</span>
        </div>
        <span className='text-reserColor lg:text-5xl'>{finalTotalPerPerson ? "0.00" : totalPerPerson}</span>
    </div>
        {/* <Result totalBillAmount={totalBillAmount} value="Tip Amount" /> */}
        {/* <Result totalPerPerson={totalPerPerson}  value="Total" /> */}
        <button onClick={()=>{setBillInput("");setPercentage("");setpersons(1)}} className='w-full bg-reserColor h-12 rounded-5 text-btnColor font-bold text-xl lg:mt-122 hover:bg-activeResetColor' >RESET</button>
    </div>
  )
}
