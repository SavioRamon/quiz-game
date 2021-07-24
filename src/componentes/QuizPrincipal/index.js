import React from "react";
import "./style.css";

import { useSelector } from "react-redux";

function QuizPrincipal(){

    const quizInfo = useSelector(state=>state.quizInformacoes);
    console.log(quizInfo);
    return (
        <React.Fragment>
            <div className="quiz-principal-conteudo">

            </div>

            <div className="quiz-principal-imagem" style={{backgroundImage: `url(${quizInfo.image})`}}>
                
            </div>

        </React.Fragment>
    )
}

export default QuizPrincipal;