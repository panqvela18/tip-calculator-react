import logo from "./assets/logo.svg";
import dollar from "./assets/icon-dollar.svg";
import person from "./assets/icon-person.svg";
import Button from "./Components/Button";
import Box from "./Components/Box";
import { useEffect, useState } from "react";

function App() {
  const [billInput, setBillInput] = useState(undefined);
  const [persons, setpersons] = useState(1);
  const [percentage, setPercentage] = useState(undefined);
  const [peopleError,setPeopleError]=useState(false)

  const check = billInput !==undefined && persons !== undefined && percentage !== undefined

  const totalBillAmount = check && ((billInput * percentage) /persons).toFixed(2)
  const totalPerPerson = check && ((billInput * (1+percentage)) / persons).toFixed(2)
  


  useEffect(()=>{
    if(persons == 0){
      setPeopleError(true)
    }else{
      setPeopleError(false)
    }
  },[persons])



  const handleBillChange = (e) => {
    setBillInput(e.target.value);
  };
  const handlepersonChange = (e) => {
    setpersons(e.target.value);
  };

  return (
    <>
      <div className="w-screen h-screen bg-bgColor flex  flex-col overflow-x-hidden item-center lg:justify-center lg:items-center">
        <div className="my-10 flex items-center justify-center">
          <img src={logo} alt="logo" />
        </div>

        <div className="bg-white rounded-t-25 px-8 lg:flex lg:items-baseline lg:justify-between lg:w-1/2 lg:rounded-25 lg:p-8">
          <div className="lg:h-1/2 lg:w-1/2 lg:mr-12">
            <div className="flex flex-col relative pt-8 mb-8">
              <label className="text-labelColor font-bold">Bill</label>
              <input
                onChange={handleBillChange}
                value={billInput}
                className="bg-inputColor w-full flex text-right pr-2 h-48 rounded-5 outline-none text-btnColor font-bold text-6 "
                type="number"
                placeholder="0"
              />
              <img
                className="absolute top-70 left-2"
                src={dollar}
                alt="dollar-icon"
              />
            </div>{" "}
            <h4 className="font-bold text-labelColor mb-4">Select Tip %</h4>
            <div className="flex flex-wrap gap-2 w-full">
              <Button setPercentage={setPercentage} percentage={percentage} value={0.05} />
              <Button setPercentage={setPercentage} percentage={percentage} value={0.1} />
              <Button setPercentage={setPercentage} percentage={percentage} value={0.15} />
              <Button setPercentage={setPercentage} percentage={percentage} value={0.25} />
              <Button setPercentage={setPercentage} percentage={percentage} value={0.5} />
              <input
                onChange={(e) => {
                  setPercentage(e.target.value /100)
                }}
                value={percentage && percentage * 100}
                className="w-31 bg-inputColor text-right pr-4 font-bold text-xl rounded-5 outline-none cursor-pointer hover:border-2 border-reserColor"
                type="number"
                min={1}
                max={100}
                placeholder="Custom"
              />
            </div>
            <div className="flex flex-col relative pt-8 mb-8">
              <div className="flex justify-between items-center">

              <label className="text-labelColor font-bold">
                Number of People
              </label>
             {peopleError && <span className="font-bold text-errorColor">Can’t be zero</span>
}               </div>
              <input
              onChange={handlepersonChange}
              value={persons}
                className={`${peopleError ? "border-errorColor border-solid border" : "border-none"} bg-inputColor w-full flex text-right pr-2 h-48 rounded-5 outline-none  text-btnColor font-bold text-6`}
                type="number"
                placeholder="0"
              />
              <img
                className="absolute top-70 left-2"
                src={person}
                alt="person-icon"
              />
              
            </div>{" "}
            
          </div>
          <div className="lg:w-1/2">
            <Box setBillInput={setBillInput} setPercentage={setPercentage} setpersons={setpersons} totalBillAmount={totalBillAmount} totalPerPerson={totalPerPerson} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
