# MercadoLibre Backend

## Description

MercadoLibre backend services wich provides a API REST. Operate with NestJS framework

## Requirements

The following softwares are required to run this project

- [NodeJS](https://nestjs.com/) - Version 18.X.X or above (You can use [NVM](https://github.com/nvm-sh/nvm) for installation)
- [Recommended] [Docker](https://www.docker.com/) - Version 20.10.X

## Environment Variables

```bash
STATE=
API_PORT=
MERCADO_LIBRE_API=
```

## Install

```bash
yarn install
```

## Run

### Enviroment dev

```bash
yarn start:dev
```

## Build

Replace .env.template to .env for development or to .env.prod to production.

### Enviroment prod

```bash
yarn build
```

## Run

### Enviroment prod

```bash
yarn start
```

## Run Local Unit Testing

### Enviromentdev

```bash
yarn test
```

## Apollo Server

```bash
http://localhost:${API_PORT}
```

## Authors

- [@Jaime Rodriguez](https://github.com/jaimeRodriguezg)
