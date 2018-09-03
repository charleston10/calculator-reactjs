import React from "react";
import Button from '../button/Button'

class Pannel extends React.Component {
    handleClick = (value) => {
        this.props.onClick(value)
    }

    render() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const operators = [
            { value: "+", type: "sum", color: "gray" },
            { value: "-", type: "subtract", color: "gray" },
            { value: "x", type: "multiply", color: "gray" },
            { value: "/", type: "divide", color: "gray" },
            { value: "=", type: "result", color: "green" }
        ]

        const buttonsNumbers = numbers.map((number) =>
            <Button text={number} onClick={this.handleClick} number={this.number} />
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