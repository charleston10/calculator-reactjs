import React from "react";

class Button extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault()

        this.setState(prevState => ({
            numberClicked: this.props.text
        }));

        console.log("clicado: " + this.props.text)
    }

    render() {
        return <input type="button" value={this.props.text} onClick={this.handleClick} />
    }
}

export default Button