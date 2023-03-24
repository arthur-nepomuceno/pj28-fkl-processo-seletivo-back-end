## <p align = "center">  - FKL - Processo Seletivo - </p>

<p align = "center">
   <img src="https://img.shields.io/badge/autor-Arthur Nepomuceno-093D04?style=flat-square" />
</p>

## Sumário
   - [Apresentação](#apresentação)
   - [Introdução](#introdução)
   - [Conceitos e Tecnologias](#conceitos-e-tecnologias)
   - [Rodando a aplicação](#rodando-a-aplicação)
   - [Rotas](#rotas)

***


## Apresentação
   Este projeto é uma API que permite o cadastro, a visualização, deleção e edição de informações de empresas. 
   
***

## Introdução
   Linguagem: typeScript.
   
   Banco de Dados: postgreSQL.

   Existe somente uma tabela:
   - _cadastros_: tabela de registro para os cadastros feitos no sistema.
   
***

## Conceitos e Tecnologias
    - typeScript
         Linguagem de programação, derivada do JavaScript, utilizada para o desenvolvimento desta API.
    
    - nodeJs
         Plataforma que permite a execução de códigos JavaScript fora dos navegadores da web.
    
    - nodemon
         Ferramenta que permite maior velocidade na renderização do projeto ao longo do seu desenvolvimento.
         
    - express
         Biblioteca de serviços a partir dos quais é possível transformar 
         a máquina local em um servidor para a execução do código.
         
    - cors
         Biblioteca responsável por viabilizar as requisições feitas no endereço de funcionamento desta API.
    
    - dotenv
         Biblioteca responsável por viabilizar o uso das variáveis de ambiente neste projeto.
         
    - postgreSQL
         Banco de dados escolhido para esta aplicação.

###### [voltar para o sumário](#sumário)

***

## Rodando a aplicação

Este projeto foi inicializado com o Node Package Manager, então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Faça o clone desse repositório na sua máquina:

```
git clone https://github.com/arthur-nepomuceno/pj28-fkl-processo-seletivo-back-end.git
```

Dentro da pasta do projeto, rode o seguinte comando para instalar as dependências.

```
npm install
```

Ainda na pasta do projeto, crie um arquivo _.env_ e preencha-o com base nas variáveis do arquivo _.env.example_. Os valores dessas variáveis de ambiente devem ser determinados por você, de acordo com a sua configuração local. Quando estiver preenchido, seu arquivo deve se parecer com algo assim:

```
PORT=5000
DATABASE_URL=postgres://nome-do-meu-usuario-no-postgres:minha-senha-de-acesso:5432/fkl
```

Será necessário criar o banco de dados "fkl" e dentro dele criar a tabela "cadastros". Uma vez que você crie o banco, utilize os seguintes comandos SQL para criar a tabela:

```
CREATE TABLE cadastros (
	id SERIAL PRIMARY KEY,
	doc VARCHAR NOT NULL,
	contato VARCHAR NOT NULL,
	"nomeFantasia" VARCHAR NOT NULL,
	"telefoneContato" VARCHAR NOT NULL,
	"razaoSocial" VARCHAR NOT NULL,
	"emailContato" VARCHAR NOT NULL,
	"endereco" VARCHAR NOT NULL,
	"bairro" VARCHAR NOT NULL,
	"cidade" VARCHAR NOT NULL,
	"uf" VARCHAR NOT NULL,
	"cep" CHAR(8) NOT NULL
)
```

Finalizado o processo, é só inicializar o servidor.

```
npm run dev
```
###### [voltar para o sumário](#sumário)
***

## Rotas

```yml
POST /cadastro
    - Rota para registrar um novo cadastro.
    - headers: {}
    - params: {}
    - query: {}
    - body: {
        "doc": "00000000000",
        "contato": "Fulano de Tal",
        "nomeFantasia": "Fulano Mercearia",
        "telefoneContato": "+552198765432",
        "razaoSocial": "Fulano MERC LTDA",
        "emailContato": "fulano@email.com",
        "endereco": "Estrada Qualquer",
        "bairro": "Parque do Mundo",
        "cidade": "São João do Rio Preto",
        "uf": "PB",
        "cep": "0000000"
    }
    - response: 'Cadastro adicionado com sucesso'
```

```yml
GET /lista-de-cadastros
    - Rota para visualizar os cadastros.
    - headers: {}
    - params: {}
    - query: {}
    - body: {}
    - response: Uma lista com todos os cadastros.
```

```yml
POST /editar
    - Rota para editar um cadastro.
    - headers: {}
    - params: {}
    - query: {}
    - body: {
        "id": 1,
        "doc": "00000000000",
        "contato": "Campo Editado",
        "nomeFantasia": "Campo Editado",
        "telefoneContato": "+552198765432",
        "razaoSocial": "Fulano MERC LTDA",
        "emailContato": "fulano@email.com",
        "endereco": "Campo Editado",
        "bairro": "Campo Editado",
        "cidade": "São João do Rio Preto",
        "uf": "PB",
        "cep": "0000000"
    }
    - response: {
        "id": 1,
        "doc": "00000000000",
        "contato": "Campo Editado",
        "nomeFantasia": "Campo Editado",
        "telefoneContato": "+552198765432",
        "razaoSocial": "Fulano MERC LTDA",
        "emailContato": "fulano@email.com",
        "endereco": "Campo Editado",
        "bairro": "Campo Editado",
        "cidade": "São João do Rio Preto",
        "uf": "PB",
        "cep": "0000000"
    }
```

###### [voltar para o sumário](#sumário)
