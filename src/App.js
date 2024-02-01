import { React, useState } from "react";
import Button from "./components/Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [stepVal, setStepVal] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    setStepVal((s) => (s > 1 ? s - 1 : 1));
  };
  const handleNext = () => {
    setStepVal((s) => (s >= 3 ? 3 : s + 1));
  };

  const handleClose = () => {
    setIsOpen((s) => !s);
  };

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
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
            <Button
              bgColor="#7950F2"
              textColor="#FFFFFF"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950F2" textColor="#FFFFFF" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
