import React from "react";

const UserOutput = ({username}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        User Output
                    </h5>
                    <p>Cras id dui. Phasellus gravida semper nisi. Praesent venenatis metus at tortor pulvinar varius.</p>
                    <p>In ut quam vitae odio lacinia tincidunt. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Vestibulum volutpat pretium libero.</p>
                    <p>Username: {username}</p>
                </div>
            </div>
        </div>
    );
}

export default UserOutput;