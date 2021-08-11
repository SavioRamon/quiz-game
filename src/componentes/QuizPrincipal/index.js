import React, { useState, useEffect } from "react";
import "./style.css";

import { useSelector } from "react-redux";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RefreshIcon from '@material-ui/icons/Refresh';

function QuizPrincipal(){

    const quizInfo = useSelector(state=>state.quizInformacoes);
    const [pontuacao, setPontuacao] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(0);

    const [start, setStart] = useState(false);
    const [fimDeJogo, setFimDeJogo] = useState(false);

    const responde = (resposta)=>{

        if(resposta === quizInfo.item.results[paginaAtual].correct_answer){
            // Caso o jogador acerte, ganha 1 ponto
            setPontuacao(pontuacao + 1);
        }

        if(paginaAtual < quizInfo.item.results.length - 1) {
            // Caso ainda tenha questões, o quiz irá continuar.
            // Caso contrário, a tela de fim de jogo aparece
            setPaginaAtual(paginaAtual + 1);
        } else {

            setStart(false);
            setFimDeJogo(true);
        }
    }

    const retornaRespostas = ()=>{
        //Essa função irá retornar um array com as respostas da questão
        const totalRespostas = quizInfo.item.results[paginaAtual].incorrect_answers.slice();
        totalRespostas.push(quizInfo.item.results[paginaAtual].correct_answer);

        return totalRespostas.sort();
        
    }

    function limpaDados(){
        // limpa todos os dados para que o quiz seja iniciado ou reiniciado

        setStart(false);
        setFimDeJogo(false);
        setPontuacao(0);
        setPaginaAtual(0);
    }

    function decodificarHTML(html) {
        //Essa função irá decodificar os caracteres especiais e retornar uma textarea

        const texto = document.createElement("textarea");
        texto.innerHTML = html;
        return texto.value;
    }

    useEffect(()=>{
        limpaDados(); 
    }, [quizInfo])

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
                        <p className="quiz-pergunta">{decodificarHTML(quizInfo.item.results[paginaAtual].question)}</p> 
                        <div className="quiz-area-resposta">
                            
                            {retornaRespostas().map((resposta, key)=>{
                                return <div className="quiz-resposta" key={key} onClick={()=>{
                                    responde(resposta);
                                }}>{decodificarHTML(resposta)}</div>

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

                            <div className="botao-reinicia" onClick={()=>limpaDados()}>
                                restart <RefreshIcon style={{marginBottom: "-10px", fontSize: 40}}/>
                            </div>

                        </div>
            }


            
        </div>
    )
}

export default QuizPrincipal;

