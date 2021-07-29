import React, { useState, useEffect } from "react";
import "./style.css";

import { useSelector } from "react-redux";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function QuizPrincipal(){

    const quizInfo = useSelector(state=>state.quizInformacoes);
    const [pontuacao, setPontuacao] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(0);
    
    const [respostasPagina, setRespostasPagina] = useState([]);

    const [start, setStart] = useState(false);


    const responde = ()=>{
        setPaginaAtual(paginaAtual + 1);
        carregaRespostas();
    }

    const carregaRespostas = ()=>{

        if(start){
            const totalRespostas = quizInfo.item.results[paginaAtual].incorrect_answers.slice();
            totalRespostas.push(quizInfo.item.results[paginaAtual].correct_answer);

            setRespostasPagina(totalRespostas.sort());
        }
        
    }

    useEffect(()=>{
        carregaRespostas();
    }, [start])

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
                            {respostasPagina.map((resposta, key)=>{
                                console.log(respostasPagina)
                                return <div className="quiz-resposta" key={key} onClick={()=>{
                                    responde();
                                }}>{resposta}</div>

                            })}
                        </div>
                    </div>
                    
                    :

                    <div className="start" onClick={()=>setStart(true)}>
                        <PlayArrowIcon style={{fontSize: "100px"}}/>
                    </div>
            }


            
        </div>
    )
}

export default QuizPrincipal;

