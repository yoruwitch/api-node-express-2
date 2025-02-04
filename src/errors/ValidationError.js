import IncorrectRequest from "./IncorrectRequest.js";

class ValidationError extends IncorrectRequest {
    constructor(erro) {
        /*
        Esse método vai nos retornar um array com os valores de cada propriedade do objeto. 
        */
        const mensagensErro = Object.values(erro.errors)
            .map((erro) => erro.message)
            .join(";");

        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
}

export default ValidationError;
