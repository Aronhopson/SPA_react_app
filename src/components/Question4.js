
import React, { Component } from 'react';
import { checkBalanced } from '../Logics/bracket';

export class Question4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fouthInput: '',
            finalAnswer: '',
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //Handle field change INPUT 4
    
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({ ...this.state, [name]: target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const ans = checkBalanced(this.state.fouthInput);
        this.setState({ fouthInput: '', finalAnswer: ans});
    }


    render() {
        const answer = this.state.finalAnswer ? (
            <div>
                <h1>{this.state.finalAnswer}</h1>
            </div>
        ) : null;
        return (
            <div>
                 <h4> Write a program to check whether the opening and closing brackets are balanced in the given string.</h4>
                <h3>TEST CASE 1:
                   Sample Input:
                     [ ( ) ] [ ( ) ( ) ]
                </h3>
                <h3>Sample Output:
                      Balanced
                </h3>
                <h3>
                TEST CASE 2:
                   Sample Input:
                   [ ( ) ] [ ( ( ) ]
                   <h3> Sample Output:
                    Not Balanced</h3>
                </h3>
                    <form style={{padding: "2px 0px 7px "}}  onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            placeholder="input"
                            name="fouthInput"
                            value={this.state.fouthInput}
                            onChange={this.handleChange}
                        />
                        <button style={{marginLeft:"7px"}}>Submit</button>
                    </form>
                    {answer}
            </div>
        )

    }
}

export default Question4
