import joi from "joi";

const novoCadastro = joi.object({
    doc: joi.string().required(),
    contato: joi.string().required(),
    nomeFantasia: joi.string().required(),
    telefoneContato: joi.number().required(),
    razaoSocial: joi.string().required(),
    emailContato: joi.string().uri().required(),
    endereco: joi.string().required(),
    bairro: joi.string().required(),
    cidade: joi.string().required(),
    uf: joi.string().required(),
    cep: joi.string().required()
})

export {
    novoCadastro
}