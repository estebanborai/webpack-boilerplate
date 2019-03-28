# webpack-boilerplate
## Basic webpack setup ready to clone and start developing

### Usage
```bash
git clone https://github.com/gitpullsh/webpack-boilerplate.git
cd webpack-boilerplate
# using yarn
yarn && yarn install
# using npm
npm i
```

### Run with Docker
```bash
# clone the repo
docker-compose up
```

#### Requirements
- [Node.js](https://nodejs.org/)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Editor Config](https://marketplace.visualstudio.com/items?itemName=chrisdias.vscodeEditorConfig)


#### Scripts
Script | Usage
--- | ---
| `start` | Starts the webpack development server (*webpack-dev-server*) and opens the default browser with the configured localhost port. |
| `build` | Creates the bundle of the project. |
