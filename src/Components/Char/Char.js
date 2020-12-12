import React from "react";
import "./Char.sass";

const Char = ({char, click}) => {
    return (
        <div onClick={click} className="Char alert alert-primary d-inline-block">
            {char}
        </div>
    );
}

export default Char;