import React from "react";

class Button extends React.Component {

    handleClick = () => {
        this.props.onClick(this.props.text)
    };

    render() {
        return <input type="button" value={this.props.text} onClick={this.handleClick} />
    }
}

export default Button