
import React, { Component } from 'react';
import { sortedArray } from '../Logics/SortedArray';



export class Question2 extends Component {
    constructor(props) {
        super(props)
        this.state = {

            Input1: '',
           Input2: '',
            finalAnswer: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    //INPUT 2
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({ ...this.state, [name]: target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const ans2 = sortedArray(this.state.Input1, this.state.Input2);
        this.setState({ Input1: '', Input2: "", finalAnswer: ans2 });
    }



    render() {
        const answer = this.state.finalAnswer ? (
            <div>
                <h1>{this.state.finalAnswer}</h1>
            </div>
        ) : null;
        return (
            <div>
                <h4> Given two sorted lowercase character arrays, combine them into a single sorted array in the sorted
                      order
                </h4>
                <h3>Sample Input:
                    arr1 = "bcfg" <br />
                    arr2 = "adehi"
                </h3>
                <h3>Sample Output:
                   "abcdefghi"
                </h3>
                <form style={{padding: "2px 0px 7px "}}  onSubmit={this.handleSubmit}>
                    <div style={{padding: "2px 0px 7px ", marginLeft:"7px"}} >
                        <input style={{marginRight:"7px"}}
                            type='text'
                            placeholder="input1"
                            name="Input1"
                            value={this.state.Input1}
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            placeholder="input2"
                            name="Input2"
                            value={this.state.Input2}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button style={{marginLeft:"7px"}}>Submit</button>
                </form>
                {answer}

            </div>
        )

    }
}

export default Question2
