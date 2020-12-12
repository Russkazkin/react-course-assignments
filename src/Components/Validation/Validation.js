import React from "react";

const Validation = ({inputLength}) => {
    const valid = (
        <div className="valid-feedback">
            Looks good!
        </div>
    );
    const invalid = (
        <div className="invalid-feedback">
            Too short!
        </div>
    );
    return inputLength < 5 ? invalid : valid;
}

export default Validation;