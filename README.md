# OmdbSearch

This is a simple project using the [omdb api](https://www.omdbapi.com/) to search for a particular movie by title. As simple as is, I decided to add a more complex structure as a monorepo using [NX](nx.dev) to manage it.

The project consists of type a movie title in an input, making a request for the ombdb API, and showing some information, when you pressing the Search button. And also clear the movie information when press the Clear button.

## Install and Run

This project is using **node 18.16.1**, and I strongly suggest using a node version manager like nvm. Using the correct version of node, run the install command:

```
npm install
```

The command to run the application is in the scripts section as a shortcut.

```
npm start
```

or the full command using nx cli

```
npx nx run omdb-search:serve
```

## Structure

I decided to use a monorepo structure to make the code more isolated and provide flexibility.

![graph of the structure](graph.png 'Graph of the structure')

As can be seen in the graph above, I decided to split the main app into different libraries.

- **shared**, could contain different Services, Pipes, and Directives for all other libs and apps;
- **common-ui**, which contains the basic and common ui components for all libs and apps;
- **movie-data-access-movie**, has the responsibility of the **NgRx** store manipulation;
- **movie-feature-search-movie**, contains the search page using the features needed to make the movie search;

## Stack

For my current projects, I always use NX and the latest version of Angular, with the latest features. So in this project, I am using:

- @angular/core: 16.1.0, the framework;
- @ngrx/store: 16.0.0, the store manager;
- @fortawesome/angular-fontawesom: 0.13.0, for icons;
- bootstrap: 5.3.0, the UI framework;

In the dev dependencies side:

- @nx/workspace: 16.5.3, to manage the monorepo;
- @storybook/angular: 7.1.0, a tool to render, develop and document the reusable components;
- jest: 29.4.1, the test runner;
- @ngneat/spectator, 15.0.1, the test syntax sugar lib;

## Storybook

The **common-ui** and **movie-feature-search-movie** has the storybook config to display the stories for its components.
To run the storybook command, replacing the lib name:

```
npx nx run [lib]:storybook
```

## Technical highlights

- Angular module-less, using standalone components;
- Structural directive;
- Modern monorepo archtecture;

## Improvements

- Finish the tests;
- Improve the layout and experience;
- Add another page or a switch for search by Id or display the full movie plot;
- Add one more integration to get other text reviews;
