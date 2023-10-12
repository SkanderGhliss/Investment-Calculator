import Header from "./Components/Header/Header.js";
import Form from './Components/Form/Form';
import Result from './Components/Result/Result';
import { useState } from "react";
function App() {

  const [userInput,setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

    const yearlyData = []; // per-year results

if(userInput){

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <Form />
      <Result onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}


    </div>
  );
}

export default App;
