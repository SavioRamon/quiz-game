import React from "react";
import "./style.css";

import { useSelector } from "react-redux";

function QuizPrincipal(){

    const quizInfo = useSelector(state=>state.quizInformacoes);
    console.log(quizInfo);
    
    return (

        <div className="quiz-principal-conteudo" style={{backgroundImage: `url(${quizInfo.image})`}}>
            { quizInfo.estado === "inicial" ?
                
                <div className="info-inicial">
                    <h1>{quizInfo.titulo}</h1>
                    <p>{quizInfo.texto}</p>
                </div>

                :

                <div className="quiz-iniciado">
                    

                </div>
            }

            
        </div>
    )
}

export default QuizPrincipal;

