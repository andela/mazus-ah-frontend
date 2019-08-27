# Authors' Haven
[![CircleCI](https://circleci.com/gh/andela/mazus-ah-frontend/tree/develop.svg?style=svg)](https://circleci.com/gh/andela/mazus-ah-frontend/tree/develop)
Authors' Haven is a social platform for authors to create articles and read articles posted by other authors.

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Html]()
- [CSS]()
- [Webpack](https://webpack.js.org/)

## Getting Started

**Development**

To clone and run this application, you'll need [Git](https://git-scm.com) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/andela/mazus-ah-frontend.git
```

Next, you will need to install the required dependencies for the project to be up and running on a development server on your machine. Simply enter the repository and do the following:

```bash
# cd into the repository
$ cd mazus-ah-frontend

# install the dependencies
$ npm install

# Strat the development sever
$ npm run dev
```
Upon running the last command, a new browser window should be opened at `localhost:8080` on your machine.

**Running Tests**

End to End and Unit tests are set up on this repository with Cypress, Jest and Enzyme and dependencies to enable them work are included in the `package.json` file. To run the tests, you can do the following:

```bash
# Enter the project's directory
$ cd mazus-ah-frontend/

# To run the available unit tests
$ npm test

# To run tests with coverage reports
$ npm run test:coverage

# To run end to end tests with Cypress
$ npm run e2e:test
```

## Contributors
- Odunayo Okebunmi
- Pelumi Aleshinloye
- Tolulope Odueke
- Samuel Ocran
- Emeka Ofe
- Oyetunji Abioye
- Victor Ajayi