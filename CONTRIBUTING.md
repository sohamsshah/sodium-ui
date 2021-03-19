# Contributing to Sodium-UI

If you are reading this, you rock 🎸 Thanks for showing interest in contributing to Sodium-UI and being part of the community. At **Sodium UI** we aim to make Open Source cake walk for the contributors and are always ready to assist you for all your queries. Here are some guidelines that will help you along the way.

## Setup the Project

Follow the below mentioned steps to setup the dev environment:
1. Fork this Repository
2. Clone your fork locally
```sh
git clone https://github.com/<your_github_username>/sodium-ui.git
cd sodium-ui
```
3. Install all the development dependencies for your project via npm.
```
npm install
```
4. To visualize the UI components and to test the behaviour, **Sodium-UI** uses [Storybook](https://storybook.js.org/). To setup storybook, run
```
// using npm
npm run storybook

// or using yarn
yarn storybook
```
This will open Storybook at https://localhost:6006

5. Once done with the changes, to test the working of the library, first bundle using [rollup.js](https://rollupjs.org/). Run
```
npm run build-sodium
```
6. You can use ```npm link``` to test the library in your local machine. 
7. After the appropriate testing and development of the feature/bug you resolved, feel free to make a PR. We will be happy to review it ASAP.

**Note**: Working on a remote branch is preferred for a particular feature/bug. Maintain [Open Source Spirit](https://dev.to/sohamsshah/7-open-source-spirits-you-must-know-58bp) and enjoy Open Sourcing ;)

## Code of Conduct

Sodium-UI has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Licence
By contributing your code to the sodium-ui GitHub repository, you agree to license your contribution under the MIT license.
