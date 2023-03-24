
type Cadastro = {
    id: number,
    doc: string,
    contato: string,
    nomeFantasia: string,
    telefoneContato: number,
    razaoSocial: string,
    emailContato: string,
    endereco: string,
    bairro: string,
    cidade: string,
    uf: string,
    cep: string
}

type NovoCadastro = Omit<Cadastro, 'id'>

export {
    Cadastro,
    NovoCadastro
}