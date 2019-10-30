
import React, { Component } from 'react';
import { IncreaseDecrease } from '../Logics/Extract';


export class Question1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstInput: '',
            finalAnswer: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    //Handle field change INPUT 1

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({ ...this.state, [name]: target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const ans = IncreaseDecrease(this.state.firstInput);
        this.setState({ firstInput: '', finalAnswer: ans });
    }

    render() {
        const answer = this.state.finalAnswer ? (
            <div>
                <h1>{this.state.finalAnswer}</h1>
            </div>
        ) : null;
        return (

            <div>
                <h4> Extract number from the given input string. If you encounter A, increase the next number by 1. If you
                    encounter B, decrease the next number by 1.
                </h4>
                <h3>Sample Input:
                2A53B24
                </h3>
                <h3>Sample Output:
               26314</h3>

                <form style={{padding: "2px 0px 7px "}} onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder="input"
                        name="firstInput"
                        value={this.state.firstInput}
                        onChange={this.handleChange}
                    />
                    <button style={{marginLeft:"7px"}}>Submit</button>
                </form>
                {answer}
            </div>


        )

    }
}

export default Question1
