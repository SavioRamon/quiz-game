import tela_inicial from "../../imagens/tela_inicial.jpg";


const stateInicial = {
    estado: "inicial",
    titulo: "test your knowledge!",
    texto: "It's simple, just select a quiz, press start and you're done! The quiz will begin.",
    image: tela_inicial
}

export default function reducerInformacoes(state=stateInicial, action){

    switch(action.type){
        case "informacoes":
            return action.payload;
        default:
            return state;
    }

}
