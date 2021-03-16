import React, { useState } from 'react';
import "./App.css";
import Button from './Button';

const App = () => {
    const [value, setValue] = useState("0");
    const [clear, setClear] = useState("AC");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleOperators = () => {
        if(operator !== null) {
            if(!operator) {
                return;
            }
            if(operator === "+") {
                setMemory((memory + parseFloat(value)));
            }
            else if(operator === "−") {
                setMemory((memory - parseFloat(value)));
            }
            else if(operator === "×") {                
                setMemory((memory * parseFloat(value)));
            }
            else if(operator === "÷") {
                setMemory((memory / parseFloat(value)));
            }
        }
        else {
            setMemory(parseFloat(value));
        }
    }

    const handleButtonPress = (content) => () => {
        const num = parseFloat(value);

        if(content === "AC" && clear === "AC") {
            setMemory(null);
            setOperator(null);
            return;
        }

        if(content === "C") {
            setValue("0");
            setClear("AC");
            setMemory(null);
            return;
        }

        if(value !== 0) {
            setClear("C");
        }

        if(content === "±") {
            setValue((num * -1).toString());
            return;
        }

        if(content === "%") {
            setValue((num / 100).toString());
            // setMemory(null);
            // setOperator(null);
            return;
        }

        if(content === "+") {
            handleOperators();
            setValue("0");
            setOperator("+");
            return;
        }

        if(content === "−") {
            handleOperators();
            setValue("0");
            setOperator("−");
            return;
        }

        if(content === "×") {
            handleOperators();
            setValue("0");
            setOperator("×");
            return;
        }

        if(content === "÷") {
            handleOperators();
            setValue("0");
            setOperator("÷");
            return;
        }

        if(content === "=") {
            if(!operator) {
                return;
            }
            if(operator === "+") {
                setValue((memory + parseFloat(value)).toString());
            }
            else if(operator === "−") {
                setValue((memory - parseFloat(value)).toString());
            }
            else if(operator === "×") {                
                setValue((memory * parseFloat(value)).toString());
            }
            else if(operator === "÷") {
                setValue((memory / parseFloat(value)).toString());
            }

            setMemory(null);
            setOperator(null);
            return;
        }

        setValue(parseFloat(num + content).toString());
    }

    return (
        <div className="App">
            <div className="top">4:43</div>
            <div className="display">{value}</div>
            <div className="buttons">
                <Button onButtonClick={handleButtonPress} content={clear} type="function"/>
                <Button onButtonClick={handleButtonPress} content="±"  type="function"/>
                <Button onButtonClick={handleButtonPress} content="%"  type="function"/>
                <Button onButtonClick={handleButtonPress} content="÷"  type="operator"/>
                <Button onButtonClick={handleButtonPress} content="7" />
                <Button onButtonClick={handleButtonPress} content="8" />
                <Button onButtonClick={handleButtonPress} content="9" />
                <Button onButtonClick={handleButtonPress} content="×" type="operator"/>
                <Button onButtonClick={handleButtonPress} content="4" />
                <Button onButtonClick={handleButtonPress} content="5" />
                <Button onButtonClick={handleButtonPress} content="6" />
                <Button onButtonClick={handleButtonPress} content="−" type="operator"/>
                <Button onButtonClick={handleButtonPress} content="1" />
                <Button onButtonClick={handleButtonPress} content="2" />
                <Button onButtonClick={handleButtonPress} content="3" />
                <Button onButtonClick={handleButtonPress} content="+" type="operator"/>
                <Button onButtonClick={handleButtonPress} content="0" />
                <Button onButtonClick={handleButtonPress} content="." />
                <Button onButtonClick={handleButtonPress} content="=" type="operator"/>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default App;
