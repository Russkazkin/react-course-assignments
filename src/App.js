import 'bootstrap/scss/bootstrap.scss';
import './App.sass';
import React, {useState} from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";
import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";


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
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-floating mb-3">
                                <input type="text"
                                       className={"form-control " + (inputLength < 5 ? 'is-invalid' : 'is-valid')}
                                       id="floatingInput"
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
        </div>
    );
}

export default App;
