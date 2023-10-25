import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import Style from '../style'

const CustomButton = ({ text, onPress, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity style={[Style.button, backgroundColor]} onPress={() => onPress(text)}>
            <Text style={[Style.buttonText, textColor]}>{text}</Text>
        </TouchableOpacity>
    );
};

const CustomButton2 = ({ text, onPress, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity style={[Style.button2, backgroundColor]} onPress={() => onPress(text)}>
            <Text style={[Style.buttonText, textColor]}>{text}</Text>
        </TouchableOpacity>
    );
};

const CustomButton3 = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={Style.button3} onPress={() => onPress(text)}>
            <Text style={Style.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const CalculatorScreen = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    const handleNumberInput = (num) => {
        if (displayValue === '0' || operator === null) {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorInput = (newOperator) => {
        if (operator !== null) {
            // An operator is already set, so perform the calculation
            handleEqual();
        }

        setOperator(newOperator);
        setFirstValue(displayValue);
        setDisplayValue(displayValue + newOperator);
    };

    const handleEqual = () => {
        if (operator !== null) {
            const num1 = parseFloat(firstValue);
            const num2 = parseFloat(displayValue.slice(firstValue.length + 1));

            let result;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    return;
            }

            setDisplayValue(result.toString());
            setOperator(null);
            setFirstValue('');
        }
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };

    return (
        <View style={Style.container}>
            <View style={Style.bottomView}>
                <Text style={Style.resultText}>{displayValue}</Text>
                <View style={Style.buttonRow}>
                    <CustomButton text="7" onPress={() => handleNumberInput(7)} />
                    <CustomButton text="8" onPress={() => handleNumberInput(8)} />
                    <CustomButton text="9" onPress={() => handleNumberInput(9)} />
                    <CustomButton text="/" onPress={() => handleOperatorInput('/')} textColor={{ color: '#fe9504' }} backgroundColor={{ backgroundColor: '#f0f0f0' }} />
                </View>
                <View style={Style.buttonRow}>
                    <CustomButton text="4" onPress={() => handleNumberInput(4)} />
                    <CustomButton text="5" onPress={() => handleNumberInput(5)} />
                    <CustomButton text="6" onPress={() => handleNumberInput(6)} />
                    <CustomButton text="*" onPress={() => handleOperatorInput('*')} textColor={{ color: '#fe9504' }} backgroundColor={{ backgroundColor: '#f0f0f0' }} />
                </View>
                <View style={Style.buttonRow}>
                    <CustomButton text="1" onPress={() => handleNumberInput(1)} />
                    <CustomButton text="2" onPress={() => handleNumberInput(2)} />
                    <CustomButton text="3" onPress={() => handleNumberInput(3)} />
                    <CustomButton text="-" onPress={() => handleOperatorInput('-')} textColor={{ color: '#fe9504' }} backgroundColor={{ backgroundColor: '#f0f0f0' }} />
                </View>
                <View style={Style.buttonRow}>
                    <CustomButton3 text="0" onPress={() => handleNumberInput(0)} />
                    <CustomButton text="+" onPress={() => handleOperatorInput('+')} textColor={{ color: '#fe9504' }} backgroundColor={{ backgroundColor: '#f0f0f0' }} />
                    <CustomButton text="=" onPress={handleEqual} textColor={{ color: '#ffffff' }} backgroundColor={{ backgroundColor: '#fc9603' }} />
                </View>
                <View style={Style.buttonRow2}>
                    <CustomButton2 onPress={handleClear} text="Clear" backgroundColor={{ backgroundColor: '#f0f0f0' }} />
                </View>
            </View>
        </View>
    );
};

export default CalculatorScreen