import React from "react";
import "./style.css";

import { useSelector } from "react-redux";

function QuizesArea(){

    const quizesApi = useSelector(state=>state.reducerApi)
    return (
        <div className="quizes-selecao">
            {Array.isArray(quizesApi) &&
                quizesApi.map((quiz, key)=>{
                    return(
                        <div className="quiz-unidade" style={{backgroundImage: `url(${quiz.image})`}} key={key}>
                            
                            <h1>{quiz.title}</h1>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuizesArea;