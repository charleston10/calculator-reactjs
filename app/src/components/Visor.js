import React from "react";

class Visor extends React.Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}

export default Visor