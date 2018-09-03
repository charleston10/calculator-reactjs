import React from "react";
import Button from '../button/Button'

class Pannel extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const operators = [
            { operator: 0, value: "+", type: "sum" },
            { operator: 1, value: "-", type: "subtract" },
            { operator: 2, value: "x", type: "multiply" },
            { operator: 3, value: "/", type: "divide" }
        ]

        const buttonsNumbers = numbers.map((number) =>
            <Button text={number} />
        );

        const buttonsOperators = operators.map((object) =>
            <Button text={object.value} />
        );

        return (
            <div>
                {buttonsNumbers}
                <br />
                {buttonsOperators}
            </div>
        );
    }
}

export default Pannel