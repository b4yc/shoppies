# Shoppies

## [Link to Deployed Site](http://b4yc.github.io/shoppies)

## Overview

This webpage searches [OMDB](http://www.omdbapi.com) for movies using their free API. It allows you to save your favourite movies that you'd like to nominate. You can save up to 5 nominations, and it'll notify you once 5 movies are nominated.

## Features

- Search and display results (10 on each page)
- Add movies to your nomination list
- View your nominations and remove movies from your nomination list
- Nominations are saved even if you leave the page

## Technical Details

To edit and deploy this project locally, run the following commands in the directory of your choice:

```bash
git clone https://github.com/b4yc/shoppies/
cd shoppies
yarn add
yarn start
```
Unit testing is performed using Jest and the React Testing Library. Run tests using:

```bash
yarn test
```

## About

This app is built with:

- [React](https://reactjs.org)
- [Semantic UI](https://react.semantic-ui.com)
- [Yarn Package Manager](https://yarnpkg.com)

It's bootstrapped and using [create-react-app](https://github.com/facebook/create-react-app), and additional styling is provided by Semantic UI.

