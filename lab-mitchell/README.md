# Lab 31 ~ Redux

**Author**: Mitchell

**Version**: 1.0.0

# Overview
This application is a simple expense tracker that utilizes `Redux` to employ global state management in a store. The purpose of this is to reduce the amount of conceptual complexity encountered when building large scale applications with many moving parts and separation of concerns. `Redux` allows us to avoid passing down state and props potentially 5-10+ components down, and gives access to the global state only to those components that will be interacting with it.

# Getting Started
To get this application up and running, fork and/or clone this repository using the `git clone <git repository link>` command in your terminal. Next, run the `npm install` command, which will install all the necessary dependencies in the accompanying package.json file. If wanting to view tests, enter `npm install -D` into the command line. After those packages have installed, you can run `npm test` to explore the included tests and functionality of their respective solutions. You can open up the code in your favorite editor to explore/modify the code, see how the tests are structured, and create tests of your own if desired.

# Description
This application is segmented by the various `React` components. The `App` component is the highest level, and has two direct child components - `Landing` and `Dashboard`. `Dashboard` contains the overall application state, here `notes`, where all notes are stored. Its direct child components are `NoteCreateForm` and `NoteList`. `NoteCreateForm` manages data entered by users in the form fields, and adds that data to the `Dashboard` `notes` state. `NoteList` takes stored `notes` and displays them to the user in a view below the `NoteCreateForm`. It has a single child component, `NoteItem`, which adds the `remove` functionality to each note.

## Components
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem]
           CategoryForm  -- for updating categories
```

### App
This component is the highest level component of the application. It renders a `<main>` body section containing a few components: `<Provider>`, `<BrowserRouter>`, and `<Route>`.

### Provider
This component is imported from `react-redux` and is passed a `Redux` `{store}` as props.

### BrowserRouter
This component is imported from `react-router-dom` and is utilized to set up the routes fo the application.

### Route
This component determines the components that will render for the various specified paths. For this application, there is a single `<Route>` to the `/` endpoint, and renders the `<Dashboard>`.

### Dashboard
This component renders a `<section>` containing the `<CategoryForm>` and `<CategoryItem>` components. It passes the forms `{buttonText}` and `{onComplete}` props. It conditionally renders category items only if it is passed categories from the store. If there are, it passes those items `{category}` and `{key}` props. 

### CategoryForm
This component renders a `<form>` with name and budget `<input>`s, and a `<button>` that dynamically renders text based off of whatever `{buttonText}` the component was passed as props. It captures form data entered by users with the `handleChange()` method, and updates store state with the `handleSubmit()` method.

### CategoryItem
This component renders `<div>`s for each individual component. It displays the component name and budget, a `<button>` that deletes the item if clicked using the `handleDelete()` method, and conditionally renders a `<CategoryForm>` if the `<div>` is double clicked that is passed an update `{onComplete}` and `{buttonText}`. Upon submission of the update form, any fields that changed will be re-rendered in the component.

***

# Credits 
**<details>**
  <summary>Tools and Libraries [click to expand]</summary>

  * [Babel Core](https://www.npmjs.com/package/babel-core) ~ npmjs.com/package/babel-core
  * [Babel Loader](https://www.npmjs.com/package/babel-loader) ~ npmjs.com/package/babel-loader 
  * [Babel Plugin Transform Object Rest Spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread) ~  npmjs.com/package/babel-plugin-transform-object-rest-spread
  * [Babel Preset Env](https://www.npmjs.com/package/babel-preset-env) ~ npmjs.com/package/babel-preset-env
  * [Babel Preset React](https://www.npmjs.com/package/babel-preset-react) ~ npmjs.com/package/babel-preset-react
  * [CSS Loader](https://www.npmjs.com/package/css-loader) ~ npmjs.com/package/css-loader 
  * [Enzyme](https://www.npmjs.com/package/enzyme) ~ npmjs.com/package/enzyme
  * [Enzyme Adapter React 16](https://www.npmjs.com/package/enzyme-adapter-react-16) ~ npmjs.com/package/enzyme-adapter-react-16
  * [ESLint](https://www.npmjs.com/package/eslint) ~ npmjs.com/package/eslint
  * [Extract Text Webpack Plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) ~ npmjs.com/package/extract-text-webpack-plugin
  * [HTML Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin) ~ npmjs.com/package/html-webpack-plugin
  * [Jest](https://facebook.github.io/jest/) ~ facebook.github.io/jest/
  * [Node SASS](https://www.npmjs.com/package/node-sass) ~ npmjs.com/package/node-sass
  * [React](https://www.npmjs.com/package/react) ~ npmjs.com/package/react
  * [React DOM](https://www.npmjs.com/package/react-dom) ~ npmjs.com/package/react-dom
  * [SASS Loader](https://www.npmjs.com/package/sass-loader) ~ npmjs.com/package/sass-loader
  * [Webpack](https://www.npmjs.com/package/webpack) ~ npmjs.com/package/webpack
  * [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) ~ npmjs.com/package/webpack-dev-server
</details>

