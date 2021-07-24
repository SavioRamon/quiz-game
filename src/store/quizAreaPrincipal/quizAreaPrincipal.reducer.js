import tela_inicial from "../../imagens/tela_inicial.jpg";


const stateInicial = {
    image: tela_inicial
}

export default function reducerInformacoes(state=stateInicial, action){

    switch(action.type){
        case "informacoes":
            return action.payload;
        default:
            return stateInicial;
    }

}
