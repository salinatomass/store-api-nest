# Nest.js + PostgreSQL with Docker

Initial setup using [Nest.js](https://github.com/nestjs/nest) framework and PostgreSQL with [Docker](https://www.docker.com/).

## Installation

```bash
# Clone the project
$ git clone git@github.com:salinatomass/docker-examples.git -b nestjs-app --single-branch my-project

# Go to the project directory
$ cd my-project

# Install dependencies
$ npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POSTGRES_DB`

`POSTGRES_USER`

`POSTGRES_PASSWORD`

## Run with Docker

```bash
# development
$ docker compose up -d

# build
$ docker build -t my-project-prod -f ./build/production.Dockerfile .

# production container
$ docker run -d -p 3000:3000 my-project-prod
```

## Run Locally

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# build
$ npm run build

# production mode
$ npm run start:prod
```

## Running Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author: [@salinatomass](https://salinatomass.netlify.app)
- Repository: [Link](https://github.com/salinatomass/docker-examples/)

## Support

For support, email salinatomass53@gmail.com.

## License

[MIT](https://choosealicense.com/licenses/mit/)

