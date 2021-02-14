import 'bootstrap/scss/bootstrap.scss';
import './App.sass';
import React, {useState} from "react";
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom"
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";
import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";
import Users from "./containers/Users/Users";
import Courses from "./containers/Courses/Courses";

function App() {
    const [usernames, setUsernames] = useState(['Ruslan', 'Sergey']);
    const [textInput, setTextInput] = useState('CHARS');
    const [inputLength, setInputLength] = useState(0);
    const showSurnames = () => setUsernames(['Skazkopodatelev', 'Vechersky']);
    const changeMyName = (newName) => setUsernames([newName, 'Sergey']);
    const changeInputHandler = (inputText) => setTextInput(inputText);
    const inputLengthHandler = (inputLength) => setInputLength(inputLength);
    const removeCharHandler = (index) => {
        const arr = textInput.split('');
        arr.splice(index, 1);
        setTextInput(arr.join(''));
    };
    const charsArr = textInput.split('');
    return (
        <BrowserRouter>
            <div className="App container">
                <nav className="nav">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-link" exact to="/users">Users</NavLink>
                    <NavLink className="nav-link" exact to="/courses">Courses</NavLink>
                </nav>
                <section>
                    <h3 className="my-3">Assignment 3</h3>
                    <ol style={{textAlign: 'left'}}>
                        <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
                        <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
                        <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
                        <li>Pass the course ID to the "Course" page and output it there</li>
                        <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
                        <li>Load the "Course" component as a nested component of "Courses"</li>
                        <li>Add a 404 error page and render it for any unknown routes</li>
                        <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
                    </ol>
                    <div className="p-5 border mb-5">
                        <Switch>
                            <Redirect from="/all-courses" to="/courses" />
                            <Route exact path="/users" component={Users} />
                            <Route path="/courses" component={Courses} />
                            <Route exact path="/" render={() => <h1>Home</h1>} />
                            <Route render={() => <h1>404 Not found</h1>} />
                        </Switch>
                    </div>
                </section>
                <section>
                    <h3 className="mb-3">Assignment 1</h3>
                    <div className="row mb-5">
                        <UserInput changeName={changeMyName} usernames={usernames}/>
                        <UserOutput username={usernames[0]}/>
                        <UserOutput username={usernames[1]}/>
                        <button onClick={showSurnames} className="btn btn-success btn-sm mt-5">Show Surnames</button>
                    </div>
                </section>
                <section>
                    <h3 className="mb-3">Assignment 2</h3>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                               className={"form-control " + (inputLength < 5 ? 'is-invalid' : 'is-valid')}
                                               id="floatingInput"
                                               value={textInput}
                                               onChange={(event) => {
                                                   changeInputHandler(event.target.value);
                                                   inputLengthHandler(event.target.value.length);
                                               }}
                                               placeholder="name@example.com"/>
                                        <label htmlFor="floatingInput">Start to type</label>
                                        <Validation inputLength={inputLength}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body d-flex justify-content-center">
                                    {charsArr.map((char, index) => <Char
                                        char={char}
                                        click={() => removeCharHandler(index)}
                                        key={index}/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
