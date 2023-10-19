# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- REST API
- [React](https://reactjs.org/) - JS library

### What I learned

- Creating a custom select menu using React and CSS
- Using the useCallback hook while sending http requests
- Filtering data based on user input at each keystroke
- Filtering data based on more than one user input
- Using data-theme together with context to provide dark more option
- Using React Router to render different pages
- Using useNavigate from 'react-router-dom'

### Continued development

- Add a default error page
- Refactor the CountryData component to map through the country data without manually typing out all the data names and values
