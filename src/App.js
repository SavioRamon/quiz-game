import React, { useEffect } from "react";
import './App.css';

import QuizesArea from "./componentes/QuizesArea";

import recebeDados from "./store/quizApiDados/quizApiDados.actions";
import { useDispatch } from "react-redux";

function App() {

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(recebeDados());
	}, [])

  	return (
 		<div className="App">
			 <header className="cabecalho">
				 <h1 className="cabecalho-titulo">Quiz Game</h1>
				 
			 </header>

			<QuizesArea />

    	</div>
  	);
}

export default App;
