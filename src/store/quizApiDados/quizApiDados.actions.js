
export default function recebeDados(valor) {
    return {
        type: "API_DADOS_REQUEST",
        payload: {
            valor
        }
    }
}

