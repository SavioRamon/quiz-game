import React from "react";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import { informacoes } from "../../store/quizAreaPrincipal/quizAreaPrincipal.actions";

function QuizesArea(){

    const quizesApi = useSelector(state=>state.reducerApi);
    const dispatch = useDispatch();

    function topoDaPagina(){
        window.scroll(0, 0);
    }

    return (
        <div className="quizes-selecao">
            {Array.isArray(quizesApi) &&
                quizesApi.map((quiz, key)=>{
                    return(
                        <div className="quiz-unidade" 
                          style={{backgroundImage: `url(${quiz.image})`}} 
                          key={key}
                          onClick={()=>{
                            dispatch(informacoes(quiz))
                            topoDaPagina();
                          }}
                        >
                            
                            <h1>{quiz.title}</h1>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuizesArea;