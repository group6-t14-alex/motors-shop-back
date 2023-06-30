
<h1>💻 <strong>MOTORSHOP</strong></h1>

<h2>📜 <strong>Descrição do projeto</strong></h2>
A API de Motors Show é um serviço de anúncios de carros em um site, desenvolvida usando NestJS, Prisma e Swagger. A documentação Swagger detalha os endpoints para listar, criar, atualizar e excluir carros anunciados. Ela fornece exemplos, parâmetros e respostas esperadas. A autenticação e autorização também são abordadas. A documentação é uma referência completa para integrar a API de Motors Show em aplicações.
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
<hr/><br>

<h2>⚙️ <strong>Utilizando o projeto</strong></h2>
<h3><strong>▪️ Baixando projeto e instalando dependências</strong></h3>
<p>Faça o fork do repositório, e clone o projeto no seu computador</p>
<p>Utilize o gerenciador de pacotes de sua preferência, usando um dos comandos abaixo</p>

```bash
$ npm install
ou
$ yarn install
ou
$ pnpm install
```

<h3><strong>▪️ Rodando o projeto</strong></h3>
<p>Após instalar todas as dependências, rode o comando padrão de <strong>watch mode</strong> abaixo para iniciar o projeto na porta 3001, mas pode ser configurado na porta que preferir.</p>
<p>Url base local: http://localhost:3000</p>

```bash
# watch mode
$ npm run start:dev

# development
$ npm run start

# production mode
$ npm run start:prod
```
<hr/><br>

<h2>📚 <strong>Bibliotecas utilizadas</strong></h2>

- Bcrypt
- Class Transform
- Node Crypto
- Node Mailer
- Passport
- Prisma
- Swagger
<hr/><br>

<h2>🧭 <strong>Rotas da Aplicação</strong></h2><br>


<h2><strong>/login</strong></h2><br>
<p><strong>Login do usuário</strong></p>

```bash
# POST /login - FORMATO DA REQUISIÇÃO
{
  "email": "string",
  "password": "string"
}

# POST /login - FORMATO DA RESPOSTA - STATUS 201
```
<hr/><br/>

<h2><strong>/user</strong></h2><br>
<p><strong>Cadastrar usuário</strong></p>

```bash
# POST /user - FORMATO DA REQUISIÇÃO
{
  "name": "string",
  "email": "string",
  "cpf": "string",
  "phone": "string",
  "date_of_birth": "string",
  "description": "string",
  "cep": "string",
  "city": "string",
  "state": "string",
  "address": "string",
  "number": "string",
  "complement": "string",
  "type_user": "string",
  "password": "string"
}

# POST /user - FORMATO DA RESPOSTA - STATUS 201
{
  "id": 0,
  "name": "string",
  "email": "string",
  "cpf": "string",
  "phone": "string",
  "date_of_birth": "string",
  "description": "string",
  "cep": "string",
  "number": "string",
  "city": "string",
  "state": "string",
  "address": "string",
  "complement": "string",
  "type_user": "string"
}
```
<br>

<p><strong>Listar usuários</strong></p>

```bash
# GET /user - No body

# GET /user - FORMATO DA RESPOSTA - STATUS 200
[
  {
    "id": 0,
    "name": "string",
    "email": "string",
    "cpf": "string",
    "phone": "string",
    "date_of_birth": "string",
    "description": "string",
    "cep": "string",
    "number": "string",
    "city": "string",
    "state": "string",
    "address": "string",
    "complement": "string",
    "type_user": "string"
  }
]
```
<br>

<p><strong>Listar usuário específico</strong></p>

```bash
# GET /user/:id - No body

# GET /user/:id - FORMATO DA RESPOSTA - STATUS 200
{
  "id": 0,
  "name": "string",
  "email": "string",
  "cpf": "string",
  "phone": "string",
  "date_of_birth": "string",
  "description": "string",
  "cep": "string",
  "number": "string",
  "city": "string",
  "state": "string",
  "address": "string",
  "complement": "string",
  "type_user": "string"
}
```
<br>

<p><strong>Editar dados de usuário específico</strong></p>

```bash
# PATCH /user/:id - FORMATO DA REQUISIÇÃO
{
  "name": "string",
  "email": "string",
  "cpf": "string",
  "phone": "string",
  "date_of_birth": "string",
  "description": "string",
  "cep": "string",
  "city": "string",
  "state": "string",
  "address": "string",
  "number": "string",
  "complement": "string",
  "type_user": "string",
  "password": "string"
}

# PATCH /user/:id - FORMATO DA RESPOSTA - STATUS 200
{
  "id": 0,
  "name": "string",
  "email": "string",
  "cpf": "string",
  "phone": "string",
  "date_of_birth": "string",
  "description": "string",
  "cep": "string",
  "number": "string",
  "city": "string",
  "state": "string",
  "address": "string",
  "complement": "string",
  "type_user": "string"
}
```
<br>

<p><strong>Deletar próprio usuário</strong></p>

```bash
# DELETE /user/:id - No body

# DELETE /user/:id - FORMATO DA RESPOSTA - STATUS 204 No content
```
<br>

<p><strong>Solicitar mudança de senha</strong></p>

```bash
# POST /user/resetPassword - FORMATO DA REQUISIÇÃO
{
    "email": "string"
}

# POST /user/resetPassword - FORMATO DA RESPOSTA - STATUS 200
message: "string"
```
<br>

<p><strong>Mudar senha</strong></p>

```bash
# PATCH /user/resetPassword/:token - FORMATO DA REQUISIÇÃO
{
    password: "string"
}

# PATCH /user/resetPassword/:token - FORMATO DA RESPOSTA - STATUS 200
message: "string"
```
<br><hr/>

