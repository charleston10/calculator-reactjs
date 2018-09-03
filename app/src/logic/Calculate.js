class Calculate {
    constructor(state) {
        this.state = state
    }
    sum(value1, value2) {
        return value1 + value2
    }

    result() {
        if (this.state.operator === "sum") {
            return {
                total: this.sum(this.state.total, this.state.value),
                value: this.state.value,
                operator: this.operator
            }
        }
    }
}



export default Calculate