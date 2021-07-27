import React, { useState, useEffect } from "react";
import "./style.css";

import { useSelector } from "react-redux";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function QuizPrincipal(){

    const quizInfo = useSelector(state=>state.quizInformacoes);
    const [quizAcoes, setQuizAcoes] = useState({
        start: false,
        restart: false
    })

    useEffect(()=>console.log(quizAcoes), [quizAcoes])

    return (

        <div className="quiz-principal-conteudo" style={{backgroundImage: `url(${quizInfo.image})`}}>
            
            { quizInfo.estado === "inicial"?
            
                <div className="info-inicial">
                    <h1>{quizInfo.titulo}</h1>
                    <p>{quizInfo.texto}</p>
                </div>

                :

                quizAcoes.start?
                    <div className="quiz-iniciado">
                        <h1 className="quiz-titulo">{quizInfo.title}</h1>
                    </div>

                    :
                    
                    <div className="start" onClick={()=>setQuizAcoes({...quizAcoes, start: true})}>
                        <PlayArrowIcon style={{fontSize: "100px"}}/>
                    </div>
            }


            
        </div>
    )
}

export default QuizPrincipal;

