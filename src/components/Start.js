import React from 'react';

const Start = ({ onQuizStart }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Inicie o Quiz</h1>
                    <p>Boa sorte!</p>
                    <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Start;