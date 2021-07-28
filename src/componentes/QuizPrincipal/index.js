import React, { useState, useEffect } from "react";
import "./style.css";

import { useSelector } from "react-redux";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function QuizPrincipal(){

    const quizInfo = useSelector(state=>state.quizInformacoes);
    const [infoAdicionais, setInfoAdicionais] = useState({
        pontuacao: 0,
        paginaAtual: 0
    })

    const [quizAcoes, setQuizAcoes] = useState({
        start: false,
        restart: false,
        responde(){
            setInfoAdicionais({
                ...infoAdicionais, 
                paginaAtual: infoAdicionais.paginaAtual + 1
            })
        }
    })

    return (

        <div className="quiz-principal-conteudo" style={{backgroundImage: `url(${quizInfo.image})`}}>
            <div className="efeito-escuro"></div>
            
            {quizInfo.estado != "inicial" && 
                <h1 className="quiz-titulo">{quizInfo.title}</h1>
            }

            { quizInfo.estado === "inicial"?
            
                <div className="info-inicial">
                    <h1>{quizInfo.titulo}</h1>
                    <p>{quizInfo.texto}</p>
                </div>

                :

                quizAcoes.start?
                    <div className="quiz-iniciado">
                        <p className="quiz-pergunta">{quizInfo.item.results[infoAdicionais.paginaAtual].question}</p>
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

