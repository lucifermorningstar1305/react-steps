import { React, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [stepVal, setStepVal] = useState(1);

  const handlePrevious = () => {
    setStepVal(stepVal - 1 < 1 ? 1 : stepVal - 1);
  };
  const handleNext = () => {
    setStepVal(stepVal + 1 > 3 ? 3 : stepVal + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={stepVal >= 1 ? "active" : ""}>1</div>
        <div className={stepVal >= 2 ? "active" : ""}>2</div>
        <div className={stepVal >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {stepVal}: {messages[stepVal - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950F2", color: "#FFFFFF" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950F2", color: "#FFFFFF" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
