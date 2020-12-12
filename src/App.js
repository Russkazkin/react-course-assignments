import 'bootstrap/scss/bootstrap.scss';
import './App.sass';
import React, {useState} from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";


function App() {
    const [usernames, setUsernames] = useState(['Ruslan', 'Sergey']);
    const [textInput, setTextInput] = useState(['Here will be your text']);
    const showSurnames = () => setUsernames(['Skazkopodatelev', 'Vechersky']);
    const changeMyName = (newName) => setUsernames([newName, 'Sergey']);
    const changeInput = (inputText) => setTextInput(inputText);
    return (
        <div className="App container">
            <h3 className="mb-3">Assignment 1</h3>
            <div className="row mb-5">
                <UserInput changeName={changeMyName} usernames={usernames}/>
                <UserOutput username={usernames[0]}/>
                <UserOutput username={usernames[1]}/>
                <button onClick={showSurnames} className="btn btn-success btn-sm mt-5">Show Surnames</button>
            </div>
            <h3 className="mb-3">Assignment 2</h3>
            <div className="row">
                <div className="col"><div className="card">
                    <div className="card-body">
                        <div className="form-floating mb-3">
                            <input type="text"
                                   className="form-control"
                                   id="floatingInput"
                                   onChange={(event) => changeInput(event.target.value)}
                                   placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Start to type</label>
                        </div>
                    </div>
                </div></div>
                <div className="col"><div className="card">
                    <div className="card-body">
                        {textInput}
                    </div>
                </div></div>
            </div>
        </div>
    );
}

export default App;
