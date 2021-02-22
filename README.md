# Proffy

Proffy foi um projeto realizado durante uma das semanas OmniStack. O projeto cosiste em uma aplicação multiplataforma que visa encontrar visitantes para crianças de orfanatos.

## Quer testar o projeto? Então bora lá.

Você vai precisar dos itens abaixo instalados em sua máquina:

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)

Instalados? Então vamos começar.

Em seu terminal, navegue até a pasta que deseja salvar o projeto. E execute o comando a seguir:

```bash
git clone https://github.com/Mayconsgs/Proffy.git
```

Projeto baixando, vamos aos comandos de execução.

## Back-end

Ainda no terminal, navegue até o diretório [server](https://github.com/Mayconsgs/Proffy/tree/master/server) e execute os comandos a seguir:

```bash
npm install
npm run knex:migrate
npm run start
```

Com isso seu servidor já deverá estar rodando na porta 3333 do seu computador. Pelo seu navegador, acesse [localhost:3333](http://localhost:3333/) e verifique se aparece a mensagem **Servidor funcionando!**.

> Não feche esse terminal. Mantenha o script executando para o funcionamento da aplicação.

## Web

Em um novo terminal, navegue até o diretório [web](https://github.com/Mayconsgs/Proffy/tree/master/web) e execute os comandos a seguir:

```bash
npm install
npm run start
```

E vualá, se tudo estiver certo, o React irá abrir o site em seu navegador padrão.

## Mobile

A parte mobile da aplicação ainda não está disponível. Mas será um app feito em Flutter, utilizando tudo que sei sobre a ferramenta. Fugindo um pouco da proposta inicial que era React Native
