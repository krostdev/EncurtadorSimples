### Encurtador Simples (Javascript)
<hr>

### Dependencias:

- Node.js | v20.12.2
- Express | npm i express
- Mongoose | npm i mongoose
- DotEnv | npm i dotenv
- Cors | npm i cors

### Usage:

- Iniciar | `node src`
  ### Rotas:
  
  - /encurtar (POST)
    - Body Exemplo:
      ```json
          {
            "link": "http://google.com"
          }
      ```
    - Resposta:
      ```json
      {
        "link": "http://google.com",
        "linkId": "R4OJ5R5",
        "encurtedUrl": "http://seudominio.com/R4OJ5R5"
      }
      ```

  - /\<linkId> (GET)
    - Redireciona o usuário para o link setado no linkId

### Créditos:
- **@krostdev (Discord)**
