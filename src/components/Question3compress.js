
import React, { Component } from 'react';
import { Compress } from '../Logics/compress';


export class Question3 extends Component {
    constructor(props) {
        super(props)
        this.state = {

            thirdInput: '',
            finalAnswer: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    //Handle field change INPUT 3

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({ ...this.state, [name]: target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const ans = Compress(this.state.thirdInput);
        this.setState({ thirdInput: '' , finalAnswer: ans });
    }

    render() {
        const answer = this.state.finalAnswer ? (
            <div>
                <h1>{this.state.finalAnswer}</h1>
            </div>
        ) : null;
        return (
            <div>
                <h4> Write a program to compress the given string: aaaaRRRggggHH -> a4R3g4H2, and decompress the
                     compressed string back to the original string. Have menu for compress and decompress</h4>
                <h3>TEST CASE 1:
                    Sample Input (Compress):
                    aaaaRRRggggHH
                </h3>
                <h3>SSample Output:
                      Compressed String: a4R3g4H2
                </h3>
                <form style={{padding: "2px 0px 7px "}} onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder="input"
                        name="thirdInput"
                        value={this.state.thirdInput}
                        onChange={this.handleChange}
                    />
                    <button style={{marginLeft:"7px"}}>Submit</button>
                </form>
                {answer}

            </div>
        )

    }
}

export default Question3