<h2><strong>/cars</strong></h2><br>
<p><strong>Criar anúncio</strong></p>

```bash
# POST /cars - FORMATO DA REQUISIÇÃO
{
  "description": "string",
  "km": "string",
  "year": "string",
  "price": "string",
  "priceFipe": 0,
  "imageUrl": "string",
  "model": "string",
  "color": "string",
  "brand": "string",
  "fuel": "string",
  "isActive": true
}

# POST /cars - FORMATO DA RESPOSTA - STATUS 201
{
  "id": 0,
  "description": "string",
  "km": "string",
  "year": "string",
  "price": "string",
  "priceFipe": 0,
  "imageUrl": "string",
  "model": "string",
  "color": "string",
  "brand": "string",
  "fuel": "string",
  "isActive": true
}
```
<br>

<p><strong>Listar anúncios</strong></p>

```bash
# GET /cars - FORMATO DA REQUISIÇÃO - No body

# GET /cars - FORMATO DA RESPOSTA - STATUS 200
[
  {
    "id": 0,
    "description": "string",
    "km": "string",
    "year": "string",
    "price": "string",
    "priceFipe": 0,
    "imageUrl": "string",
    "model": "string",
    "color": "string",
    "brand": "string",
    "fuel": "string",
    "isActive": true
  }
]
```
<br>

<p><strong>Listar anúncios específico</strong></p>

```bash
# GET /cars/:id - FORMATO DA REQUISIÇÃO - No body

# GET /cars/:id - FORMATO DA RESPOSTA - STATUS 200
{
  "id": 0,
  "description": "string",
  "km": "string",
  "year": "string",
  "price": "string",
  "priceFipe": 0,
  "imageUrl": "string",
  "model": "string",
  "color": "string",
  "brand": "string",
  "fuel": "string",
  "isActive": true
}
```
<br>

<p><strong>Editar Anúncio</strong></p>

```bash
# PATCH /cars/:id - FORMATO DA REQUISIÇÃO
{
  "description": "string",
  "km": "string",
  "year": "string",
  "price": "string",
  "priceFipe": 0,
  "imageUrl": "string",
  "model": "string",
  "color": "string",
  "brand": "string",
  "fuel": "string",
  "isActive": true
}

# PATCH /cars/:id - FORMATO DA RESPOSTA - STATUS 200
{
  "id": 0,
  "description": "string",
  "km": "string",
  "year": "string",
  "price": "string",
  "priceFipe": 0,
  "imageUrl": "string",
  "model": "string",
  "color": "string",
  "brand": "string",
  "fuel": "string",
  "isActive": true
}
```
<br>

<p><strong>Deletar Anúncio</strong></p>

```bash
# DELETE /cars/:id - FORMATO DA REQUISIÇÃO - No body

# DELETE /cars/:id - FORMATO DA RESPOSTA - STATUS 204 - No content
```
<br>

<h2><strong>/comments</strong></h2><br>

<p><strong>Criar comentário</strong></p>

```bash
# POST /comments/:id - FORMATO DA REQUISIÇÃO

# POST /comments/:id - FORMATO DA RESPOSTA - STATUS 201
{
  "comment": "string",
  "created_at": "2023-06-30T03:59:08.368Z"
}
```
<br>

<p><strong>Listar comentário específico</strong></p>

```bash
# GET /comments/:id - FORMATO DA REQUISIÇÃO - No body

# GET /comments/:id - FORMATO DA RESPOSTA - STATUS 200
{
  "id": 0,
  "comment": "string",
  "created_at": "2023-06-30T04:00:25.539Z"
}
```
<br>

<p><strong>Editar comentário</strong></p>

```bash
# PATCH /comments/:id - FORMATO DA REQUISIÇÃO - No body

# PATCH /comments/:id - FORMATO DA RESPOSTA - STATUS 200
{
  "id": 0,
  "comment": "string",
  "created_at": "2023-06-30T04:00:25.539Z"
}
```
<br>

<p><strong>Deletar comentário</strong></p>

```bash
# PATCH /comments/:id - FORMATO DA REQUISIÇÃO - No body

# PATCH /comments/:id - FORMATO DA RESPOSTA - STATUS 200
```
<br>

<p><strong>Listar comentários</strong></p>

```bash
# GET /comments/:id - FORMATO DA REQUISIÇÃO - No body

# GET /comments/:id - FORMATO DA RESPOSTA - STATUS 200
[
  {
    "id": 0,
    "comment": "string",
    "created_at": "2023-06-30T04:05:13.966Z"
  }
]
```
<hr/>
<br>

<h2>⚛️ Equipe de Desenvolvimento</h2>

- Douglas Diniz - [Github](https://github.com/douglasdinizkenzie) | [Linkedin](https://www.linkedin.com/in/douglas-diniz-//)
- Edson Kokado - [Github](https://github.com/eskokado) | [Linkedin](https://www.linkedin.com/in/edson-shideki-kokado/)
- Fernanda Bollinger - [Github](https://github.com/febollinger) | [Linkedin](https://www.linkedin.com/in/fernandabollinger/)
- Lilian Dias - [Github](https://github.com/lilianfdias) | [Linkedin](https://www.linkedin.com/in/lilian-fernandes-oliveira-dias-4a159578/)
- Samir Dourado - [Github](https://github.com/samirdourado) | [Linkedin](https://www.linkedin.com/in/samirdourado/)

<p>Supervisionado por</p>

- Alex Silva - [Github](https://github.com/alexandersilvadev) | [Linkedin](https://www.linkedin.com/in/alesilva-dev/)

<hr/>
<hr/>
<hr/>
