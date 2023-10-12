import "./Form.css";
import { useState } from "react";


const initialUserInput = {
    "current-savings": 1000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    "duration": 10
};

const Form = (props) => {
    const [UserInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Submit");
        props.onCalculate(UserInput);
    };

    const resetHandler = () => {
        console.log("reset");
        setUserInput(initialUserInput);
    };



    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput, //copy the last value
                [input]: +value, //Parse the value by its id  and the "+" converts the string value to a number
            };
        });
        console.log(input, value);
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler("current-savings", event.target.value)}
                        value={UserInput["current-savings"]}
                        type="number"
                        id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) => inputChangeHandler("yearly-contribution", event.target.value)}
                        value={UserInput["yearly-contribution"]}
                        type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) => inputChangeHandler("expected-return", event.target.value)}
                        value={UserInput["expected-return"]}
                        type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) => inputChangeHandler("duration", event.target.value)}
                        value={UserInput["duration"]}
                        type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};
export default Form;