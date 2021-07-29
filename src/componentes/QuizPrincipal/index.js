import React, { useState, useEffect } from "react";
import "./style.css";

import { useSelector } from "react-redux";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function QuizPrincipal(){

    const quizInfo = useSelector(state=>state.quizInformacoes);
    const [pontuacao, setPontuacao] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(0);

    const [start, setStart] = useState(false);
    const [fimDeJogo, setFimDeJogo] = useState(false);

    const responde = (resposta)=>{

        if(resposta === quizInfo.item.results[paginaAtual].correct_answer){
            setPontuacao(pontuacao + 1);
        }

        if(paginaAtual < quizInfo.item.results.length - 1) {
            setPaginaAtual(paginaAtual + 1);
        } else {
            setStart(false);
            setFimDeJogo(true);
        }
    }

    const retornaRespostas = ()=>{
        const totalRespostas = quizInfo.item.results[paginaAtual].incorrect_answers.slice();
        totalRespostas.push(quizInfo.item.results[paginaAtual].correct_answer);

        return totalRespostas.sort();
        
    }

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

                start?
                    <div className="quiz-iniciado">
                        <p className="quiz-pergunta">{quizInfo.item.results[paginaAtual].question}</p> 
                        <div className="quiz-area-resposta">
                            
                            {retornaRespostas().map((resposta, key)=>{
                                return <div className="quiz-resposta" key={key} onClick={()=>{
                                    responde(resposta);
                                }}>{resposta}</div>

                            })}

                        </div>
                    </div>
                    
                    :

                    !fimDeJogo?

                        <div className="start" onClick={()=>setStart(true)}>
                            <PlayArrowIcon style={{fontSize: "100px"}}/>
                        </div>
                        :
                        <div className="fim-de-jogo">
                            <p className="mensagem-fim">Game over</p>
                            <div className="pontuacao">hits: {pontuacao}</div>
                            <div className="botao-reinicia">reinicia</div>
                        </div>
            }


            
        </div>
    )
}

export default QuizPrincipal;

