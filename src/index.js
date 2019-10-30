import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

// COMPONENTS
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3compress from './components/Question3compress';
import Question3deCompress from './components/Ouestion3deCompress';
import Question4 from './components/Question4';


const App = () => {
    return (

        <BrowserRouter>
            <div style={{
                textAlign: "center",
                background: "gray"
            }}>
                    <header>
                        
                        <h1>Single page React Project</h1>

                        <div style={{ padding: "2px 50px 7px " }}>
                            <NavLink
                                to="/question1"
                               
                            ><button style={{color:"white", backgroundColor:"blue"}}>Question 1 Extract</button></NavLink>
                        </div>

                        <div style={{ padding: "2px 50px 7px " }}>
                            <NavLink to={{
                                pathname: '/question2'
                            }}><button style={{color:"white", backgroundColor:"blue"}}>Question 2 Sorted Array</button></NavLink>
                        </div>

                        <div style={{ padding: "2px 50px 7px " }}>
                            <NavLink  to={{
                                pathname: '/question3compress'
                            }}><button style={{color:"white", backgroundColor:"blue"}}>Question 3 Compress</button></NavLink>
                        </div>
                        <div style={{ padding: "2px 50px 7px " }}>
                            <NavLink to={{
                                pathname: '/question3deCompress'
                            }}><button style={{color:"white", backgroundColor:"blue"}}>Question 3 Decompress</button></NavLink>
                        </div>

                        <div style={{ padding: "2px 50px 7px " }}>
                            <NavLink to={{
                                pathname: '/question4'
                            }}><button style={{color:"white", backgroundColor:"blue"}}>Question 4 Stacks</button></NavLink>
                        </div>
                    </header>
                    <hr/>

                <Switch>
                    <Route path="/question1" component={Question1} />
                    <Route path="/question2" component={Question2} />
                    <Route path="/question3compress" component={Question3compress} />
                    <Route path="/question3deCompress" component={Question3deCompress} />
                    <Route path="/question4" component={Question4} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)