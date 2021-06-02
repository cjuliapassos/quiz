import React, {useEffect, useState} from 'react';

const End = ({results, data, onReset, onAnswersCheck, time}) => {
const [correctAnswers, setCorrectAnswers] = useState(0);

useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
        if(result.a === data[index].answer){
            correct++;
        }
    });
    setCorrectAnswers(correct);
}, [])

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3>Seu resultado</h3>
                    <p>{correctAnswers} de {data.length}</p>
                    <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
                    
                    <button className="button is-info mr-2" onClick={onAnswersCheck}>Ver suas respostas</button>

                </div>
            </div>
        </div>
    )
}

export default End;