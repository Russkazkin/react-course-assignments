import 'bootstrap/scss/bootstrap.scss';
import './App.sass';
import React, {useState} from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";


function App() {
    const [usernames, setUsernames] = useState(['Ruslan', 'Sergey']);
    const showSurnames = () => setUsernames(['Skazkopodatelev', 'Vechersky']);
    const changeMyName = (newName) => setUsernames([newName, 'Sergey']);
    return (
        <div className="App container">
            <div className="row">
                <UserInput changeName={changeMyName}/>
                <UserOutput username={usernames[0]}/>
                <UserOutput username={usernames[1]}/>
                <button onClick={showSurnames} className="btn btn-success btn-sm mt-5">Show Surnames</button>
            </div>
        </div>
    );
}

export default App;
